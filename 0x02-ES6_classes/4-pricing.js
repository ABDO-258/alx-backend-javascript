export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value2) {
    this._currency = value2;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name}  (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
