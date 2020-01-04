var request = require('request');
var API = 'http://data.sfgov.org/resource/bbb8-hzi6.json'


function foodTruckFinder(url) {
  request(url, function (error, response, body) {
    //handle error
    if (response.statusCode == 200) {
      //successful call, can take body and put it into an array
      console.log('**THIS IS THE BODY***', body)
    }

  else {
    console.log('error:', error);
  }
   //handle status code
  console.log('statusCode:', response && response.statusCode);
  });
}

foodTruckFinder(API);


// Call the API
// handle status errors
// evaluate current time NOW
// handle body to display 10 trucks with conditionals to evaluate the current time
// display must be in alphabetical order, use a sort here.
// prompt the user to go to next page
// should i allow for user to refresh page?
