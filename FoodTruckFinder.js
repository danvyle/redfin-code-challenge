var request = require('request');
var API = 'http://data.sfgov.org/resource/bbb8-hzi6.json';

function foodTruckFinder(url) {

  const now = new Date();
  var currentDay = now.getDay();
  var currentTime = now.getHours() + ":" + now.getMinutes();

  request(url, function (error, response, body) {
    var returnedResults = []
    if(response.statusCode == 200) {
      JSON.parse(body).forEach(function(key) {
        if(currentDay ==  parseInt(key["dayorder"]) && currentTime >= key["start24"] && currentTime <= key["end24"]) {
        returnedResults.push([key["applicant"],key["location"],key["dayofweekstr"] + " , " + key["start24"] + " to " +key["end24"]]);
        }
        returnedResults.sort(function(a,b){
            if(a[0] > b[0])
              return 1;
            if(a[0] < b[0])
              return -1;
              return 0;
          });
        });
      };
    console.table(returnedResults)

    //

      // else {
      //   console.log('error:', error);
      // }
       //handle status code
      // console.log('statusCode:', response && response.statusCode);

    });
  };



foodTruckFinder(API);
// currentDate();



//get timeout
// Call the API
// handle status errors
// evaluate current time NOW
// handle body to display 10 trucks with conditionals to evaluate the current time
// display must be in alphabetical order, use a sort here.
// prompt the user to go to next page
// should i allow for user to refresh page?
