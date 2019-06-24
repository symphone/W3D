//	Author: Ben Hopkins (kode80)
//	Date: April 1st, 2012

/****************************************************************************************************
 *	SimpleMeshGL
 ****************************************************************************************************/

var SimpleMeshGL = function(capacity)
{
	this.capacity = capacity;
	this.vertexCount = 0;
	this.positions = new Float32Array( capacity * 3);
	this.texCoords = new Float32Array( capacity * 2);
	this.colors = new Float32Array( capacity * 4);

	this.positionsVBO = null;
	this.texCoordsVBO = null;
	this.colorsVBO = null;
}

/****************************************************************************************************
 *	render
 ****************************************************************************************************/

SimpleMeshGL.prototype.render = function( gl)
{
	gl.enableVertexAttribArray(0);
	gl.enableVertexAttribArray(1);
	gl.enableVertexAttribArray(2);

	gl.bindBuffer( gl.ARRAY_BUFFER, this.positionsVBO);
	gl.vertexAttribPointer( 0, 3, gl.FLOAT, false, 0, 0);

	gl.bindBuffer( gl.ARRAY_BUFFER, this.texCoordsVBO);
	gl.vertexAttribPointer( 1, 2, gl.FLOAT, false, 0, 0);

	gl.bindBuffer( gl.ARRAY_BUFFER, this.colorsVBO);
	gl.vertexAttribPointer( 2, 4, gl.FLOAT, false, 0, 0);

	gl.drawArrays( gl.TRIANGLES, 0, this.vertexCount);
}

/****************************************************************************************************
 *	updateVBOs
 ****************************************************************************************************/

SimpleMeshGL.prototype.updateVBOs = function( gl)
{
	if( !this.positionsVBO) this.positionsVBO = gl.createBuffer();
	if( !this.texCoordsVBO) this.texCoordsVBO = gl.createBuffer();
	if( !this.colorsVBO) this.colorsVBO = gl.createBuffer();

	gl.bindBuffer( gl.ARRAY_BUFFER, this.positionsVBO);
    gl.bufferData( gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    gl.bindBuffer( gl.ARRAY_BUFFER, this.texCoordsVBO);
    gl.bufferData( gl.ARRAY_BUFFER, this.texCoords, gl.STATIC_DRAW);

    gl.bindBuffer( gl.ARRAY_BUFFER, this.colorsVBO);
    gl.bufferData( gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
}

/****************************************************************************************************
 *	pushQuad
 ****************************************************************************************************/

SimpleMeshGL.prototype.pushQuad = function( posOffset, v1, v2, v3, v4, texCoord1, texCoord2, color1, color2)
{
	if( this.vertexCount + 6 > this.capacity)
		return;

	var pi = this.vertexCount * 3;
	var ti = this.vertexCount * 2;
	var ci = this.vertexCount * 4;

	// TRI 1
	
	this.positions[pi++] = posOffset[0] + v1[0];
	this.positions[pi++] = posOffset[1] + v1[1];
	this.positions[pi++] = posOffset[2] + v1[2];
	this.texCoords[ti++] = texCoord1[0];
	this.texCoords[ti++] = texCoord2[1];
	this.colors[ci++] = color2[0];
	this.colors[ci++] = color2[1];
	this.colors[ci++] = color2[2];
	this.colors[ci++] = color2[3];
	
	this.positions[pi++] = posOffset[0] + v2[0];
	this.positions[pi++] = posOffset[1] + v2[1];
	this.positions[pi++] = posOffset[2] + v2[2];
	this.texCoords[ti++] = texCoord2[0];
	this.texCoords[ti++] = texCoord2[1];
	this.colors[ci++] = color2[0];
	this.colors[ci++] = color2[1];
	this.colors[ci++] = color2[2];
	this.colors[ci++] = color2[3];
	
	this.positions[pi++] = posOffset[0] + v4[0];
	this.positions[pi++] = posOffset[1] + v4[1];
	this.positions[pi++] = posOffset[2] + v4[2];
	this.texCoords[ti++] = texCoord1[0];
	this.texCoords[ti++] = texCoord1[1];
	this.colors[ci++] = color1[0];
	this.colors[ci++] = color1[1];
	this.colors[ci++] = color1[2];
	this.colors[ci++] = color1[3];
	
	// TRI 2
	
	
	this.positions[pi++] = posOffset[0] + v4[0];
	this.positions[pi++] = posOffset[1] + v4[1];
	this.positions[pi++] = posOffset[2] + v4[2];
	this.texCoords[ti++] = texCoord1[0];
	this.texCoords[ti++] = texCoord1[1];
	this.colors[ci++] = color1[0];
	this.colors[ci++] = color1[1];
	this.colors[ci++] = color1[2];
	this.colors[ci++] = color1[3];
	
	this.positions[pi++] = posOffset[0] + v2[0];
	this.positions[pi++] = posOffset[1] + v2[1];
	this.positions[pi++] = posOffset[2] + v2[2];
	this.texCoords[ti++] = texCoord2[0];
	this.texCoords[ti++] = texCoord2[1];
	this.colors[ci++] = color2[0];
	this.colors[ci++] = color2[1];
	this.colors[ci++] = color2[2];
	this.colors[ci++] = color2[3];
	
	this.positions[pi++] = posOffset[0] + v3[0];
	this.positions[pi++] = posOffset[1] + v3[1];
	this.positions[pi++] = posOffset[2] + v3[2];
	this.texCoords[ti++] = texCoord2[0];
	this.texCoords[ti++] = texCoord1[1];
	this.colors[ci++] = color1[0];
	this.colors[ci++] = color1[1];
	this.colors[ci++] = color1[2];
	this.colors[ci++] = color1[3];

	this.vertexCount += 6;
}