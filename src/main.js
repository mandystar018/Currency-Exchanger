import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency-service.js';

function getElement(amount, Usercurrency){
	for (const [key ,value] of Object.entries(obj.conversion_rates)) {
  	let options = `<option value=${key}>${key}</option>`;
    $('#currency').append(options);
  	/* let result = 0;
  	    let total = amount.toFixed(2) * value.toFixed(2);
  	    console.log(total); */
	}
}

getElement(500);

$('#click').click(function() {
  const amount = $('#money').val();
  const Usercurrency = $('#currency').val();
  Currency.getCurrency()
    .then(function(response) {
      getElements(amount, Usercurrency, response);
    });

});