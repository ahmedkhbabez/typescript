function logged<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      console.log(`Creating a new instance of ${constructor.name}`);
      super(...args);
    }
  };
}

@logged
class MyClass {
  constructor() {
    console.log("MyClass instance created");
  }
}

// Test the decorator
const instance = new MyClass();
