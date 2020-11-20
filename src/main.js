import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function calculateCurrency(amount, currency, response) {
  
  
}

$('#click').click(function() {
  const amount = $('#money').val();
  const currency = $('#currency').val();
  Currency.getCurrency()
    .then(function(response) {
      calculateCurrency(amount, currency, response);
    });

});