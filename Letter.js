// 3. `Letter.js` *should not* `require` any other files.

// * **Letter.js**: Contains a class, `Letter`. This constructor should be
// able to either display an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed
// the letter. That means the constructor should define:

class Letter {
    constructor(character, letterGuessed) {
        // A string value to store the underlying character for the letter
        // A boolean value that stores whether that letter has been guessed yet
        this.character = character;
        this.letterGuessed = letterGuessed;
    }
}

var practiceLetter = new Letter;

function callLetter() {
    //   * A function that returns the underlying character if the letter has been
    //      guessed, or a placeholder (like an underscore) if the letter has not been guessed
    if (letterGuessed) {
        // if true then display letter
        console.log(practiceLetter)
    } else {
        // display underscore until the letter has been guessed
        console.log("Letter hasn't been guessed!")
    }
}
//   * A function that takes a character as an argument and checks it against
//      the underlying character, updating the stored boolean value to true if it was guessed correctly


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

//   module.exports = Vehicle;