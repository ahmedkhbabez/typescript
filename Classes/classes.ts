class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  move(distanceInMeters: number = 5) {
    console.log(`${this.name} (the dog) moved ${distanceInMeters}m.`);
  }
}

const myDog = new Dog("Caf");

// Call the move method of the Dog class
myDog.move();

export class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

function identity<T>(arg: T): T {
  // Log the type of arg using typeof
  console.log(`Type of arg: ${typeof arg}`);
  return arg;
}

const result1 = identity(42);
console.log(result1);

interface GenericIdentityFn<T> {
  (arg: T): T;
}

interface GenericArray<T> {
  items: T[];
}

enum Response {
  No = 0,
  Yes = 1,
}

enum Message {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else {
    return padding + value;
  }
}

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

function processCustomer(customer: Customer) {
  console.log(`Processing customer: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Phone: ${customer.phone}`);
  console.log(`Credit: ${customer.credit}`);
}

const myCustomer: Customer = {
  name: "John Doe",
  credit: 1000,
  email: "john.doe@example.com",
  phone: "1234567890",
};

processCustomer(myCustomer);

import { capitalize } from "./stringUtils";

const originalString: string = "hello, world";
const capitalizedString: string = capitalize(originalString);

console.log(capitalizedString);

import greetDefault, { greetByName } from "../Modules/greeter";

greetDefault();
greetByName("Ahmed");
