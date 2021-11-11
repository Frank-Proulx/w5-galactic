import { parse } from "@babel/core";

export class AgeChanger {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.lifeExpectDefault = 79;
  }

  mercury() {
    this.mercuryAge = parseInt((this.age / 0.24).toFixed());
    if (this.lifeExpect !== undefined) {
      this.mercuryLifeExpect = parseInt((this.lifeExpect / 0.24).toFixed());
    } else {
      this.mercuryLifeExpect = parseInt((this.lifeExpectDefault / 0.24).toFixed());
    }
  }

  venus() {
    this.venusAge = parseInt((this.age / 0.62).toFixed());
    if (this.lifeExpect !== undefined) {
      this.venusLifeExpect = parseInt((this.lifeExpect / 0.62).toFixed());
    } else {
      this.venusLifeExpect = parseInt((this.lifeExpectDefault / 0.62).toFixed());
    }
  }

  mars() {
    this.marsAge = parseInt((this.age / 1.88).toFixed());
    if (this.lifeExpect !== undefined) {
      this.marsLifeExpect = parseInt((this.lifeExpect / 1.88).toFixed());
    } else {
      this.marsLifeExpect = parseInt((this.lifeExpectDefault / 1.88).toFixed());
    }
  }

  jupiter() {
    this.jupiterAge = parseInt((this.age / 11.86).toFixed());
    if (this.lifeExpect !== undefined) {
      this.jupiterLifeExpect = parseInt((this.lifeExpect / 11.86).toFixed());
    } else {
      this.jupiterLifeExpect = parseInt((this.lifeExpectDefault / 11.86).toFixed());
    }
  }

  yearsLeft() {
    
  }
}