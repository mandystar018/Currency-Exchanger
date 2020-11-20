import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function calculateCurrency(number) {
  let rate = currency1 / currency2;
  
}

$('#click').click(function() {
  const amount = $('#money').val();
  const currency1 = $('#currency1').val();
  const currency2 = $('#currency2').val();
  Currency.getCurrency()
    .then(function(response) {
      calculateCurrency(amount);
    });

});