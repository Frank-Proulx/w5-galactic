import { AgeChanger } from './../src/js/galactic.js';


describe('AgeChanger', () => {

  test('should create AgeChanger class with a property holding the inputted age', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.age).toEqual(42);
  });

  test('should create a method that returns the inputted age in mercury years', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.mercury()).toEqual(175);
  });

  test('should create a method that returns the inputted age in venus years', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.venus()).toEqual(68);
  });

  test('should create a method that returns the inputted age in mars years', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.mars()).toEqual(22);
  });

  test('should create a method that returns the inputted age in jupiter years', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.jupiter()).toEqual(4);
  });


});