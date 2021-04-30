import Base from "./Base";
import * as THREE from 'three';
import { GRID } from "../settings"
import Barrier from "./Barrier"

export default class extends Base {
  constructor(scene, params) {
    super(scene, params)
  }

  create(params = {}) {
    const { start, end } = params;
    if (start.x !== end.x && start.y !== end.y) {
      return new Error("Not a Valid Wall!");
    }

    let barriers = []
    if (start.x === end.x) {
      for (let y = start.y; y < end.y; y+=GRID) {
        const barrier = new Barrier(this.scene, {x: start.x, y, z: 0});
        barriers.push(barrier);
      }
    } else if (start.y === end.y) {
      for (let x = start.x; x < end.x; x+=GRID) {
        const barrier = new Barrier(this.scene, {x: x, y: start.y, z: 0});
        barriers.push(barrier);
      }
    }

    this.barriers = barriers;
  }

  add() {
    this.barriers.forEach(barrier => {
      barrier.add();
    })
  }
}