const products = [
  {
    id: "01",
    image: "/images/card-1.png",
    name: "Ivysaur",
    price: 149,
    power: "Grass",
    hp: 1632,
    count: 1,
  },
  {
    id: "02",
    image: "/images/card-2.png",
    name: "Venusaur",
    price: 149,
    power: "Grass",
    hp: 2580,
    count: 1,
  },
  {
    id: "03",
    image: "/images/card-3.png",
    name: "Charmander",
    price: 149,
    power: "Fire",
    hp: 955,
    count: 1,
  },
  {
    id: "04",
    image: "/images/card-4.png",
    name: "Charmeleon",
    price: 149,
    power: "Fire",
    hp: 1557,
    count: 1,
  },
  {
    id: "05",
    image: "/images/card-5.png",
    name: "Charizard",
    price: 149,
    power: "Fire",
    hp: 2602,
    count: 1,
  },
  {
    id: "06",
    image: "/images/card-6.png",
    name: "Squirtle",
    price: 199,
    power: "Water",
    hp: 1008,
    count: 1,
  },
  {
    id: "07",
    image: "/images/card-7.png",
    name: "Wartortle",
    price: 199,
    power: "Water",
    hp: 1582,
    count: 1,
  },
  {
    id: "08",
    image: "/images/card-8.png",
    name: "Blastoise",
    price: 199,
    power: "Water",
    hp: 2542,
    count: 1,
  },
  {
    id: "09",
    image: "/images/card-9.png",
    name: "Caterpie",
    price: 199,
    power: "Bug",
    hp: 443,
    count: 1,
  },
  {
    id: "10",
    image: "/images/card-10.png",
    name: "Metapod",
    price: 199,
    power: "Bug",
    hp: 477,
    count: 1,
  },
  {
    id: "11",
    image: "/images/card-11.png",
    name: "Butterfree",
    price: 129,
    power: "Bug",
    hp: 1454,
    count: 1,
  },
  {
    id: "12",
    image: "/images/card-12.png",
    name: "Weedle",
    price: 129,
    power: "Bug",
    hp: 449,
    count: 1,
  },
  {
    id: "13",
    image: "/images/card-13.png",
    name: "Kakuna",
    price: 129,
    power: "Bug",
    hp: 485,
    count: 1,
  },
  {
    id: "14",
    image: "/images/card-14.png",
    name: "Beedrill",
    price: 129,
    power: "Bug",
    hp: 1439,
    count: 1,
  },
  {
    id: "15",
    image: "/images/card-15.png",
    name: "Pidgey",
    price: 129,
    power: "Normal",
    hp: 679,
    count: 1,
  },
  {
    id: "16",
    image: "/images/card-16.png",
    name: "Pidgeotto",
    price: 99,
    power: "Normal",
    hp: 1223,
    count: 1,
  },
];

//VARIABLE FOR TYPE OF POWER
const typeOfCard = document.getElementById("type-of-cards");
const types = ["Grass", "Fire", "Water", "Bug", "Normal", "All"];
const card = document.getElementById("card");
// VARIABLES FOR MENU
const menu = document.querySelector(".menu");
const cardMenu = document.querySelector(".cardMenu");
// VARIABLES MARKET
const container = document.getElementById("container");
const order = document.getElementById("order");
let selectCard = JSON.parse(localStorage.getItem("selectCard")) || [];
// VARIABLES FAVORITE
const containerFavorite = document.getElementById("container-favorite");
let selectFavorite = JSON.parse(localStorage.getItem("selectFavorite")) || [];
// VARIABLES DECK
const containerDeck = document.getElementById("container-deck");
// VARIABLE FOR COPY OF ORIGIN ARRAY
let productCopy = [];

// document.querySelector('body').classList.add("bg-white")
// DISPLAY AND HIDDEN MENU
menu.addEventListener("click", () => {
  cardMenu.classList.toggle("ani");
});

// HIDDEN OR DISPLAY ORDER CARDS WHAN  SELECTCARD EMPTY
if (order) {
  order.addEventListener("click", () => {
    if (selectCard.length > 0) card.classList.toggle("hidden");
  });
} else {
}

