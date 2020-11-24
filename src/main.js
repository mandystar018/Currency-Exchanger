import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function getElement(response){
  let key = Object.keys(response.conversion_rates).map(element =>
    `<option value=${element}>${element}</option>`
    ).join('');
  $('#currency').append(key);
  // let total = amount.toFixed(2) * value.toFixed(2);
  //   console.log(total);
	}


async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElement(response);
}

$(document).ready(function() {
  const amount = $('#money').val(); 
  const Usercurrency = $('#currency').val();
  makeApiCall()
});