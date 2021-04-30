import Base from "./Base";
import * as THREE from 'three';
import { GRID } from "../settings"

export default class extends Base {
  constructor(scene, position) {
    super(scene, position)
  }

  create(position) {
    const geometry = new THREE.BoxGeometry(GRID, GRID, GRID);

    const texture = new THREE.TextureLoader().load( "brick_diffuse.jpg" );
		texture.anisotropy = 4;

    const material = new THREE.MeshPhongMaterial( { map: texture } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = position.x;
    cube.position.y = position.y;
    cube.position.z = position.z;
    return cube;
  }
}