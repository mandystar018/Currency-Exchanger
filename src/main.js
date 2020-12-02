import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Currency, loadResponse} from './js/currency-service.js';
import { checkNumber } from './js/currency-service.js';

export function getOptions(response) {
  if(response.conversion_rates){
    let keys = Object.keys(response.conversion_rates).map((key)=>`<option value=${key}>${key}</option>`);
    $('select').append(keys);
  } else {
    $('#load').text('There was a problem with the select bar');
  }
}

function getElement(response, amount, userCurrency){
  try {
    const isNumberValid = checkNumber(amount);
    if (isNumberValid instanceof Error) {
      console.error(isNumberValid.message);
      return $('#nan').text("Not a valid number!");
    }
  } catch(error){
    console.error(`Red alert! We have an error: ${error.message}`);
  }
  if (response.conversion_rates) {
    let rate = response.conversion_rates[userCurrency];
    let conversion = parseFloat(amount * rate).toFixed(2);
    $('#nan').hide();
    $('#results').text(`Your Currency Exchange of ${userCurrency} is ${conversion}`);
  } else {
    $('#error').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  loadResponse();
  $('#click').click(function(event) {
    event.preventDefault();
    const userCurrency = $('#currency').val();
    const amount = $('#money').val();
    Currency.getCurrency()
      .then(function(response) {
        getElement(response, amount, userCurrency);
      });
  });
});