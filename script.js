

//setting up canvas
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
    //this inserts new child (in this case the canvas), before an existing node (in this case the body element)
    // document.body.insertBefore(canvas, document.body.childNodes[0]);
  },
};

function start() {
  gameCanvas.start();
}
start();



const attackBtn = document.querySelector('.attackBtn')
attackBtn.addEventListener('click', function (event) {
    event.preventDefault()
    //carry out shoot method
})

const retreatBtn = document.querySelector('.retreatBtn')
retreatBtn.addEventListener('click', function (event) {
    event.preventDefault()
    //carry out retreat method
})

const restartBtn = document.querySelector('.restartBtn')
restartBtn.addEventListener('click', function (event) {
    event.preventDefault()
    location.reload()
    //refreshes page to start a new game
})









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
  shoot() {
    console.log(`${this.shipType} is shooting!`);
    //create visual of laser going toward enemy
    //if location of shot === location of enemy, go to hitTarget()
  }
  getShot() {
    //hull = hull - firepower of player who shot you
    if (hull <= 0 && shipType === "uss") {
      //USS ship is destroyed
      console.log("game over");
    } else if (hull <= 0 && shipType === "alien") {
      //enemy ship is destroyed
      //if there are more enemy ships:
      //give player option to retreat or keep playing
    }
  }
  hitTarget() {
    //if shot ship fired hits other ship
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
    const ctx = gameCanvas.context;
    if (shipType === "alien") {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "blue";
    }
    ctx.fillRect(height, width, xPosition, yPosition);
    console.log(newShip);
    return newShip;
  }
  warCry() {
    //prints out in console all alien ships
    for (const ship in this.shipCollection) {
      console.log(this.shipCollection[ship]);
    }
  }
}

//Class of USS ship (child of shipFactory) with extra retreat method

class UssShip extends Ship {
  constructor() {
    //are there any properties that USS has that enemy doesn't?
  }
  retreat() {
    //show USS hovering away to offscreen
    console.log("game over");
  }
}

class AlienShip extends Ship {
  constructor() {
    //do i need a constructor here? will there be additional properties that an alien ship has that the USS ship doesn't?
  }
  movingTowardUSS() {
    //continuously inching toward USS
  }
}

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

const alien1 = alienFactory.shipCollection[0];
const alien2 = alienFactory.shipCollection[1];
const alien3 = alienFactory.shipCollection[2];
const alien4 = alienFactory.shipCollection[3];
const alien5 = alienFactory.shipCollection[4];
const alien6 = alienFactory.shipCollection[5];
