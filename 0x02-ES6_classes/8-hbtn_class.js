export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](here) {
    if (here === 'number') return this._size;
    if (here === 'string') return this._location;
    return this;
  }
}
