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
const typeOfCard = document.getElementById('type-of-cards')
const types = ["Grass" , "Fire" , "Water" , "Bug" , "Normal" , "All"]
const card = document.getElementById("card");
const container = document.getElementById("container");
const containerFavorite = document.getElementById("container-favorite");
const order = document.getElementById("order");
let selectCard = JSON.parse(localStorage.getItem('selectCard')) || [];
let selectFavorite = JSON.parse(localStorage.getItem('selectFavorite')) || [];
const menu = document.querySelector('.menu');
const cardMenu = document.querySelector('.cardMenu');
let productCopy = [];
products.forEach((item) => {

  productCopy.push({
    ...item
  })

})
orderCard(); 
printFavoriteCards();
getNameOfCards()

function getNameOfCards(id){
  
  const name = id === undefined ? "All" : id 
  console.log(name);
container.innerHTML ="";

const filteredProducts = productCopy.filter(el => el.power === name || name === "All"  )
  filteredProducts.forEach((items) => {


  
  container.innerHTML += `
    
             <div class="flex flex-col gap-[1rem] mb-15 max-[400px]:w-[100%] ">
            
            <div class=" relative w-[20rem]  max-lg:w-[18rem] max-[400px]:w-[100%]   ">
                <img class="w-full max-[400px]:w-[100%] " src=${items.image} alt="card-1">
             <p class="absolute left-16 max-[400px]:left-24c max-lg:left-15 bottom-[5.3rem] max-[400px]:bottom-[8.3rem] max-lg:bottom-[4.75rem] font-semibold text-gray-600 text-[.9rem] max-[400px]:text-[1.4rem] ">${items.hp}</p> 

            </div>
            <div class="flex  justify-center items-center gap-5">
                <button id="btn-favorite-${items.id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[8px] max-[400px]:text-[15px] max-[570px]:w-[7rem] h-12 max-[400px]:h-16  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Favorite</button>
                <button id="btn-add-${items.id}"  class="  border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[10px] max-[570px]:text-[7px] h-12 max-[400px]:h-16 max-[570px]:w-[7rem] max-[400px]:text-[15px]  w-[9rem] font-medium cursor-pointer max-[400px]:w-[100%] ">Add To Card</button>
            </div>
        </div>
            
            `;
          
});






// const productCopy = productCopy.filter(el => el.name === "Grass")


filteredProducts.forEach((item) => {

  
  const buttons = document.getElementById(`btn-add-${item.id}`);

if(buttons){ 
  buttons.addEventListener("click", () => {
    const isExits = selectCard.some((el) => el.id === item.id);

    if (!isExits) {
     
      selectCard.push({
        ...item
      });
    } else {
      selectCard = selectCard.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            count: el.count + 1,
          };
        }
        return el
      });
    }
localStorage.setItem('selectCard', JSON.stringify(selectCard));

    orderCard(item);

  });
  }
});

filteredProducts.forEach((item)=>{

  const btnFavorite = document.getElementById(`btn-favorite-${item.id}`)

btnFavorite.addEventListener('click' , ()=>{

  const isExits = selectFavorite.some(el => el.id === item.id )
if(!isExits){

  selectFavorite.push({
    ...item
  })
}else{
  
  return selectFavorite
}
printFavoriteCards()
console.log(selectFavorite);
localStorage.setItem('selectFavorite', JSON.stringify(selectFavorite));


})


})


}
function orderCard() {
  card.innerHTML = "";

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
  selectCard.forEach((item) => {
    plusCard(item);
    minusCard(item);
  });

  if(selectCard.length <= 0){
  card.classList.add('hidden')
  
}
document.getElementById('countCards').innerHTML = selectCard.length
localStorage.setItem('selectCard', JSON.stringify(selectCard));

}

function plusCard(item) {
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
    orderCard()
  removeCardFromOrder()
  localStorage.setItem('selectCard', JSON.stringify(selectCard));

  });
}

function minusCard(item) {
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
    orderCard()
  removeCardFromOrder()
  });
  
 
  
}

function removeCardFromOrder() {
 
  
  selectCard = selectCard.filter((item) => item.count >= 1);
 
  localStorage.setItem('selectCard', JSON.stringify(selectCard));
  orderCard()
}

order.addEventListener('click' , ()=>{
  if(selectCard.length > 0)
card.classList.toggle('hidden')
  
})






menu.addEventListener('click', () => {
cardMenu.classList.toggle('ani')
});




types.forEach((type) =>{


  typeOfCard.insertAdjacentHTML(
    "beforeend",
    `<li id="${type}" class="border-b border-transparent border-b-2 hover:border-white hover:border-b-2 duration-200">${type}</li>`
  );


selectType(type)


})


function selectType(id){

  
  const typeBtn = document.getElementById(id)
  
  typeBtn.addEventListener('click' , ()=>{
    
getNameOfCards(id)


  })

}



// FAVORITE CARD
// console.log(containerFavorite);

function printFavoriteCards(){
  if(selectFavorite.length !== 0){

  

  if(!containerFavorite){

return ;

  }

containerFavorite.innerHTML ="";

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
  
  
  
  
  
  
  
  
  
  `



})

selectFavorite.forEach((item) =>{
console.log(item);

  const removeBtn = document.getElementById(`btn-remove-${item.id}`)

  if(!removeBtn){
    return;
  }

  removeBtn.addEventListener('click' , () =>{

 selectFavorite = selectFavorite.filter((el) => el.id !== item.id);


printFavoriteCards()
localStorage.setItem('selectFavorite', JSON.stringify(selectFavorite));

  })
  




})

}else{






}
}





console.log(selectFavorite);
