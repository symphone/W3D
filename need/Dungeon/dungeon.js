    
	//import * as THREE from './build/three.module.js';
	import {scene} from './threemain.js';
	var map =  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
				
	function createDungeon(){
	  let dungeon = new THREE.Object3D();
      let texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/symphone/W3D/master/test/hologramTest/images/8021-diffuse.jpg");
      let bump = new THREE.TextureLoader().load("https://raw.githubusercontent.com/symphone/W3D/master/test/hologramTest/images/8021-bump.jpg");
      let material = new THREE.MeshPhongMaterial({color: 0x666666, map:texture, bumpMap:bump, bumpScale:0.1});
      let basicWallGeom = new THREE.BoxGeometry(1, 1, 1);
      let basicTileGeom = new THREE.PlaneGeometry(1, 1, 1);

      for (let y = 0; y < map.length; y++) {
        let row = map[y];
        for (let x = 0; x < row.length; x++){
          let type = row[x];

          if (type == 0) {
               let mesh = new THREE.Mesh(basicWallGeom, material);
              // mesh.castShadow = true;
              // mesh.receiveShadow = true;

               mesh.position.x = x;
               mesh.position.y = 0.5;
               mesh.position.z = y;
               scene.add(mesh);
           }
           else if (type == 1 || type == 2) {
               let floorMesh = new THREE.Mesh(basicTileGeom, material);
              // floorMesh.castShadow = true;
              // floorMesh.receiveShadow = true;

               floorMesh.position.x = x;
               floorMesh.position.y = 0;
               floorMesh.position.z = y;
               floorMesh.rotation.x = Math.PI*-0.5;
               scene.add(floorMesh);

               let ceilMesh = new THREE.Mesh(basicTileGeom, material);
            //   ceilMesh.castShadow = true;
            //   ceilMesh.receiveShadow = true;

               ceilMesh.position.x = x;
               ceilMesh.position.y = 1;
               ceilMesh.position.z = y;
               ceilMesh.rotation.x = Math.PI*0.5;
               scene.add(ceilMesh);
           }
        }
      }
    }			
	export {createDungeon};