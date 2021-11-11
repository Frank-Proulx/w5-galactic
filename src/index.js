import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeChanger } from './js/galactic.js';

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
  $("#mercury-left").html(calculated.mercuryYearsLeft);
  $("#venus-age").html(calculated.venusAge);
  $("#venus-expect").html(calculated.venusLifeExpect);
  $("#venus-left").html(calculated.venusYearsLeft);
  $("#mars-age").html(calculated.marsAge);
  $("#mars-expect").html(calculated.marsLifeExpect);
  $("#mars-left").html(calculated.marsYearsLeft);
  $("#jupiter-age").html(calculated.jupiterAge);
  $("#jupiter-expect").html(calculated.jupiterLifeExpect);
  $("#jupiter-left").html(calculated.jupiterYearsLeft);
});