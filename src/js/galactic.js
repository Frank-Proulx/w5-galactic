import { parse } from "@babel/core";

export class AgeChanger {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    return this.age / 0.24;
  }

  venus() {
    return parseInt((this.age / 0.62).toFixed());
  }

  mars() {
    
  }

}