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


// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// You could be battling six alien ships each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }




// 👾 Actors and then actions
// A good rule of thumb is start with the actors and then the actions. What actors do we need? In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an attack method (an action).

// A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.



class Ship{
    constructor(shipType, hull, firepower, accuracy) {
        this.shipType = shipType;
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    shoot() {
        //create visual of laser going toward enemy
        //if location of shot === location of enemy, go to hitTarget()
    }
    getShot() {
        //hull = hull - firepower of player who shot you
        if (hull <= 0 && shipType === 'uss') {
            //USS ship is destroyed
            console.log('game over')
        }       
        else if (hull <= 0 && shipType === 'alien') {
            //enemy ship is destroyed
            //if there are more enemy ships:
                //give player option to retreat or keep playing
        }
    }
    hitTarget() {
        //if shot ship fired hits other ship
    }
}



//Factory for all ships with required properties of hull, firepower, accuracy, and shipType. includes methods that both alien and uss ships use
class ShipFactory {
    constructor(shipType) {
        this.shipType = shipType
        this.shipCollection = []
    }
    makeNewShip(shipType, hull, firepower, accuracy) {
        const newShip = new Ship(shipType, hull, firepower, accuracy);
        this.shipCollection.push(newShip);
    }
}


//Class of USS ship (child of shipFactory) with extra retreat method

class UssShip extends Ship{
    constructor() {
        //are there any properties that USS has that enemy doesn't?
    }
    retreat() {
        //show USS hovering away to offscreen
        console.log('game over')
    }
}



class AlienShip extends Ship{
    constructor(){
    //do i need a constructor here? will there be additional properties that an alien ship has that the USS ship doesn't?
    }
    movingTowardUSS() {
        //continuously inching toward USS
    }
}
// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8

let alienFactory = new ShipFactory('alien')

for (i = 0; i < 6; i++){
    alienFactory.makeNewShip('alien', Math.floor((Math.random() * 6)+2), Math.floor((Math.random() * 4)+2), Math.random())
}
console.log(alienFactory.shipCollection)


// Your spaceship, the USS Assembly should have the following properties:
// hull - 20
// firepower - 5
// accuracy - .7
let ussFactory = new ShipFactory('uss')
ussFactory.makeNewShip('uss', 20, 5, .7)
console.log(ussFactory.shipCollection)

