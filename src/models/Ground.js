import Base from "./Base";
import * as THREE from "three";
import { GRID, SIZE } from "../settings";

export default class extends Base {
  constructor(scene) {
    super(scene)
  }

  create() {
    const ground = new THREE.Mesh( new THREE.PlaneGeometry( SIZE * 2, SIZE * 2 ), new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } ) );
    ground.receiveShadow = true;

    const grid = new THREE.GridHelper(  SIZE * 2, SIZE * 2 / GRID, 0x000000, 0x000000 );
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    ground.rotation.z = 0
    this.grid = grid;
    return ground;
  }

  add() {
    super.add();

    //this.scene.add(this.grid);
  }
}