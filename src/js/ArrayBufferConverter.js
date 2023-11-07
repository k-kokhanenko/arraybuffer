export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  toString() {
    if (!this.buffer) {
      throw new Error('Данные не были установлены.');
    }

    let result = '';
    this.buffer.forEach((item) => {
      result += String.fromCharCode(item);
    });

    return result;
  }
}
