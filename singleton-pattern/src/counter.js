let instance;
let count = 0;

class Counter {
  constructor() {
    if (instance === undefined) {
      instance = this;
    } else {
      throw new Error("Only one instance is allowed!");
    }
  }

  getInstance() {
    return this;
  }

  getCount() {
    return count;
  }

  increment() {
    return ++count;
  }

  decrement() {
    return --count;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
