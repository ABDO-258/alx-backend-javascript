export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Name must be a String');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a String');
    }
    this._name = name;
  }

  displayFullCurrency() {
    const money = `${this._name} (${this._code})`;
    return money;
  }
}
