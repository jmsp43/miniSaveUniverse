////////// GLOBAL VARIABLES ///////////


//setting up canvas, 
//ultimate goal is to give this game a pong feel
const canvasEl = document.querySelector("canvas");
const canvasWidth = 700;
const canvasHeight = 500;
const gameCanvas = {
  canvas: canvasEl,
  context: canvasEl.getContext("2d"),
  start: function () {
    // this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    this.context.fillStyle = "purple";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  },
};


const startBtn = document.querySelector(".startBtn");
const attackBtn = document.querySelector(".attackBtn");
const retreatBtn = document.querySelector(".retreatBtn");
const restartBtn = document.querySelector(".restartBtn");



//////////// CLASSES ////////////


//creating class ship that will make all the ships
class Ship {
  constructor(
    shipType,
    hull,
    firepower,
    accuracy,
    height,
    width,
    xPosition,
    yPosition
  ) {
    this.shipType = shipType;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }
}

//Factory for all ships
class ShipFactory {
  constructor(shipType) {
    this.shipType = shipType;
    this.shipCollection = [];
  }
  makeNewShip(
    shipType,
    hull,
    firepower,
    accuracy,
    height,
    width,
    xPosition,
    yPosition
  ) {
    const newShip = new Ship(
      shipType,
      hull,
      firepower,
      accuracy,
      height,
      width,
      xPosition,
      yPosition
    );
    if (this.shipType === "alien") {
      this.shipCollection.push(newShip);
    }
      //for the canvas portion that i haven't figured out yet
    // const ctx = gameCanvas.context;
    // if (shipType === "alien") {
    //   ctx.fillStyle = "red";
    // } else {
    //   ctx.fillStyle = "blue";
    // }
    // ctx.fillRect(height, width, xPosition, yPosition);
    return newShip;
  }
}


//////////// FUNCTIONS /////////////


function start() {
  gameCanvas.start();
}
start();

function aliensAttack() {
  for (let i = 0; i < shipCollection.length; i++) {
    if (shipCollection[i].hull > 0) {
      if (Math.random() < shipCollection[i].accuracy) {
        console.log("Alien ship has been hit!");
      } else {
        console.log("USS missed! Alien can now attack you!");
        uss1.getShot();
      }
    } else {
      destroyedShips.push(shipCollection[i]);
    }
  }
}

//create a function that attacks
//  shoot() {
//     console.log(`USS is shooting!`);
//     if (Math.random() < uss1.accuracy) {
//       console.log("Direct hit!");
//       shipCollection[i].hull = shipCollection[i].hull - uss1.firepower;
//       //alien hull = alien hull - uss firepower
//     } else {
//       console.log("USS missed! Alien can now attack you!");
//       aliensAttack();
//     }
//   }

//create a function that decreases hull when shot
//   getShot() {
//     //hull = hull - firepower of player who shot you
//     if (hull <= 0 && shipType === "uss") {
//       //USS ship is destroyed
//       console.log("game over");
//     } else if (hull <= 0 && shipType === "alien") {
//       //enemy ship is destroyed
//       //if there are more enemy ships:
//       //give player option to retreat or keep playing
//     }
//   }


//////////// creating ships ///////////


let alienFactory = new ShipFactory("alien");

let ussFactory = new ShipFactory("uss");

//x,y,width,height
const uss1 = ussFactory.makeNewShip("uss", 20, 5, 0.7, 30, 300, 80, 80);

for (i = 0; i < 6; i++) {
  alienFactory.makeNewShip(
    "alien",
    Math.floor(Math.random() * 6 + 2),
    Math.floor(Math.random() * 4 + 2),
    Math.random() * 0.2 + 0.4,
    //x
    Math.random() * 500 + 200,
    //y
    Math.random() * 200 + 200,
    //width
    100,
    //height
    100
  );
}

let destroyedShips = [];



//////////// EVENT LISTENERS ////////////


startBtn.addEventListener("click", function (event) {
  event.preventDefault();


  attackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //carry out attack function
    //if your attack misses, then carry out get shot function

    //if you defeat an alien, give option to retreat
    retreatBtn.addEventListener("click", function (event) {
      event.preventDefault();
      //carry out retreat method
    });

    //not liking the way the game is going and want to start fresh? restart
    restartBtn.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload();
      //refreshes page to start a new game
    });
  });
});
