let instance;
let count = 0;

class Counter {
  constructor() {
    if (instance !== undefined) {
      throw new Error("Only one instance is allowed!");
    }
    instance = this;
    //this.count = 0;
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
