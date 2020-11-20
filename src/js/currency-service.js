export default class Currency {
  static getCurrency(country1, country2){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}