import { parse } from "@babel/core";

export class AgeChanger {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.lifeExpectDefault = 79;
  }

  mercury() {
    return this.age / 0.24;
  }

  venus() {
    return parseInt((this.age / 0.62).toFixed());
  }

  mars() {
    return parseInt((this.age / 1.88).toFixed());
  }

  jupiter() {
    return parseInt((this.age / 11.86).toFixed());
  }

}