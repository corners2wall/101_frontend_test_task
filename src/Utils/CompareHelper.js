// Maybe rename and change methods
export default class CompareHelper {
  constructor(value, message) {
    this.value = value;
    this.entry = 1;
    this.message = message;
  }

  compareByMaxValue(value) {
    if (value === this.value) {
      this.entry = this.entry + 1;
    } else {
      const maxValue = Math.max(value, this.value);

      this.value = maxValue;
      this.entry = 1;
    }
  }

  compareByMinValue(value) {
    if (value === this.value) {
      this.entry = this.entry + 1;
    } else {
      const minValue = Math.min(value, this.value);

      this.value = minValue;
      this.entry = 1;
    }
  }
}
