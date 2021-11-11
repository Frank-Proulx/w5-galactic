import { AgeChanger } from './../src/js/galactic.js';


describe('AgeChanger', () => {

  test('should create AgeChanger class with a property holding the inputted age and the inputted life expectancy, with a property for the default life expectancy', () => {
    let calculated = new AgeChanger(42, 76);
    expect(calculated.age).toEqual(42);
    expect(calculated.lifeExpect).toEqual(76);
    expect(calculated.lifeExpectDefault).toEqual(79);    
  });

  test('should create a property holding the inputted age in mercury years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.mercury();
    expect(calculated.mercuryAge).toEqual(175);
  });

  test('should create a property holding the inputted age in venus years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.venus();
    expect(calculated.venusAge).toEqual(68);
  });

  test('should create a property holding the inputted age in mars years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.mars();
    expect(calculated.marsAge).toEqual(22);
  });

  test('should create a property holding the inputted age in jupiter years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.jupiter();
    expect(calculated.jupiterAge).toEqual(4);
  });

  test('should create a property holding the life expectancy in mercury years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.mercury();
    expect(calculated.mercuryAge).toEqual(175);
    expect(calculated.mercuryLifeExpect).toEqual(317);
  });

  test('should create a property holding the life expectancy in venus years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.venus();
    expect(calculated.venusAge).toEqual(68);
    expect(calculated.venusLifeExpect).toEqual(123);
  });

  test('should create a property holding the life expectancy in mars years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.mars();
    expect(calculated.marsAge).toEqual(22);
    expect(calculated.marsLifeExpect).toEqual(40);
  });

  test('should create a property holding the life expectancy in jupiter years', () => {
    let calculated = new AgeChanger(42, 76);
    calculated.jupiter();
    expect(calculated.jupiterAge).toEqual(4);
    expect(calculated.jupiterLifeExpect).toEqual(6);
  });

  test('should create a property holding the life expectancy in mercury years based on the default if no life expectancy is inputted (it is undefined)', () => {
    let calculated = new AgeChanger(42, undefined);
    calculated.mercury();
    expect(calculated.mercuryLifeExpect).toEqual(329);
  });

  test('should create a property holding the life expectancy in venus years based on the default if no life expectancy is inputted (it is undefined)', () => {
    let calculated = new AgeChanger(42, undefined);
    calculated.venus();
    expect(calculated.venusLifeExpect).toEqual(127);
  });

  test('should create a property holding the life expectancy in mars years based on the default if no life expectancy is inputted (it is undefined)', () => {
    let calculated = new AgeChanger(42, undefined);
    calculated.mars();
    expect(calculated.marsLifeExpect).toEqual(42);
  });

  test('should create a property holding the life expectancy in jupiter years based on the default if no life expectancy is inputted (it is undefined)', () => {
    let calculated = new AgeChanger(42, undefined);
    calculated.jupiter();
    expect(calculated.jupiterLifeExpect).toEqual(7);
  });

  test('should check the lifeExpect and age for each planet and return the difference', () => {
    let calculated = new AgeChanger(42, undefined);
    calculated.mercury();
    calculated.venus();
    calculated.mars();
    calculated.jupiter();
    calculated.yearsLeft();
    expect(calculated.mercuryYearsLeft).toEqual(154);
    expect(calculated.venusYearsLeft).toEqual(59);
    expect(calculated.marsYearsLeft).toEqual(20);
    expect(calculated.jupiterYearsLeft).toEqual(3);
  });

  test('should check the lifeExpect and age for each planet and return the difference adding logic to ensure the difference is always a positive number', () => {
    let calculated = new AgeChanger(100, undefined);
    calculated.mercury();
    calculated.venus();
    calculated.mars();
    calculated.jupiter();
    calculated.yearsLeft();
    expect(calculated.mercuryYearsLeft).toEqual(88);
    expect(calculated.venusYearsLeft).toEqual(34);
    expect(calculated.marsYearsLeft).toEqual(11);
    expect(calculated.jupiterYearsLeft).toEqual(1);
  });
});
