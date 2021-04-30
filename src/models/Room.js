import Base from "./Base"
import { GRID } from "../settings"
import Barrier from "./Barrier"

export default class extends Base {
  constructor(scene, params) {
    super(scene, params);
  }

  create(params = {}) {
    const { start, end } = params;

    const x1 = start.x;
    const y1 = start.y;
    const x2 = end.x;
    const y2 = end.y;

    const barriers = [];

    // Top Wall
    for (let x = x1; x < x2; x+=GRID) {
      const barrier = new Barrier(this.scene, {x, y: y1, z: 0})
      barriers.push(barrier);
    }

    // bottom Wall
    for (let x = x1; x < x2; x+=GRID) {
      const barrier = new Barrier(this.scene, {x, y: y2, z: 0})
      barriers.push(barrier);
    }

    for (let y = y1; y < y1; y+=GRID) {
      const barrier = new Barrier(this.scene, {x: x1, y, z: 0})
      barriers.push(barrier);
    }

    for (let y = y1; y < y2; y+=GRID) {
      const barrier = new Barrier(this.scene, {x: x2, y, z: 0})
      barriers.push(barrier);
    }

    this.barriers = barriers;
  }

  add() {
    this.barriers.forEach(barrier => {
      barrier.add();
    })
  }
}