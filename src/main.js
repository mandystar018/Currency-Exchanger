import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';


function showCurrency(response) {
  if (response.conversion_rates) {
    $('#results').text(`This is exchange currency $${response.conversion_rates.USD}`);
  } else {
    $('#errors').text(`There was an error ${response.result}`);
  }
}

$('#click').click(function() {
  const currency1 = $('#currency1').val();
  Currency.getCurrency(currency1)
    .then(function(response) {
      showCurrency(response);
    });
});