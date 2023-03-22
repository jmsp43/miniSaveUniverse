////////////   PLAN   //////////////

//kind of like google chrome dino game except instead of jumping, you pew pew
//and the ships are coming towards you mad slow in a single file line

//USS shoots:
    //misses: aliens attack
        //if they land the shot: USS hull loses defense, their firepower increases
        //else if they miss: USS pew pews at them again, cycle restarts
    //lands: aliens hull loses defense, USS firepower increase
        //if Alien ship hull gets to 0, player decided to either attack next ship or retreat
            //retreat, game over
            //if defeated all aliens, you win, game over
//Aliens shoots:
    //misses: USS attacks and aliens hull loses defense, USS firepower increases
    //lands: USS hull loses defense, alien firepower increase
    //if USS hull gets to 0, you lose game over




//Game round goes like this:

// USS attacks the first alien ship
    // If the ship survives, it attacks USS
        // If USS survive, USS attack the ship again
            // If it survives, it attacks USS again ... etc
    // If USS destroy the ship, USS either attacks next ship or retreats
        // If retreats, the game is over


// You win the game if USS destroy all of the aliens
// You lose the game if USS is destroyed


//////////////////////////////////////////////////////////////





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




//Factory for all ships with required properties of hull, firepower, accuracy, and shipType. includes methods that both alien and uss ships use
class ShipFactory {
    constructor(hull, firepower, accuracy, shipType) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.shipType = shipType
    }
    pewPew() {
        //create visual of laser going toward enemy
        //if location of shot === location of enemy, go to makeShot()
    }
    getShot() {
        //hull = hull - firepower of player who shot you
        if (hull <= 0 && shipType === 'uss') {
            //USS ship is destroyed
            console.log('game over')
        }       
        else if (hull <= 0 && shipType === 'enemy') {
            //enemy ship is destroyed
            //if there are more enemy ships:
                //give player option to retreat or keep playing
        }
    }
    makeShot() {
    }
}



//Class of USS ship (child of shipFactory) with extra retreat method

class UssShip extends ShipFactory {
    constructor() {
        //are there any properties that USS has that enemy doesn't?
    }
    retreat() {
        //show USS hovering away to offscreen
        console.log('game over')
    }
}



class AlienShip extends ShipFactory{
    constructor(){
    //do i need a constructor here? will there be additional properties that an alien ship has that the USS ship doesn't?
    }
    movingTowardUSS() {
        //continuously inching toward USS
    }
}

