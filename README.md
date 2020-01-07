# Food Truck Finder Overview

This is a command line program for a user to find a food truck open at the time of running the application. The API used is sourced from the San Francisco government’s website which has a public data source of food trucks here:

[SF Gov public data source for food trucks](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b)

The user will see a list of 10 trucks open and prompted to see an additional 10 food trucks if they respond with a "y". Responding with an "n" will exit the program.

## Installation
##### for Mac OS X Users

You will need to make sure you have Node and NPM installed in your environment first, information is available here: [Installation info](https://treehouse.github.io/installation-guides/mac/node-mac.html)

If you already have these in your environment, type this in your terminal to install the correct dependencies and start the program
```
$ npm install request && npm install readline

```
##### Project Dependencies

request@2.88.0
readline@1.3.0

##### How to Run
Once you have navigated to the correct directory in the terminal, type the following:

```
$ node FoodTruckFinder.js
```


If you plan to use this API heavily, it is advised that you get an App Token and learn more from the Socrata API website: [here](https://dev.socrata.com/docs/app-tokens.html)
