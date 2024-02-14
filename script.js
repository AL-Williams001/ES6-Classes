// object constructor
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// factory Function(mostly used in the industry)
const personFactory = (name, age) => {
  const sayHello = () => {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  };

  return {
    name,
    age,
    sayHello,
  };
};

// Class Syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new PersonConstructor("John", 30);
person1.sayHello();

const person2 = personFactory("Jane", 25);
person2.sayHello();

const person3 = new Person("Bob", 40);
person3.sayHello();

// class animal {
//   constructor(name, species, age) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(
//       `Hello, my name is ${this.name}, I am a ${this.species} and I am ${this.age} years old.`
//     );
//   }

//   birthday() {
//     this.age++;
//   }
// }

// const animal1 = new animal("Max", "dog", 2);
// const animal2 = new animal("Charlie", "cat", 4);
// const animal3 = new animal("Lola", "dog", 7);

// animal1.sayHello();
// animal2.sayHello();
// animal3.sayHello();

// animal1.birthday();
// console.log(`It is now ${animal1.name} birthday.`);
// animal1.sayHello();

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    console.log(`This is a ${this.make} ${this.model} from ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numOfDoors) {
    super(make, model, year);
    this.numOfDoors = numOfDoors;
  }
}

const car1 = new Car("Toyota", "Camry", 2020, 4);
car1.getDescription();

class ElectricCar extends Car {
  constructor(make, model, year, numOfDoors, battery) {
    super(make, model, year, numOfDoors);
    this.battery = battery;
  }

  getDescription() {
    console.log(
      `This is an electric ${this.make} ${this.model} from ${this.year} with ${this.numOfDoors} doors and ${this.battery} kWh battery.`
    );
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 5, 100);
myElectricCar.getDescription();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getNoise() {
    console.log(`This is ${this.name}. He is ${this.age} years old and roars.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  getNoise() {
    console.log(
      `His name is ${this.name}. He is ${this.age} years old, he is ${this.breed} and he barks.`
    );
  }
}

const animal1 = new Animal("Max", 2);
animal1.getNoise();

const dog1 = new Dog("Charlie", 4, "Dalmatian");
dog1.getNoise();
