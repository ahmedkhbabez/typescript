function greet(name: string): string {
  return `Hello, ${name}!`;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function createEmail(to: string, subject?: string): string {
  return subject ? to + " " + subject : to + " No Subject";
}

function add(x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
}

function concatenatStrings(...strings: string[]): string {
  return strings.reduce((accumulator, current) => accumulator + current, "");
}

function maxNumber(...numbers: number[]): number {
  return Math.max(...numbers);
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

function createVehicle(vehicle: Vehicle): Vehicle {
  return vehicle;
}

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  email?: string;
}

function updatePerson(person: Person, updates: Person): Person {
  return { ...person, ...updates };
}

interface Point {
  readonly centerX: number;
  readonly centerY: number;
  readonly raduis: number;
}

function moveCircle(point: Point, updates: Point): Point {
  return { ...point, ...updates };
}
