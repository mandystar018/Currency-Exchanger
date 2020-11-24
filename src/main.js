import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function getElement(response, amount){
  let key = Object.entries(response.conversion_rates).map(([key, value])=>
    `<option value=${value}>${key}</option>`
    ).join('');
    console.log(key);
  // .map(element =>
  //   `<option value=${element}>${element}</option>`
  //   ).join('');
  $('#currency').append(key);
  if (key) {
    
  }
  
  }

async function makeApiCall(amount) {
  const response = await Currency.getCurrency();
  getElement(response,amount);
}

$(document).ready(function() {
  const amount = $('#money').val(); 
  const Usercurrency = $('#currency').val();
  makeApiCall(amount);
});