// 3. `Letter.js` *should not* `require` any other files.

// * **Letter.js**: Contains a class, `Letter`. This constructor should be
// able to either display an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed
// the letter. That means the constructor should define:

class Letter {
    constructor(letter, guessed) {
        // A string value to store the underlying character for the letter
        // A boolean value that stores whether that letter has been guessed yet
        this.letter = letter;
        this.guessed = guessed;
    }
    visible() {
        //   * A function that returns the underlying character if the letter has been
        //      guessed, or a placeholder (like an underscore) if the letter has not been guessed

        // Characters that aren't digits or letters are instantly visible (FROM TEST)
        // NEED IF STATEMENT THAT DISPLAYS non-number & non-letter characters:
        var specialChars = `!@#$^&%*()+=-[]\/{}|:<>?,.`;
        if (Letter !== outString) {}
        // if (Letter !== "!" || "@" || "#" || "$" || "%" || "^" || "&" || "*" || "(" || ")") {

        }
        // String.fromCharCode(number here is the character)
        // numbers 48-57, uppercase 65-90, lowercase 97-122
        // example String.fromCharCode(97) === lowercase a

        // if true then display letter
        // MIGHT BE AN ELSE IF
        if (guessed) {
            // display letter
        } else {
            // display underscore until the letter has been guessed
        }
    }

    guess(PARAMETER of some kind) {

       
//     // If not, `console.log` that there are too many passengers.
//     checkPassengers() {
//       if (this.passengers > 4)
        
        //   * A function that takes a character as an argument and checks it against
        //      the underlying character, updating the stored boolean value to true if it was guessed correctly
    }


module.exports = Letter;

// **** EXAMPLE ****

// class Vehicle {
//     constructor(id, numberOfWheels, sound) {
//       this.id = id;
//       this.numberOfWheels = numberOfWheels;
//       this.sound = sound;
//     }

//     printInfo() {
//       console.log(`This vehicle has ${this.numberOfWheels} wheels`);
//       console.log(`This vehicle has an id of ${this.id}`);
//     }
//   }

//   class Car extends Vehicle {
//     constructor(id, color, passengers) {
//       // const id = "Car";

//       super(id, 4, "Vroom vroom!");
//       this.color = color;
//       this.passengers = passengers;
//     }

//     // A `checkPassengers()` method that checks to see if there are 4 or less passengers.
//     // If not, `console.log` that there are too many passengers.
//     checkPassengers() {
//       if (this.passengers > 4) {
//         console.log("There are too many passengers!")
//       }
//     } 
//   }