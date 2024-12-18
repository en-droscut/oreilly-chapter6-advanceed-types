console.log("Chapter 6 - Advanced Types \n\n\n\n");

type Admin = {
  // interface Admin {
  name: string;
  privileges: string[];
};

type Employee = {
  // interface Employee {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

// intersection types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//FUNCTION OVERLOADING
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

//typeguard
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add("Max", " Schwarz");
result.split(" ");

type UnknownEployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }

  console.log("---------------------------------------");
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving a vehicle ...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck ...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo into the truck ... " + amount);
  }
}

// union type
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

///////////////////////////////////////////////////////////

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

// discrimated union because we have one different property
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

///////////////////////////////////////////////////////
console.log("---------------------------------------");

// - BOTH ARE DOING THE SAME THING
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

if (userInputElement) {
  // alternative of using the exclamation mark
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

//////////////////////////////////////////////////////

// INDEX PROPERTIES
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};

//////////////////////////////////////////////////////

// OPTIONAL CHAINING
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

//////////////////////////////////////////////////////

// NULLISH COALESCING ('??')
const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
