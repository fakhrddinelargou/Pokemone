const select = JSON.parse(localStorage.getItem("selectCard")) || [];
const btnPlay = document.getElementById("btnPlay");
const containerCards = document.getElementById("container-cards");
const countrCards = document.querySelector(".countrCards");
const enemy = document.querySelector(".enemy");
const info = document.getElementById("info");
const playGround = document.getElementById("playground");
const player = document.querySelector(".player");
const playerId = document.getElementById("player");
const btnDraw = document.querySelector(".btn-draw");
const howManyCardOnHand = document.getElementById("howManyCardOnHand");
const CopyProducts = JSON.parse(localStorage.getItem("products"));
const boxs = document.querySelectorAll(".box");
const containerDefAtt = document.getElementById("container-def-att");
const attackBtn = document.getElementById("att");
const defenceBtn = document.getElementById("def");
const countHandEnemy = document.getElementById("count-hand-enemy");
const endTurnBtn = document.getElementById("endTurnBtn");
const enemyHp = document.getElementById("enemyHp");
let attackType;
let drage = null;
let place = 0;
let counterDeck = 0;
let deck = [];
let enemyHand = [];
let handPlayer = JSON.parse(localStorage.getItem("handPlayer")) || [];
let turn = Math.random() < 0.5 ? "player" : "enemy";
// let turn = "enemy"
  howManyCardOnHand.innerHTML = `Hand (${handPlayer.length}/5)`;





CopyProducts.map((el) => {
  if (enemyHand.length < 5)
    enemyHand.push({
      ...el,
      cummon: false,
    });
});
select.map((el) => {
  deck.push({
    ...el,
    cummon: false,
  });
});
if (handPlayer.length <= 0) {
  document.querySelector(".overlay").classList.remove("hidden");
} else {
  document.querySelector(".overlay").classList.add("hidden");
}
btnPlay.addEventListener("click", () => {
  if (deck < 5) {
    alert("You Have No Card To play");
  } else {
    // if(handPlayer.length <= 0)
    document.querySelector(".overlay").classList.add("hidden");
  }
});

deck.forEach((el) => {
  containerCards.innerHTML += `
    <div id="card-game-${el.id}" class=" cursor-pointer pointer relative  w-full h-auto mb-2 ">
    <img class="relative rounded-[.6rem]" src="/images/back.jpg" alt="">
    </div>
    `;
 
    
});
// ;;


console.log(handPlayer);

// Call Functions
randomCards();
playerHand();
handleDraw()

// handleDraw()

// CHECKED
function randomCards() {
  if(handPlayer < 1)
    while (handPlayer.length < 5) {
      const randomId = Math.floor(Math.random() * deck.length);
      const randomCard = deck[randomId];
      if (randomCard) handPlayer.push(randomCard);
      removeCardFronDeck(randomCard);
    }
    localStorage.setItem("handPlayer", JSON.stringify(handPlayer));


}

function counrterDeckCards(){
  deck.forEach((el) =>{
    counterDeck = counterDeck + el.count;
    countrCards.innerHTML = counterDeck ;
  })
  // removeCardFronDeck()


}
counrterDeckCards()

// COMPLATED 100%
function playerHand() {
 
  // if(handPlayer.length < 5)
  playerId.innerHTML = "";
  handPlayer.forEach((card) => {
    playerId.innerHTML += `   
            <div  data-id="${card.id}" id="card-${card.id}" draggable="true" 
             class="card relative  move  w-30 h-full rounded-[.3rem]  ">
             <img src=${card.image} >
             <div class="absolute bottom-6 left-3 text-gray-700  flex flex-col gap-2 items-start justify-end h-full ">
             <div class="text-bold">${card.name}</div>
             <div class="flex  items-center  gap-2 ">
             <p class="bg-gray-50 rounded-[.2rem] px-1 text-[.7rem] ">DF ${card.defense}</p>
             <p class="bg-gray-50 rounded-[.2rem] px-1 text-[.7rem] ">AT ${card.attack}</p>
             </div>
             
             </div>


            </div>
            `;
  });
  drag();
}

// NEED FIX
function handleDraw() {
  
  btnDraw.classList.add("draw-card-style");
  btnDraw.addEventListener("click", () => {
      if (handPlayer.length <= 4) {
      const takeCardIndex = Math.floor(Math.random() * deck.length);
      const takeCard = deck[takeCardIndex];
  
      
      handPlayer.push(takeCard);
      removeCardFronDeck(takeCard);
      localStorage.setItem("handPlayer", JSON.stringify(handPlayer));
      playerHand();
     console.log(handPlayer);
     
      howManyCardOnHand.innerHTML = `Hand (${handPlayer.length}/5)`;
      if (handPlayer.length >= 5) {
        btnDraw.classList.remove("draw-card-style");
      }
    } else {
      btnDraw.classList.remove("draw-card-style");
    }
  });
}

