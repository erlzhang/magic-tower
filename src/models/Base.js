export default class {
  constructor(scene, ...args) {
    this.scene = scene;
    this.object = this.create(...args);
  }

  create() {}

  add() {
    this.scene.add(this.object);
  }
}