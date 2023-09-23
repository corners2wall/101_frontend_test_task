export default class FieldHelper {
  constructor(value, message, compareFn) {
    this.value = value;
    this.entry = 1;
    this.message = message;
    this.compareFn = compareFn;
  }

  compare(value) {
    if (value === this.value) {
      this.entry = this.entry + 1;
    } else {
      const maxValue = this.compareFn(value, this.value);

      this.value = maxValue;
      this.entry = 1;
    }
  }
}
