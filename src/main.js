import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function calculateCurrency(amount, currency){
  amount * currency
}

function getElements(amount, currency, response) {
  if (response.conversion_rates) {
    $('#results').text(`This is your currency ${total} from ${response.conversion_rates.EUR}`)
  }
  
}

$('#click').click(function() {
  const amount = $('#money').val();
  const Usercurrency = $('#currency').val();
  Currency.getCurrency()
    .then(function(response) {
      getElements(amount, Usercurrency, response);
    });

});