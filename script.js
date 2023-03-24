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
const restartBtn = document.querySelector(".restartBtn");
const retreatBtn = document.querySelector(".retreatBtn");

retreatBtn.style.top = "0";
let showingRetreatOptions = false;

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
const uss1 = ussFactory.makeNewShip("uss", 20, 5, 0.7, 30, 300, 80, 80);

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
let destroyedShips = [];

let activeAlienShip = alienFactory.shipCollection[0];
// let activeAlienShip = {};

//create update stats function and call every attack
function updateStats() {
  let hull = activeAlienShip.hull;
  let alienHull = document.querySelector(".alienHull");
  alienHull.innerHTML = `<p>Hull : ${hull}</p>`;
  let firepower = activeAlienShip.firepower;
  let alienFirepower = document.querySelector(".alienFirepower");
  alienFirepower.innerHTML = `<p>FirePower : ${firepower}</p>`;
  let accuracy = activeAlienShip.accuracy;
  let alienAccuracy = document.querySelector(".alienAccuracy");
  alienAccuracy.innerHTML = `<p>Accuracy : ${accuracy}</p>`;

  let ussHull = uss1.hull;
  let ussHullEl = document.querySelector(".ussHull");
  ussHullEl.innerHTML = `<p>Hull : ${ussHull}</p>`;
}

//////////// FUNCTIONS /////////////

function start() {
  gameCanvas.start();
}

function ussAttacks(activeAlienShip) {
  if (Math.random() < uss1.accuracy) {
    console.log(activeAlienShip); //stats before hit
    console.log("Direct hit!");
    activeAlienShip.hull -= uss1.firepower;
    console.log(activeAlienShip); //stats after hit
    if (activeAlienShip.hull <= 0 && allAliensDestroyed === false) {
      console.log(
        "Enemy is defeated. Stay and fight more if you dare, click retreat if you want to live."
      );
    }
  } else {
    console.log("USS missed! Alien can now attack you!");
    aliensAttack(activeAlienShip);
  }
}

function aliensAttack(activeAlienShip) {
  if (activeAlienShip.hull > 0) {
    if (Math.random() < activeAlienShip.accuracy) {
      console.log("Alien ship has hit USS!");
      takeDamage(activeAlienShip);
    } else {
      console.log("Aliens missed! Attack them before they recover!");
    }
  } else {
    activeAlienShip.isDestroyed = true;
    destroyedShips.push(activeAlienShip);
  }
}

function takeDamage(activeAlienShip) {
  uss1.hull -= activeAlienShip.firepower;
  if (uss1.hull <= 0) {
    console.log("Game over, hull is destroyed");
  }
  return;
}

function allAliensDestroyed() {
  if (destroyedShips.length === shipCollection.length) {
    window.alert("All alien ships are destroyed, you have won the war!");
    return true;
  } else return false;
}

function retreat() {
  console.log(
    `Coward. Game has ended. You defeated ${destroyedShips.length} ships before chickening out.`
  );
  showingRetreatOptions = true;
}
///////////////////////////////

// if (linkObj.hasOwnProperty("subLinks") == true) {
//     showingSubMenu = true;
//   } else {
//     showingSubMenu = false;
//     mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
//   }
//   if (showingSubMenu === true) {
//     function buildSubMenu(subLinksArr) {
//       subMenuEl.innerHTML = "";
//       subLinksArr.forEach((linkObj) => {
//         const subA = document.createElement("a");
//         subA.href = linkObj.href;
//         subA.textContent = linkObj.text;
//         subMenuEl.appendChild(subA);
//       });
//     }
//     buildSubMenu(subLinksArr);
//     subMenuEl.style.top = "100%";
//   } else {
//     subMenuEl.style.top = "0";
//   }

//   subMenuEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.tagName !== "A") {
//       return;
//     }
//     console.log(event.target.textContent);
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     for (let i = 0; i < topMenuLinks.length; i++) {
//       topMenuLinks[i].classList.remove("active");
//     }
//     mainEl.innerHTML = `<h1>${event.target.textContent}</h1`;
//   });

//////////////////////////////////////////

//////////// EVENT LISTENERS ////////////

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  start();

  attackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    ussAttacks(activeAlienShip);
    updateStats();

    for (let i = 0; i < alienFactory.shipCollection.length; i++) {
      if (!alienFactory.shipCollection[i].isDestroyed) {
        // console.log(activeAlienShip.isDestroyed);
        activeAlienShip = alienFactory.shipCollection[i];
        break;
      }
    }
    if (activeAlienShip.hull <= 0) {
      if (destroyedShips.length === 0) {
        console.log(
          "Ship " +
            (destroyedShips.length + 1) +
            " is destroyed. Thank you, next."
        );
        destroyedShips.push(activeAlienShip);
        activeAlienShip.isDestroyed = true;
      } else
        console.log(
          "Ship " + destroyedShips.length + " is destroyed. Thank you, next."
        );
      destroyedShips.push(activeAlienShip);
      activeAlienShip.isDestroyed = true;
    }

    retreatBtn.addEventListener("click", function (event) {
      event.preventDefault();
      retreat();
    });
  });
  //not liking the way the game is going and want to start fresh? restart
  restartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
    //refreshes page to start a new game
  });
});