// DISPLAY TYPES
if (typeOfCard) {
  types.forEach((type) => {
    typeOfCard.insertAdjacentHTML(
      "beforeend",
      `<li id="${type}" class="border-b border-transparent border-b-2 hover:border-white hover:border-b-2 duration-200">${type}</li>`
    );

    selectType(type);
  });
}

// GET BUTTONS FROM TYPE OF CARDS
function selectType(id) {
  const typeBtn = document.getElementById(id);
  typeBtn.addEventListener("click", () => {
    getNameOfCards(id);
  });
}

// PUT PRODUCTS CONTENT IN PRODUCTCOPY
products.forEach((item) => {
  productCopy.push({
    ...item,
  });
});

// CALL FUNCTIONS
orderCard();
displayCardsWithPagination();
getNameOfCards();
printFavoriteCards();
printCards();
favoriteToDeck();

// DISPLAY CARDS & SELECTCARD TO DECK AND FAVORITE
function getNameOfCards(id) {
  const name = id === undefined ? "All" : id;
  if (container !== null) {
    container.innerHTML = "";

    // FILTER CARDS ACCORDING TO HIS TYPE
    const filteredProducts = productCopy.filter(
      (el) => el.power === name || name === "All"
    );

    pagination(filteredProducts);

    //  filteredProducts.forEach((items) => {
    //     container.innerHTML += `

    //            <div class="flex flex-col gap-[1rem] mb-15 max-[400px]:w-[100%] ">

    //           <div class=" relative w-[20rem]  max-lg:w-[18rem] max-[400px]:w-[100%]   ">
    //               <img class="w-full max-[400px]:w-[100%] " src=${items.image} alt="card-1">
    //            <p class="absolute left-16 max-[400px]:left-24c max-lg:left-15 bottom-[5.3rem] max-[400px]:bottom-[8.3rem] max-lg:bottom-[4.75rem] font-semibold text-gray-600 text-[.9rem] max-[400px]:text-[1.4rem] ">${items.hp}</p>

    //           </div>
    //           <div class="flex  justify-center items-center gap-5">
    //               <button id="btn-favorite-${items.id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[8px] max-[400px]:text-[15px] max-[570px]:w-[7rem] h-12 max-[400px]:h-16  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Favorite</button>
    //               <button id="btn-add-${items.id}"  class="  border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[7px] h-12 max-[400px]:h-16 max-[570px]:w-[7rem] max-[400px]:text-[15px]  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Add To Card</button>
    //           </div>
    //       </div>

    //           `;
    //   });

    // USE FILTERPRODUCTS ARRAY  TO DISPLAY CARDS
    // filteredProducts.forEach((items) => {
    //   container.innerHTML += `

    //          <div class="flex flex-col gap-[1rem] mb-15 max-[400px]:w-[100%] ">

    //         <div class=" relative w-[20rem]  max-lg:w-[18rem] max-[400px]:w-[100%]   ">
    //             <img class="w-full max-[400px]:w-[100%] " src=${items.image} alt="card-1">
    //          <p class="absolute left-16 max-[400px]:left-24c max-lg:left-15 bottom-[5.3rem] max-[400px]:bottom-[8.3rem] max-lg:bottom-[4.75rem] font-semibold text-gray-600 text-[.9rem] max-[400px]:text-[1.4rem] ">${items.hp}</p>

    //         </div>
    //         <div class="flex  justify-center items-center gap-5">
    //             <button id="btn-favorite-${items.id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[8px] max-[400px]:text-[15px] max-[570px]:w-[7rem] h-12 max-[400px]:h-16  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Favorite</button>
    //             <button id="btn-add-${items.id}"  class="  border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[7px] h-12 max-[400px]:h-16 max-[570px]:w-[7rem] max-[400px]:text-[15px]  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Add To Card</button>
    //         </div>
    //     </div>

    //         `;
    // });

    //  CALL BUTTON FOR SELECTING CARD & AND PUSH THEM TO ARRAY "SELECTCARD"
    filteredProducts.forEach((item) => {
      const buttons = document.getElementById(`btn-add-${item.id}`);

      if (buttons) {
        buttons.addEventListener("click", () => {
          const isExits = selectCard.some((el) => el.id === item.id);

          if (!isExits) {
            selectCard.push({
              ...item,
            });
          } else {
            selectCard = selectCard.map((el) => {
              if (el.id === item.id) {
                return {
                  ...el,
                  count: el.count + 1,
                };
              }
              return el;
            });
          }
          localStorage.setItem("selectCard", JSON.stringify(selectCard));
          orderCard(item);
        });
      }
    });

    //  CALL BUTTON FOR SELECTING FAVORITE CARD & AND PUSH THEM TO ARRAY "SELECTFAVORITE"
    filteredProducts.forEach((item) => {
      const btnFavorite = document.getElementById(`btn-favorite-${item.id}`);
      // console.log(btnFavorite);
      if (btnFavorite)
        btnFavorite.addEventListener("click", () => {
          const isExits = selectFavorite.some((el) => el.id === item.id);
          if (!isExits) {
            selectFavorite.push({
              ...item,
            });
          } else {
            return selectFavorite;
          }
          printFavoriteCards();

          localStorage.setItem(
            "selectFavorite",
            JSON.stringify(selectFavorite)
          );
        });
    });
  } else {
    return;
  }
}

