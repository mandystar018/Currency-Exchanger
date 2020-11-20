import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';


function showCurrency(response) {
  if (response.conversion_rates) {
    $('.results').text(`This is you actual currency $${response.USD} ${response.base_code}`);
    $('.results').text(`This is exchange currency`)
  }
}

$('#click').click(function() {
  const currency1 = $('#currency1').val();
  const currency2 = $('#currency2').val();
  Currency.getCurrency(currency1, currency2)
    .then(function(response) {
      showCurrency(response);
    });
});