export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location; 
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