// PAGINATION WAY
function pagination(products) {
  const containerPaginationBtns = document.getElementById(
    "container-pagination-btns"
  );
  containerPaginationBtns.innerHTML = "";

  const manyCards = Math.ceil(products.length / 9);

  // DISPLAY BUTTONS
  if (manyCards >= 2) containerPaginationBtns.classList.remove("hidden");
  // console.log(products);
  for (let i = 0; i < manyCards; i++) {
    containerPaginationBtns.innerHTML += `
        <button  class=" btn-p bg-gray-500 w-15 h-15 text-2xl rounded-[.4rem]">${
          i + 1
        }</button>
`;
  }
  const paginationBtns = document.querySelectorAll(".btn-p");
  paginationBtns[0].classList.add("active");
  displayCardsWithPagination(products, 1);
  // console.log(paginationBtns);
  paginationBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      paginationBtns.forEach((sel) => {
        sel.classList.remove("active");
      });
      btn.classList.add("active");

      displayCardsWithPagination(products, index + 1);
    });
  });

  if (manyCards < 2) containerPaginationBtns.classList.add("hidden");
}

function displayCardsWithPagination(el, index) {
  // console.log(el);

  // console.log(container);

  if (container) container.innerHTML = "";
  // if(!el && !index) return;

  const start = (index - 1) * 9;
  const end = index * 9;

  for (let i = start; i < end; i++) {
    // console.log(i);
    if (el[i]) {
      container.innerHTML += `
    
             <div class="flex flex-col gap-[1rem] mb-15 max-[400px]:w-[100%] ">
            
            <div class=" relative w-[20rem]  max-lg:w-[18rem] max-[400px]:w-[100%]   ">
                <img class="w-full max-[400px]:w-[100%] " src=${el[i].image} alt="card-1">
             <p class="absolute left-16 max-[400px]:left-24c max-lg:left-15 bottom-[5.3rem] max-[400px]:bottom-[8.3rem] max-lg:bottom-[4.75rem] font-semibold text-gray-600 text-[.9rem] max-[400px]:text-[1.4rem] ">${el[i].hp}</p> 

            </div>
            <div class="flex  justify-center items-center gap-5">
                <button id="btn-favorite-${el[i].id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[8px] max-[400px]:text-[15px] max-[570px]:w-[7rem] h-12 max-[400px]:h-16  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Favorite</button>
                <button id="btn-add-${el[i].id}"  class="  border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[7px] h-12 max-[400px]:h-16 max-[570px]:w-[7rem] max-[400px]:text-[15px]  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Add To Card</button>
            </div>
        </div>
            
          `;
    }
  }
}

