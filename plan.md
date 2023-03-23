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

// A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.


//daria's math formula for accuracy here
//   (Math.round(10 * (Math.random() * (0.9 - 0.1) + 0.1))/10 < accuracy)
//tamara's formula for hull and firepower
// let hull = Math.floor(Math.random() * (20 - 3)) + 3;
//         let firePower = Math.floor(Math.random() * (4 - 2)) + 2;


//alien stats
// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8


// USS Assembly properties:
// hull - 20
// firepower - 5
// accuracy - .7
