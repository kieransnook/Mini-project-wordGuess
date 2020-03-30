const Word = require("./Word.js");
const Letter = require("./Letter.js");
const inquirer = require("inquirer");
// Examples:
// const weather = require("weather-js");
// var fs = require("fs");
// var UserSearch = require("./UserSearch");
// var moment = require("moment");
// const Store = require("./store");
// const { toys } = require("./toy");

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` class to store it
//   * Prompts the user for each guess and keeps track of the user’s remaining guesses

// 3. `Letter.js` *should not* `require` any other files.
// 4. `Word.js` *should only* require `Letter.js`
// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
//create Letter class
// turn phrase into an array []

// **** FROM README ****

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` class to store it
//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own
//      before moving on, then do the same thing with `Word.js`

// ### Hints
// * If you name your letter's display function `toString`, JavaScript
//  will call that function automatically whenever casting that object
//  to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)
