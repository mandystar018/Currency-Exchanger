export function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    return new Error('Not a valid number!');
  } else {
    return true;
  }
}

export class Currency {
  static getCurrency(){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}