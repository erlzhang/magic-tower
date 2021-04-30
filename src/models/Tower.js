import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GRID, SIZE } from "../settings"

import Ground from "./Ground";

export default class Tower {
  constructor() {
    this.floors = [];
  }

  init() {
    this.scene = this.addScene();

    this.renderer = this.addRenderer();

    this.camera = this.addCamera();

    this.control = this.addControl();

    this.putLights();

    this.animate();

    this.ground = this.putGround();
  }

  addRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    return renderer;
  }

  addScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xe0e0e0 );
    return scene;
  }

  addCamera() {
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, -SIZE, SIZE / 2 );
    return camera;
  }

  addControl() {
    const control = new OrbitControls(this.camera, this.renderer.domElement);
    control.update();
    return control;
  }

  putLights() {
    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, -SIZE, 0 );
    this.scene.add( hemiLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, -SIZE, SIZE / 2 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 8;
    directionalLight.shadow.camera.bottom = - 5;
    directionalLight.shadow.camera.left = - 5;
    directionalLight.shadow.camera.right = 8;
    this.scene.add( directionalLight );
  }

  putGround() {
    const ground = new Ground();
    ground.add();
    return ground;
  }

  animate() {
    requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    this.controls.update();
  }
}