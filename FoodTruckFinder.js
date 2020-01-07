//required
const request = require('request');
const readline = require('readline');

//current time variables
var now = new Date();
var currentDay = now.getDay();
var currentTime = now.getHours() + ":" + now.getMinutes();

//global variables
const API = 'http://data.sfgov.org/resource/bbb8-hzi6.json';
var truckCollection = [];
var n = 0

//API request and sort
function foodTruckFinder(url) {
  request(url, function (error, response, body) {
    if(response.statusCode == 200) {
      JSON.parse(body).forEach(function(key) {
        if(currentDay == parseInt(key["dayorder"]) && currentTime >= key["start24"] && currentTime <= key["end24"]) {
          truckCollection.push({"Restaurant": key["applicant"], "Location": key["location"], "Hours of Operation": key["dayofweekstr"] + " , " + key["start24"] + " to " +key["end24"]});
        }
          truckCollection.sort(function(a,b) {
            if(a["Restaurant"] > b["Restaurant"])
              return 1;
            if(a["Restaurant"] < b["Restaurant"])
              return -1;
              return 0;
          });
      });
    } else {
      console.log('error:', error);
    };
    printResults(n);
  });
};

//Print first 10 results
function printResults(n) {
  for (i = n; i < n+10; i++) {
    if (truckCollection[i] === undefined) {
      console.log("This is the end of the list.");
      process.exit();
    } else {
      console.table(truckCollection[i]);
    }
  };
  next10Trucks();
}

//Prompt user to see next 10
function next10Trucks() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  rl.question('Would you like to see the next 10 food truck results? Please answer "y" or "n". ', (answer) => {
    if(answer === "y") {
      n += 10;
      printResults(n);
    } else if (answer === "n") {
      console.log("Thanks for visiting Food Truck Finder!");
      process.exit();
    } else {
      console.log("Wrong submission. Please start the program over.");
      process.exit();
    }
  })
};

//start program
foodTruckFinder(API);