// DISPLAY SELECTCARD IN CARD "CNTAINER"
function orderCard() {
  // MAKE SURE IF CARD IS PRESENT
  if (card !== null) {
    card.innerHTML = "";

    // DISPLAY ALL CARDS
    selectCard.forEach((item) => {
      card.innerHTML += `
        
            <div class="flex gap-3 bg-gray-600 p-2 rounded-[.5rem] relative">
            <div id="count-${item.id}" class="w-8 h-8 text-center flex items-center justify-center bg-red-600 rounded-[50%] font-semibold text-gray-300 absolute right-[-.9rem] top-[-.9rem]">${item.count}</div>
            <img src=${item.image} class="w-[5rem]">
            <div class="flex flex-col gap-3 items-start">
            <h4 class="text-xl font-semibold tracking-[1px]">${item.name}</h4>
            <p class="text-2xl text-gray-300 font-semibold tracking-[1px]">${item.price}$</p>
            <div class="flex items-center gap-5 ">
            
            <button id="plus-${item.id}" class="border border-gray-50 rounded-[50%] ">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
            viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path
            d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
            </button>
            
            <button id="minus-${item.id}" class="border border-gray-50 rounded-[50%]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M200-440v-80h560v80H200Z"/></svg>
            </button>
            </div>
            </div>
            <button  class="text-[1rem] font-semibold text-gray-300 bg-red-600 rounded-[.2rem] py-1 px-3 mt-auto ml-auto cursor-pointer ">Order</button>
            </div>

            
            `;
    });
    // PUSH SELECTCARD ELEMENTS TO FUNCTIONS PLUSCARD & MINUSCARD
    selectCard.forEach((item) => {
      plusCard(item);
      minusCard(item);
    });
    // HIDDEN AUTOMATIQUELLY ORDER CARDS WHAN  SELECTCARD EMPTY
    if (selectCard.length <= 0) {
      card.classList.add("hidden");
    }
    // PUT MANY CARDS WE HAVE TO COUNTCARDS
    document.getElementById("countCards").innerHTML = selectCard.length;
    localStorage.setItem("selectCard", JSON.stringify(selectCard));
  }
}

// CONTROL PLUS BUTTON
function plusCard(item) {
  // GET ALL PLUS BUTTONS
  const btnPlus = document.getElementById(`plus-${item.id}`);

  btnPlus.addEventListener("click", () => {
    selectCard = selectCard.map((el) => {
      if (el.id === item.id) {
        const newCount = el.count + 1;
        document.getElementById(`count-${item.id}`).innerHTML = newCount;
        return {
          ...el,
          count: newCount,
        };
      }
      return el;
    });
    // RENDERING NEW UPDATE
    orderCard();
    removeCardFromOrder();
    localStorage.setItem("selectCard", JSON.stringify(selectCard));
  });
}

// CONTROL MINUS BUTTON
function minusCard(item) {
  // GET ALL MINUS BUTTONS
  const btnMinus = document.getElementById(`minus-${item.id}`);

  btnMinus.addEventListener("click", () => {
    selectCard = selectCard.map((el) => {
      if (el.id === item.id) {
        const newCount = el.count - 1;
        document.getElementById(`count-${item.id}`).innerHTML = newCount;

        return {
          ...el,

          count: newCount,
        };
      } else {
        return el;
      }
    });
    // GET ALL PLUS BUTTONS
    orderCard();
    removeCardFromOrder();
  });
}

// REMOVE CARD FROM SELECTCARD ARRAY
function removeCardFromOrder() {
  selectCard = selectCard.filter((item) => item.count >= 1);
  localStorage.setItem("selectCard", JSON.stringify(selectCard));
  orderCard();
}

