//	Author: Ben Hopkins (kode80)
//	Date: April 1st, 2012

/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function( callback, element) {
           return window.setTimeout(callback, 1000/60);
         };
})();

/**
 * Provides cancelRequestAnimationFrame in a cross browser way.
 */
window.cancelRequestAnimFrame = (function() {
  return window.cancelCancelRequestAnimationFrame ||
         window.webkitCancelRequestAnimationFrame ||
         window.mozCancelRequestAnimationFrame ||
         window.oCancelRequestAnimationFrame ||
         window.msCancelRequestAnimationFrame ||
         window.clearTimeout;
})();


/****************************************************************************************************
 *	WebGLController
 ****************************************************************************************************/

var WebGLController = function( optionalCanvasID)
{
    var c;
    if( optionalCanvasID)
        c = document.getElementById( optionalCanvasID);
    else
        c = document.createElement( 'canvas');

	var _this = this;
	c.addEventListener('webglcontextlost', function( evt) { _this._handleContextLost( evt);}, false);
  c.addEventListener('webglcontextrestored', function() { _this._handleContextRestored();}, false);
   this.canvas = c;
	this.glContext = this._createGLContext();
	this.isAnimating = false;
	this.animRequestID = null;
	this.perspectiveMatrix = new J3DIMatrix4();

	this.onFrameUpdate = null;
	this.onLostContext = null;
	this.onRestoredContext = null;
	this.onResize = null;
};

/****************************************************************************************************
 *	resize
 ****************************************************************************************************/

WebGLController.prototype.resize = function( w, h)
{
	this.canvas.width = w;
	this.canvas.height = h;

	this.glContext.viewport( 0, 0, w, h);
	this.perspectiveMatrix = new J3DIMatrix4();
	this.perspectiveMatrix.perspective( 30, w / h, 1, 10000);
	
	if( this.onResize)
		this.onResize( this);
}

/****************************************************************************************************
 *	render
 ****************************************************************************************************/

WebGLController.prototype.updateFrame = function()
{
	if( this.onFrameUpdate)
		this.onFrameUpdate( this);

	var _this = this; 
	if( this.isAnimating)
		this.animRequestID = window.requestAnimFrame( function(){ _this.updateFrame();}, this.canvas);
}

/****************************************************************************************************
 *	startAnimating
 ****************************************************************************************************/

WebGLController.prototype.startAnimating = function()
{
	if( this.isAnimating)
		return;
	this.isAnimating = true;
	this.updateFrame();
};

/****************************************************************************************************
 *	stopAnimating
 ****************************************************************************************************/

WebGLController.prototype.stopAnimating = function()
{
	if( !this.isAnimating)
		return;
	this.isAnimating = false;

	if( this.animRequestID)
	{
		window.cancelRequestAnimFrame( this.animRequestID);
		this.animRequestID = null;
	}
};

/****************************************************************************************************
 *	createProgram
 ****************************************************************************************************/

WebGLController.prototype.createProgram = function( vertexShaderID, fragmentShaderID, attribs)
{
	var gl = this.glContext;
    var vertexShader = this._loadShader( gl, vertexShaderID);
    var fragmentShader = this._loadShader( gl, fragmentShaderID);

    var program = gl.createProgram();

    gl.attachShader( program, vertexShader);
    gl.attachShader( program, fragmentShader);

    for (var i = 0; i < attribs.length; ++i)
        gl.bindAttribLocation( program, i, attribs[i]);

    gl.linkProgram( program);

    var linked = gl.getProgramParameter( program, gl.LINK_STATUS);
    if (!linked && !gl.isContextLost()) 
    {
        var error = gl.getProgramInfoLog( program);
        alert( "Error in program linking:"+error);

        gl.deleteProgram( program);
        gl.deleteProgram( fragmentShader);
        gl.deleteProgram( vertexShader);

        return null;
    }

    return program;
};

/****************************************************************************************************
 *	Internal Functions
 ****************************************************************************************************/

WebGLController.prototype._createGLContext = function( opt_attribs)
{
	var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
	var context = null;
	for (var i = 0; i < names.length; ++i) 
	{
		try {
		context = this.canvas.getContext( names[i], opt_attribs);
		} catch(e) {}

		if (context)
			break;
	}
	return context;
}

WebGLController.prototype._handleContextLost = function( evt)
{
	e.preventDefault();
	alert( 'lost gl context');

	if( this.animRequestID)
	{
		window.cancelRequestAnimFrame( this.animRequestID);
		this.animRequestID = null;
	}

	if( this.onLostContext)
		this.onLostContext();
}

WebGLController.prototype._handleContextRestored = function()
{
	this.glContext = this._createGLContext( this.canvas);
	this.updateFrame();

	if( this.onRestoredContext)
		this.onRestoredContext();	
}

WebGLController.prototype._loadShader = function( gl, shaderId)
{
    var shaderScript = document.getElementById(shaderId);
    if( !shaderScript) 
    {
        log("*** Error: shader script '"+shaderId+"' not found");
        return null;
    }

    if( shaderScript.type == "x-shader/x-vertex")
        var shaderType = gl.VERTEX_SHADER;
    else if( shaderScript.type == "x-shader/x-fragment")
        var shaderType = gl.FRAGMENT_SHADER;
    else 
    {
        log("*** Error: shader script '"+shaderId+"' of undefined type '"+shaderScript.type+"'");
        return null;
    }

    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderScript.text);
    gl.compileShader(shader);

    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled && !gl.isContextLost()) 
    {
        var error = gl.getShaderInfoLog( shader);
        log("*** Error compiling shader '"+shaderId+"':"+error);
        gl.deleteShader( shader);
        return null;
    }

    return shader;
};