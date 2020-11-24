import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function getElement(response, amount, userCurrency){
  let key = Object.entries(response.conversion_rates).map(([key, value])=>
    `<option value=${value}>${key}</option>`);
    console.log(key);
  $('select').append(key);
  let total = Math.round(amount).toFixed(2) * Math.round(`${key.value}`).toFixed(2);
  console.log(total);
  }

async function makeApiCall(amount, userCurrency) {
  const response = await Currency.getCurrency();
  getElement(response, amount, userCurrency);
}

$(document).ready(function() {
  const amount = $('#money').val(); 
  const userCurrency = $('#currency').val();
  makeApiCall(amount, userCurrency);
});