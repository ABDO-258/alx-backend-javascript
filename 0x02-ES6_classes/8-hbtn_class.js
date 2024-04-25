export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size; // Return size for numeric conversions
  }

  toString() {
    return this._location; // Return location for string conversions
  }
}