// DISPLAY FAVORITE CARDS
function printFavoriteCards() {
  // GET ALL ELEMENT FROM FAVORITE FUNCTION TO DECK FUNCTION
  favoriteToDeck();

  // CHECK CONTAINER FAVORITE IF PRESENT
  if (!containerFavorite) {
    return;
  }

  // CHECK MANY FAVORITE CARDS
  if (selectFavorite.length !== 0) {
    containerFavorite.innerHTML = "";

    // DISPLAY ALL FAVORITE CARDS
    selectFavorite.forEach((items) => {
      containerFavorite.innerHTML += `
  
  
  
          <div class="flex flex-col gap-[1rem] mb-15 max-[400px]:w-[100%] ">
            
            <div class=" relative w-[20rem]  max-lg:w-[18rem] max-[400px]:w-[100%]   ">
                <img class="w-full max-[400px]:w-[100%] " src=${items.image} alt="card-1">
             <p class="absolute left-16 max-[400px]:left-24c max-lg:left-15 bottom-[5.3rem] max-[400px]:bottom-[8.3rem] max-lg:bottom-[4.75rem] font-semibold text-gray-600 text-[.9rem] max-[400px]:text-[1.4rem] ">${items.hp}</p> 

            </div>
            <div class="flex  justify-center items-center gap-5">
                <button id="btn-remove-${items.id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[8px] max-[400px]:text-[15px] max-[570px]:w-[7rem] h-12 max-[400px]:h-16  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Remove</button>
                <button id="btn-add-${items.id}"  class="  border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[7px] h-12 max-[400px]:h-16 max-[570px]:w-[7rem] max-[400px]:text-[15px]  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Add To Card</button>
            </div>
        </div>
  
  
  
  
  
  
  
  
  
  `;
    });

    // REMOVE CARD FROM FAVORIRE
    selectFavorite.forEach((item) => {
      const removeBtn = document.getElementById(`btn-remove-${item.id}`);
      // CHECK REMOVE BUTTON IF PRESENT
      if (!removeBtn) {
        return;
      }
      removeBtn.addEventListener("click", () => {
        selectFavorite = selectFavorite.filter((el) => el.id !== item.id);
        printFavoriteCards();
        localStorage.setItem("selectFavorite", JSON.stringify(selectFavorite));
      });
    });
  } else {
    containerFavorite.innerHTML = `
   <div class=" font-[Sansation]  absolute m-auto inset-0  w-[30rem] flex flex-col items-center justify-center h-full">
                    <svg width="30rem"  fill="gray" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
                            d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z" />
                            </svg>

                                <p class="text-[gray] text-6xl font-semibold">No Favorite Card</p>
                        </div>
  `;
  }
}

// DISPLAY CARDS IN DECK PAGE
function printCards() {
  // CHECK CONTAINER DECK IF PRESENT
  if (!containerDeck) {
    return;
  }

  // DISPLAY CARDS IN DECK PAGE
  if (selectCard.length !== 0) {
    containerDeck.innerHTML = "";

    selectCard.forEach((items) => {
      containerDeck.innerHTML += `
  
  
  
       <div class="w-[28rem] h-[40rem] rounded-t-[.2rem] rounded-b-[1rem] bg-[var(--bg-pochite)] flex flex-col  items-center">
                    <div class=" relative w-[100%]  left-6 top-[-2rem]">
                        <img class="absolute" src=${items.image} alt="">
                        <p class="z-100 absolute bottom-[-30.9rem] left-20 text-gray-500 font-semibold text-xl">${items.hp}</p>
                    </div>
                    <div class="mt-auto p-3 text-3xl z-100">${items.count}</div>
                </div>
  
  
  
  
  
  `;
    });
  } else {
    containerDeck.innerHTML = `
   <div class=" font-[Sansation]  absolute m-auto inset-0  w-[30rem] flex flex-col items-center justify-center h-full">
                    <svg width="30rem"  fill="gray" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
                            d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z" />
                            </svg>

                            <p class="text-[gray] text-6xl font-semibold">No Card To Add</p>
                        </div>
  `;
  }
}

// WHEN I CLICK SHOULD I GET CARD FROM FAVORITE TO DECK
function favoriteToDeck() {
  selectFavorite.forEach((el) => {
    const btnAddCard = document.getElementById(`btn-add-${el.id}`);

    if (btnAddCard)
      btnAddCard.addEventListener("click", () => {
        // PUT CARDS IN SELECTCARD "ADD TO CARD"
        const isExits = selectCard.some((item) => item.id === el.id);

        if (!isExits) {
          selectCard.push({
            ...el,
          });
        } else {
          return selectCard;
        }
        localStorage.setItem("selectCard", JSON.stringify(selectCard));
        orderCard();
      });
  });
}
