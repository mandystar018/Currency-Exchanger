import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';




$('#click').click(function() {
  const currency1 = $('#currency1').val();
  Currency.getCurrency()
    .then(function(response) {
      showCurrency(response);
    });

  function showCurrency(response) {
    if (response.conversion_rates) {
      $('#results').text(`This is exchange ${currency1} currency $${response.conversion_rates.USD}`);
    } else {
      $('#errors').text(`There was an error ${response.result}`);
    }
  }
});