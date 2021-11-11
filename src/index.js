import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeChanger } from './js/galactic.js';

function ageChecker(age, lifeExpect){
  if (age > lifeExpect) {
    return "Congrats! You've exceeded your life expectancy by";
  } else {
    return "Your number of remaining years is";
  }
}

$("#calculate").submit(function(event) {
  event.preventDefault();
  let age = parseInt($("#age").val());
  let lifeExpect;
  if (parseInt($("#life-expect").val()) > 0) {
    lifeExpect = parseInt($("#life-expect").val());
  } else {
    lifeExpect = undefined;
  }
  let calculated = new AgeChanger(age, lifeExpect);
  calculated.mercury();
  calculated.venus();
  calculated.mars();
  calculated.jupiter();
  calculated.yearsLeft();
  $(".results").show();
  $("#mercury-age").html(calculated.mercuryAge);
  $("#mercury-expect").html(calculated.mercuryLifeExpect);
  $("#mercury-left").html(`${ageChecker(calculated.mercuryAge, calculated.mercuryLifeExpect)} ${calculated.mercuryYearsLeft}!`);
  $("#venus-age").html(calculated.venusAge);
  $("#venus-expect").html(calculated.venusLifeExpect);
  $("#venus-left").html(`${ageChecker(calculated.venusAge, calculated.venusLifeExpect)} ${calculated.venusYearsLeft}!`);
  $("#mars-age").html(calculated.marsAge);
  $("#mars-expect").html(calculated.marsLifeExpect);
  $("#mars-left").html(`${ageChecker(calculated.marsAge, calculated.marsLifeExpect)} ${calculated.marsYearsLeft}!`);
  $("#jupiter-age").html(calculated.jupiterAge);
  $("#jupiter-expect").html(calculated.jupiterLifeExpect);
  $("#jupiter-left").html(`${ageChecker(calculated.jupiterAge, calculated.jupiterLifeExpect)} ${calculated.jupiterYearsLeft}!`);
});