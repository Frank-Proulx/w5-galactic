import { parse } from "@babel/core";

export class AgeChanger {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.lifeExpectDefault = 79;
  }

  mercury() {
    this.mercuryAge = parseInt((this.age / 0.24).toFixed());
    this.mercuryLifeExpect = parseInt((this.lifeExpect / 0.24).toFixed());
  }

  venus() {
    this.venusAge = parseInt((this.age / 0.62).toFixed());
    this.venusLifeExpect = parseInt((this.lifeExpect / 0.62).toFixed());
  }

  mars() {
    this.marsAge = parseInt((this.age / 1.88).toFixed());
    this.marsLifeExpect = parseInt((this.lifeExpect / 1.88).toFixed());
  }

  jupiter() {
    this.jupiterAge = parseInt((this.age / 11.86).toFixed());
    this.jupiterLifeExpect = parseInt((this.lifeExpect / 11.86).toFixed());
  }

}