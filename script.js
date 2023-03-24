////////// GLOBAL VARIABLES ///////////

//setting up canvas,
//ultimate goal is to give this game a pong feel
const canvasEl = document.querySelector("canvas");
const canvasWidth = 700;
const canvasHeight = 700;
const gameCanvas = {
  canvas: canvasEl,
  context: canvasEl.getContext("2d"),
  start: function () {
    // this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    // this.context.fillStyle = "purple";
    // this.context.fillStyle = 'nasa.jpg';
    // let img = new Image();
    // img.src = "./nasa.jpg";
    // this.context.drawImage(img, 650, 650);
    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

const startBtn = document.querySelector(".startBtn");
const attackBtn = document.querySelector(".attackBtn");
const restartBtn = document.querySelector(".restartBtn");
const retreatBtn = document.querySelector(".retreatBtn");

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
    yPosition,
    isDestroyed
  ) {
    this.shipType = shipType;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.height = height;
    this.width = width;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.isDestroyed = false;
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
    yPosition,
    isDestroyed
  ) {
    const newShip = new Ship(
      shipType,
      hull,
      firepower,
      accuracy,
      height,
      width,
      xPosition,
      yPosition,
      isDestroyed
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

///////////////////////////////////

//////////// creating ships ///////////

let alienFactory = new ShipFactory("alien");
let ussFactory = new ShipFactory("uss");
//x,y,width,height
const uss1 = ussFactory.makeNewShip("uss", 20, 5, 0.3, 30, 300, 80, 80);
let destroyedShips = [];

for (i = 0; i < 6; i++) {
  alienFactory.makeNewShip(
    "alien",
    Math.floor(Math.random() * 6 + 2),
    Math.floor(Math.random() * 4 + 2),
    Math.round(10 * (Math.random() * 0.2 + 0.4)) / 10,
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
let activeAlienShip = alienFactory.shipCollection[0];
//starts out as the first ship in collection

//////////// FUNCTIONS /////////////

//starts the game and canvas
function start() {
  gameCanvas.start();
}

//uss attacks current alien ship
function ussAttacks(activeAlienShip) {
  //hit
  if (Math.random() < uss1.accuracy) {
    console.log(activeAlienShip); //stats before hit
    //updating updates section
    let gameUpdate = document.querySelector(".updates");
    gameUpdate.innerHTML = `<p>Direct hit!</p>`;
    //alien hull decreases by uss firepower
    activeAlienShip.hull -= uss1.firepower;
    console.log(activeAlienShip); //stats after hit
  } else {
    //miss
    let gameUpdate = document.querySelector(".updates");
    //updating update section
    gameUpdate.innerHTML = `<p>USS missed! Alien can now attack you!</p>`;
    //calling alien attacking uss func
    aliensAttack(activeAlienShip);
  }
}

//alien attacking uss
function aliensAttack(activeAlienShip) {
  if (activeAlienShip.hull > 0) {
    //alien hits uss
    if (Math.random() < activeAlienShip.accuracy) {
      //updating updates section
      let gameUpdate = document.querySelector(".updates");
      gameUpdate.innerHTML = `<p>Alien ship has hit USS!</p>`;
      //uss hull takes damage
      takeDamage(activeAlienShip);
    } else {
      //updating updates section
      let gameUpdate = document.querySelector(".updates");
      gameUpdate.innerHTML = `<p>Aliens missed! Attack them before they recover!</p>`;
    }
  } else {
    //if alien hull is 0 or less, it is destroyed.
    //store in destroyed ships array
    activeAlienShip.isDestroyed = true;
    destroyedShips.push(activeAlienShip);
  }
}

//func to update decrement uss hull by alien firepower
function takeDamage(activeAlienShip) {
  uss1.hull -= activeAlienShip.firepower;
  if (uss1.hull <= 0) {
    //bet you wish you retreated while you still could
    retreatBtn.disabled = true;
    //can't attack bc you dead
    attackBtn.disabled = true;
    //updating updates section
    let gameUpdate = document.querySelector(".updates");
    gameUpdate.innerHTML = `<p>Game over, USS hull is destroyed. You took down ${destroyedShips.length} ships before being defeated.</p>`;
  }
  return;
}

function updateStats() {
  //updating stats in real time
  let hull = activeAlienShip.hull;
  let alienHull = document.querySelector(".alienHull");
  alienHull.innerHTML = `<p>Hull : ${hull}</p>`;
  let firepower = activeAlienShip.firepower;
  let alienFirepower = document.querySelector(".alienFirepower");
  alienFirepower.innerHTML = `<p>FirePower : ${firepower}</p>`;
  let accuracy = activeAlienShip.accuracy;
  let alienAccuracy = document.querySelector(".alienAccuracy");
  alienAccuracy.innerHTML = `<p>Accuracy : ${accuracy * 100}%</p>`;

  let ussHull = uss1.hull;
  let ussHullEl = document.querySelector(".ussHull");
  ussHullEl.innerHTML = `<p>Hull : ${ussHull}</p>`;
}

function allAliensDestroyed() {
  //if all the ships in the alien fleet are destroyed
  if (destroyedShips.length === alienFactory.shipCollection.length) {
    //update updates section to reflect win
    let gameUpdate = document.querySelector(".updates");
    gameUpdate.innerHTML = `<p>All alien ships are destroyed, you have won the war!</p>`;
    return true;
  } else {
    return false;
  }
}

function retreat() {
  //update user how many ships they destroyed before retreating
  let gameUpdate = document.querySelector(".updates");
  gameUpdate.innerHTML = `<p>Coward. Game has ended. You defeated ${destroyedShips.length} ships before chickening out.</p>`;
}
///////////////////////////////

//////////////////////////////////////////

//////////// EVENT LISTENERS ////////////

//click start to call start func and be able to click any other buttons
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  start();
  //can't click start while already playing
  startBtn.disabled = true;
  // if (startBtn.disabled = true) {
  //     startBtn.visibility = 'hidden'
  // }

  //must attack at least once before retreating or restarting
  attackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //update stats before attack carries out
    updateStats();

    //call attack funcs
    ussAttacks(activeAlienShip);
    //if hull is less than zero, just make it zero
    if (activeAlienShip.hull < 0) {
      activeAlienShip.hull = 0;
    } else if (uss1.hull < 0) {
      uss1.hull = 0;
    }
    //update stats after attack carries out
    updateStats();

    if (activeAlienShip.hull <= 0) {
      //current ship is destroyed, add to destroyed array
      destroyedShips.push(activeAlienShip);
      activeAlienShip.isDestroyed = true;
      //update update section
      let gameUpdate = document.querySelector(".updates");
      gameUpdate.innerHTML = `<p>Ship
              ${destroyedShips.length} 
              is destroyed. Stay and fight more if you dare, click retreat if you want to live.</p>`;
      //update kill box
      let killCount = document.querySelector(".kills");
      killCount.innerHTML = `<p>You have defeated ${destroyedShips.length} alien ships so far.</p>`;
    }

    //goes through entire fleet of alien ships
    for (let i = 0; i < alienFactory.shipCollection.length; i++) {
      //if the ship the iteration is on is not destroyed
      if (!alienFactory.shipCollection[i].isDestroyed) {
        //that shipt is now the current alien ship in play
        activeAlienShip = alienFactory.shipCollection[i];
        break;
      }
    }
    //checking if all alien ships are destroyed and
    //if so, notifying you that you won
    allAliensDestroyed();

    retreatBtn.addEventListener("click", function (event) {
      event.preventDefault();
      retreat();
    });
  });
  //not liking the way the game is going and want to start fresh? restart
  restartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
    //refreshes entire page to start a new game
  });
});
