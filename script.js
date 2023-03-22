//Needs:
//Class of USS ship (child of shipFactory) with extra retreat method

class UssShip {
    constructor() {
        
    }
    retreat() {
        
    }
}


class shipFactory {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this. accuracy = accuracy
    }
    pewPew() {
        
    }
    getShot() {
        hull--
        
        
    }
    makeShot() {
        
    }
}


//Factory for ships with required properties of hull, firepower, and accuracy, and methods that both alien and uss ships use

class AlienShip {
    constructor(){
    //do i need a constructor here? will there be additional properties that an alien ship has that the USS ship doesn't?
    }
    //what additional methods do i need?
}



//kind of like google chrome dino game except instead of jumping, you pew pew
//and the ships are coming towards you mad slow in a single file line
//USS pew pew:
    //misses: aliens attack and hull loses defense
    //lands: aliens hull loses defense, USS firepower increase
    //if 1 Alien ship destroyed, can either attack next ship or retreat
        //retreat, game over
        //if defeated all aliens, you win game over
//Aliens pew pew:
    //misses: USS attacks and aliens hull loses defense
    //lands: USS hull loses defense, alien firepower increase
    //if USS hull gets to 0, you lose game over










// A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed



// Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target
// Your spaceship, the USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// You could be battling six alien ships each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }






// 👾 Where to begin?
// Read over the specifications. Make sure you understand them. If you do not understand them, try to clarify them for yourself.
// Plan the game. This is an act of simplification.
// From these programming principles

// Use pseudo code to get a sketch of your game first.
// Avoid Creating a YAGNI (You aren't going to need it) - You should not try to add functionality until you need it.
// Do the simplest thing that could possibly work.
// Often, beginning something is an act of creative inspiration to find the simplest possible case. The first step is not necessarily a matter of logical deduction. Once you have a few 'clues' you can follow the trail of crumbs to a logical conclusion.




// 👾 Actors and then actions
// A good rule of thumb is start with the actors and then the actions. What actors do we need? In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an attack method (an action).

// A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.