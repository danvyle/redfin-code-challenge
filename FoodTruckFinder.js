const request = require('request');
const readline = require('readline');
var API = 'http://data.sfgov.org/resource/bbb8-hzi6.json';

function foodTruckFinder(url) {

  const now = new Date();
  var currentDay = now.getDay();
  var currentTime = now.getHours() + ":" + now.getMinutes();
  var returnedResults = []
  var n = 0

  request(url, function (error, response, body) {
    if(response.statusCode == 200) {
      JSON.parse(body).forEach(function(key) {
        returnedResults.sort(function(a,b){
          if(a[0] > b[0])
          return 1;
          if(a[0] < b[0])
          return -1;
          return 0;
        });
        if(currentDay ==  parseInt(key["dayorder"]) && currentTime >= key["start24"] && currentTime <= key["end24"]) {
          returnedResults.push([key["applicant"],key["location"],key["dayofweekstr"] + " , " + key["start24"] + " to " +key["end24"]]);
        }
      });
    };
    printResults(n);




    function printResults(n) {
      for (i = n; i < n+10; i++) {
        if (returnedResults[i] === undefined){
          console.log("This is the end of the list.");
          process.exit();
        } else {
        console.log(returnedResults[i]);
        }
      };
      readLine();
//

// const Table = require('cli-table');
// const table = new Table();
//
// table.push(
//     { 'Some key': 'Some value' }
//   , { 'Another key': 'Another value' }
// );
//
// console.log(table.toString());

//

    function readLine() {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Would you like to see the next 10 food truck results? Please answer "y" or "n". ', (answer) => {
        if(answer == "y"){
          console.log("true")
          n+=10;
          printResults(n);
        }
        else if (answer == "n") {
          console.log("Thanks for visiting the application.");
          process.exit();
        }

        else {
          console.log("Wrong submission. You will exit the program now.")
          process.exit();
        }
      })
    };
  }
  });
};


// else {
//   console.log('error:', error);
// }


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
