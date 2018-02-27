import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Person;


class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name} & I am ${this.age} years old!`;
  }
}

const me = new Person('JBX', 32);

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  newLocation() {
    let greeting = super.getGreeting();
    if(this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('JBX', 32, 'Hell');