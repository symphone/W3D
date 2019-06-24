function makeRoom( mesh, w, h, d)
{
	w /= 2;
	h /= 2;
	d = -d;
	// BACK
	mesh.pushQuad( new J3DIVector3( 0.0, 0.0, 0.0),
			   new J3DIVector3( -w, -h, d), new J3DIVector3( w, -h, d), new J3DIVector3( w, h, d), new J3DIVector3( -w, h, d),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 6.0, 4.0, 0.0),
			   [ 1.0, 1.0, 0.0, 1.0], [ 1.0, 1.0, 0.0, 1.0]);

	// LEFT
	mesh.pushQuad( new J3DIVector3( 0.0, 0.0, 0.0),
			   new J3DIVector3( -w, -h, 0), new J3DIVector3( -w, -h, d), new J3DIVector3( -w, h, d), new J3DIVector3( -w, h, 0),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 4.0, 4.0, 0.0),
			   [ 1.0, 1.0, 0.0, 1.0], [ 1.0, 1.0, 0.0, 1.0]);

	// RIGHT
	mesh.pushQuad( new J3DIVector3( 0.0, 0.0, 0.0),
			   new J3DIVector3( w, -h, d), new J3DIVector3( w, -h, 0), new J3DIVector3( w, h, 0), new J3DIVector3( w, h, d),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 4.0, 4.0, 0.0),
			   [ 1.0, 1.0, 0.0, 1.0], [ 1.0, 1.0, 0.0, 1.0]);

	// BOTTOM
	mesh.pushQuad( new J3DIVector3( 0.0, 0.0, 0.0),
			   new J3DIVector3( -w, -h, 0), new J3DIVector3( w, -h, 0), new J3DIVector3( w, -h, d), new J3DIVector3( -w, -h, d),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 0.0, 0.0, 1.0], [ 1.0, 0.0, 0.0, 1.0]);

	// TOP
	mesh.pushQuad( new J3DIVector3( 0.0, 0.0, 0.0),
			   new J3DIVector3( -w, h, d), new J3DIVector3( w, h, d), new J3DIVector3( w, h, 0), new J3DIVector3( -w, h, 0),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 0.0, 0.0, 1.0], [ 1.0, 0.0, 0.0, 1.0]);

	//// CUBE 1 ////
	h /= 3.0;
	d /= 3.0;
	var pos = new J3DIVector3( w * 0.5, h * -2.0, d);
	// FRONT
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, -h, h), new J3DIVector3( h, -h, h), new J3DIVector3( h, h, h), new J3DIVector3( -h, h, h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// TOP
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, h, h), new J3DIVector3( h, h, h), new J3DIVector3( h, h, -h), new J3DIVector3( -h, h, -h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// LEFT
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, -h, -h), new J3DIVector3( -h, -h, h), new J3DIVector3( -h, h, h), new J3DIVector3( -h, h, -h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// RIGHT
	mesh.pushQuad( pos,
			   new J3DIVector3( h, -h, h), new J3DIVector3( h, -h, -h), new J3DIVector3( h, h, -h), new J3DIVector3( h, h, h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);


	//// CUBE 2 ////
	var pos = new J3DIVector3( w * -0.5, h * -2.0, d - 37.0);
	// FRONT
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, -h, h), new J3DIVector3( h, -h, h), new J3DIVector3( h, h, h), new J3DIVector3( -h, h, h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// TOP
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, h, h), new J3DIVector3( h, h, h), new J3DIVector3( h, h, -h), new J3DIVector3( -h, h, -h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// LEFT
	mesh.pushQuad( pos,
			   new J3DIVector3( -h, -h, -h), new J3DIVector3( -h, -h, h), new J3DIVector3( -h, h, h), new J3DIVector3( -h, h, -h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
	// RIGHT
	mesh.pushQuad( pos,
			   new J3DIVector3( h, -h, h), new J3DIVector3( h, -h, -h), new J3DIVector3( h, h, -h), new J3DIVector3( h, h, h),
			   new J3DIVector3( 0.0, 0.0, 0.0), new J3DIVector3( 1.0, 1.0, 0.0),
			   [ 1.0, 1.0, 1.0, 1.0], [ 1.0, 1.0, 1.0, 1.0]);
}

var mvp = new J3DIMatrix4();
var qSize = 10.0;
var mesh = new SimpleMeshGL( 30 * 3);
makeRoom( mesh, 95, 50, 100);

var glController = new WebGLController( 'canvasGL');
var gl = glController.glContext;
glController.resize( 950, 500);
//document.body.insertBefore( glController.canvas, null);

var program = glController.createProgram( 'vshader', 'fshader', ['position', 'texCoord', 'color']);
gl.useProgram(program);
gl.frontFace( gl.CCW);
gl.enable( gl.CULL_FACE);
gl.enable( gl.DEPTH_TEST);
gl.enable( gl.BLEND);
gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

mesh.updateVBOs( glController.glContext);

var texture = null;
var textureImg = new Image();
textureImg.crossOrigin = "";
textureImg.src = "https://i.imgur.com/fQEQTRc.jpg";
function onTextureLoad()
{
	texture = gl.createTexture();
	gl.bindTexture( gl.TEXTURE_2D, texture);
	gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImg);
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	gl.bindTexture( gl.TEXTURE_2D, texture);
	gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImg);
}
textureImg.onload = onTextureLoad;

var tick=0;
var headX = 0;
var headY = 0;
glController.onFrameUpdate = function() 
{
	var gl = glController.glContext;
	gl.clearColor( 0.8, 0.0, 0.0, 1.0);
	gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.uniform1i( gl.getUniformLocation(program, "texture"), 0);
	
	var uloc = gl.getUniformLocation(program, "mvp");
	
	//////
	var near = 0.1;
	var far = 1000.0;
	var fov = Math.tan( 30 * Math.PI / 360)
    var ratio = glController.canvas.width / glController.canvas.height;
		 
    // CREATE OFF-AXIS PROJECTION MATRIX
    var persp = new J3DIMatrix4();
		persp.makeIdentity();
    persp.frustum(near*(-fov * ratio + headX),
               near*(fov * ratio + headX),
               near*(-fov + headY),
               near*(fov + headY),
               near, far);
     
    // CREATE OFFSET MODELVIEW MATRIX
    var dis = -93.3;

	var mv = new J3DIMatrix4();
    mv.makeIdentity();
    mv.lookat( headX * dis, headY * dis, 0, headX * dis, headY * dis, -1, 0, 1, 0);
    mv.translate( 0.0, 0.0, dis);
	//////
		
	mvp.load( persp);
	mvp.multiply( mv);
	mvp.setUniform( gl, uloc, false);

	mesh.render( gl);

	tick++;
}
glController.startAnimating();

glController.canvas.onmousemove = function(evt) {
	// get canvas position
    var obj = glController.canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;

	headX = (mouseX / 950.0 * 2.0) - 1.0;
	headY = ((500.0 - mouseY) / 500.0 * 2.0) - 1.0;
	headX *= 0.5;
	headY *= 0.25;
};