// NEED FIX
function drag() {
  const cardDrag = document.querySelectorAll(".card");
  if (cardDrag !== null);

  cardDrag.forEach((el) => {
     
 
    el.addEventListener("dragstart", () => {
      el.style.opacity = "0.4";
      drage = el;
    });

    el.addEventListener("dragend", () => {
      el.style.opacity = "1";
      drage = null;
    });
  });

  boxs.forEach((el) => {
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
      el.style.background = "rgba(128, 128, 128, 0.5)";
    });

    el.addEventListener("dragleave", () => {
      el.style.background = "#514f4fb7";
    });

    el.addEventListener("drop", () => {
      if (el.children.length === 0) el.append(drage);
      const cardId = drage.getAttribute("data-id");
      const index = handPlayer.findIndex((c) => c.id.toString() === cardId);
      if (index !== -1) handPlayer.splice(index, 1);
      console.log(handPlayer);
      
      let counter = handPlayer.length;
      howManyCardOnHand.innerHTML = `Hand (${counter}/5)`;
      // playerHand()
      localStorage.setItem("handPlayer", JSON.stringify(handPlayer));
      
      handleDraw();
      // playerTurn(handPlayer[index]);
    });
  });
}

// NEED FIX
function removeCardFronDeck(el) {
  counterDeck = 0
  let findCard = deck.find((item) => item.id === el.id);
  if (findCard) {
  
    findCard.count--;
    if (findCard.count <= 0) {
      deck = deck.filter((ele) => ele.id !== el.id);
      document.getElementById(`card-game-${el.id}`).remove();
    }
  counrterDeckCards()

  localStorage.setItem("selectCard", JSON.stringify(deck));
}  


}

// COMPLATED 100%

if (turn === "player") {
  player.classList.add("yourRole");
  player.classList.remove("unRole");
  enemy.classList.add("unRole");
  enemy.classList.remove("yourRole");
} else {
  enemy.classList.add("yourRole");
  enemy.classList.remove("unRole");
  player.classList.add("unRole");
  player.classList.remove("yourRole");
}
// NEED FIX
function nextPlayer() {

  if (turn === "player") {
    drag();
    // playerTurn()
  } else if (turn === "enemy") {
    // enemyTurn();
  }

  drag()
}

// NEED FIX
function playerTurn(dg) {

  containerDefAtt.classList.remove("hidden");
  attackBtn.onclick = () => {
    containerDefAtt.classList.add("hidden");
    attackType = "attack";

    // enemyHp.innerHTML = `${8000 - dg.attack} LP`;

    endTurn();
  };

  defenceBtn.onclick = () => {
    containerDefAtt.classList.add("hidden");
    attackType = "defence";
    endTurn();
  };
}

// NEED FIX
function enemyTurn() {
  const enemyCards = document.querySelectorAll(".enemyCards");
  const cardIndex = Math.floor(Math.random() * CopyProducts.length);
  const randomCard = CopyProducts[cardIndex];

  setTimeout(() => {
    if (place <= 4)
      enemyCards[place].innerHTML += `
  
            <div  data-id="${randomCard.id}" id="card-${randomCard.id}" draggable="true" 
             class="card relative  move  w-30 h-full rounded-[.3rem]  ">
             <img src=${randomCard.image} >
             <div class="absolute bottom-6 left-3 text-gray-700  flex flex-col gap-2 items-start justify-end h-full ">
             <div class="text-bold">${randomCard.name}</div>
             <div class="flex  items-center  gap-2 ">
             <p class="bg-gray-50 rounded-[.2rem] px-1 text-[.7rem] ">DF ${randomCard.defense}</p>
             <p class="bg-gray-50 rounded-[.2rem] px-1 text-[.7rem] ">AT ${randomCard.attack}</p>
             </div>
             
             </div>


            </div>
  `;
    countHandEnemy.innerHTML = `Oppenent Hand (${4 - place}/5)`;
    place++;

    endTurn();
  }, 2000);
}

// NEED FIX0

function endTurn() {
  turn = turn === "player" ? "enemy" : "player";

  setTimeout(() => {
    if (turn === "player") {
      player.classList.add("yourRole");
      player.classList.remove("unRole");
      enemy.classList.add("unRole");
      enemy.classList.remove("yourRole");
    } else {
      enemy.classList.add("yourRole");
      enemy.classList.remove("unRole");
      player.classList.add("unRole");
      player.classList.remove("yourRole");
    }

    // drag()
    nextPlayer();
  }, 2000);
}

nextPlayer();
