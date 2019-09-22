//import * as THREE from './build/three.module.js';
import {scene,initThree} from './threemain.js';
import { createDungeon } from './dungeon.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
var camera, renderer, light, controls;
var keyboard = new KeyboardState(), player = new THREE.Object3D(), flashLight, toggle = true, spotLightHelper, target, isMoving = false;
init();
animate();

function init(){
	initThree();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x888888);
	document.body.appendChild(renderer.domElement);
	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableKeys = false;
	light = new THREE.DirectionalLight(0xffffff, 0.25);
	light.position.set(20, 100, 10);
	scene.add(light);

	var lightA = new THREE.AmbientLight(0x111111, 0.5);
	scene.add(lightA);
	createDungeon();
}
function animate() {
	
	keyboard.update();
      if(toggle == true && isMoving == false){
    	  if (keyboard.pressed ('W')){
          let v1 = new THREE.Vector3(0, 0, 1).applyQuaternion( player.quaternion );
          let Dis = player.position.clone().add(v1.multiplyScalar(-1));
          let tween = new TWEEN.Tween(player.position)
                    .to(Dis, 200)
                    .onStart(function(){
                      isMoving = true;
                    })
                    .onComplete(function(){
                      isMoving = false;
                    })
                    .start();
    	  	//camera.translateZ(-1);
        }
    	  else if (keyboard.pressed ('S')){
          let v1 = new THREE.Vector3(0, 0, 1).applyQuaternion( player.quaternion );
          let Dis = player.position.clone().add(v1.multiplyScalar(1));
          let tween = new TWEEN.Tween(player.position)
                    .to(Dis, 200)
                    .onStart(function(){
                      isMoving = true;
                    })
                    .onComplete(function(){
                      isMoving = false;
                    })
                    .start();
    	  	//camera.translateZ(1);
        }
        else if (keyboard.pressed ('A')){
            let R = {x: 0, y:player.rotation.y + Math.PI/2, z:0};
            let tween = new TWEEN.Tween(player.rotation)
                      .to(R, 500)
                      .onStart(function(){
                        isMoving = true;
                      })
                      .onComplete(function(){
                        isMoving = false;
                      })
                      .start();
    	  	//camera.rotation.y -= Math.PI/2;
        }
        else if (keyboard.pressed ('D')){
            let R = {x: 0, y:player.rotation.y - Math.PI/2, z:0};
            let tween = new TWEEN.Tween(player.rotation)
                        .to(R, 500)
                        .onStart(function(){
                          isMoving = true;
                        })
                        .onComplete(function(){
                          isMoving = false;
                        })
                        .start();
            //camera.rotation.y += Math.PI/2;
        }
      }


      requestAnimationFrame(animate);
      TWEEN.update();
      render();
    
}
function render() {
  if(toggle === true)
	renderer.render(scene, camera);
  else
	renderer.render(scene, camera2);
}