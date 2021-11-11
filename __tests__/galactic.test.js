import { AgeChanger } from './../src/js/galactic.js';


describe('AgeChanger', () => {

  test('should create AgeChanger class with a property holding the inputted age', () => {
    let calculated = new AgeChanger(42);
    expect(calculated.age).toEqual(42);
  });


});