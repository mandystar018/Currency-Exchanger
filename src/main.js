import $, { event } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function getResults(amount, currency) {
  return parseInt(amount) * parseInt(currency).toFixed
}

function getElement(response, amount, userCurrency){
  let values = Object.values(response.conversion_rates).map((value) =>`${value}`);
    console.log(values);
  let keys = Object.keys(response.conversion_rates).map((key)=>`<option value=${key}>${key}</option>`);
    console.log(keys);
  $('select').append(keys);
  }

async function makeApiCall(userCurrency) {
  const response = await Currency.getCurrency();
  getElement(response, amount, userCurrency);
}

$(document).ready(function() {
  const userCurrency = $('#currency').val();
    const amount = $('#money').val(); 
    makeApiCall(userCurrency);
    getResults(amount)
  });
