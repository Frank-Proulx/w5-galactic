import { parse } from "@babel/core";

export class AgeChanger {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.lifeExpectDefault = 79;
  }

  mercury() {
    // this.mercury = this.age / 0.24;
  }

  venus() {
    // this.venus = parseInt((this.age / 0.62).toFixed());
  }

  mars() {
    // this.mars = parseInt((this.age / 1.88).toFixed());
  }

  jupiter() {
    // this.jupiter = parseInt((this.age / 11.86).toFixed());
  }

}