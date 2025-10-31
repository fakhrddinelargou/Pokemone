const products = [
  {
    id: "01",
    image: "/images/card-1.png",
    name: "Ivysaur",
    price: 149,
    power: "Grass",
    hp: 899,
    count : 0
  },
  {
    id: "02",
    image: "/images/card-2.png",
    name: "Venusaur",
    price: 149,
    power: "Grass",
    hp: 1000,
    count : 0
  },
  {
    id: "03",
    image: "/images/card-3.png",
    name: "Charmander",
    price: 149,
    power: "Fire",
    hp: 1000,
    count : 0
  },
  {
    id: "04",
    image: "/images/card-4.png",
    name: "Charmeleon",
    price: 149,
    power: "Fire",
    hp: 1000,
    count : 0
  },
  {
    id: "05",
    image: "/images/card-5.png",
    name: "Charizard",
    price: 149,
    power: "Fire",
    hp: 1000,
    count : 0
  },
  {
    id: "06",
    image: "/images/card-6.png",
    name: "Squirtle",
    price: 199,
    power: "Water",
    hp: 1000,
    count : 0
  },
  {
    id: "07",
    image: "/images/card-7.png",
    name: "Wartortle",
    price: 199,
    power: "Water",
    hp: 1000,
    count : 0
  },
  {
    id: "08",
    image: "/images/card-8.png",
    name: "Blastoise",
    price: 199,
    power: "Water",
    hp: 1000,
    count : 0
  },
  {
    id: "09",
    image: "/images/card-9.png",
    name: "Caterpie",
    price: 199,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "10",
    image: "/images/card-10.png",
    name: "Metapod",
    price: 199,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "11",
    image: "/images/card-11.png",
    name: "Butterfree",
    price: 129,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "12",
    image: "/images/card-12.png",
    name: "Weedle",
    price: 129,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "13",
    image: "/images/card-13.png",
    name: "Kakuna",
    price: 129,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "14",
    image: "/images/card-14.png",
    name: "Beedrill",
    price: 129,
    power: "Bug",
    hp: 1000,
    count : 0
  },
  {
    id: "15",
    image: "/images/card-15.png",
    name: "Pidgey",
    price: 129,
    power: "Normal",
    hp: 1000,
    count : 0
  },
  {
    id: "16",
    image: "/images/card-16.png",
    name: "Pidgeotto",
    price: 99,
    power: "Normal",
    hp: 1000,
    count : 0
  },
];

const card = document.getElementById("card");
const container = document.getElementById("container");
let selectCard = [];
let selectFavorite = [];

products.forEach((items) => {
  container.innerHTML += `
    
             <div>
            
            <div class=" relative w-[20rem]">
                <img class="w-full" src=${items.image} alt="card-1">
             <p class="absolute left-16 bottom-[5.4rem] font-bold text-gray-600">${items.hp}</p> 

            </div>
            <div class="flex pt-5 justify-center gap-5">
                <button id="btn-favorite-${items.id}" class=" border border-[#D9D9D9] tracking-[1px] text-gray-300 rounded-[2rem] text-[18px] py-2  w-[9rem] font-semibold cursor-pointer">Favorite</button>
                <button id="btn-add-${items.id}"  class=" border border-[#D9D9D9] text-gray-300 rounded-[2rem] tracking-[1px] text-[18px] py-2  w-[9rem] font-semibold cursor-pointer">Add To Card</button>
            </div>
        </div>
            
            `;
});

products.forEach((item) => {
  const buttons = document.getElementById(`btn-add-${item.id}`);

  buttons.addEventListener("click", () => {
    const isExits = selectCard.some((el) => el.id === item.id);

    if (!isExits) {
      //   console.log(buttons);
      selectCard.push({
        ...item ,
        count : 1,
      });

       const  ele = document.createElement("div")

 ele.innerHTML = `
    <div class="flex gap-3 bg-gray-600 p-2 rounded-[.5rem] relative">
            <div id="count-${item.id}" class="w-8 h-8 text-center flex items-center justify-center bg-red-600 rounded-[50%] font-semibold text-gray-300 absolute right-[-.9rem] top-[-.9rem]">${item.count}</div>
            <img src=${item.image} class="w-[5rem]">
            <div class="flex flex-col gap-3 items-start">
            <h4 class="text-xl font-semibold tracking-[1px]">${item.name}</h4>
            <p class="text-2xl text-gray-300 font-semibold tracking-[1px]">${item.price}$</p>
            <div class="flex items-center gap-5 ">
            
            <button id="plus-${item.id}" class="border border-gray-50 rounded-[50%]">
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
 
 `


 ele.addEventListener('click' , ()=> plusCard(item))
      
card.appendChild(ele)
    } 
    
    // orderCard(item);
    // console.log(item)
    console.log(selectCard)
});

});

// function orderCard() {

// card.innerHTML =""

//     selectCard.forEach(item => {
//    card.innerHTML += `
        
//             <div class="flex gap-3 bg-gray-600 p-2 rounded-[.5rem] relative">
//             <div id="count-${item.id}" class="w-8 h-8 text-center flex items-center justify-center bg-red-600 rounded-[50%] font-semibold text-gray-300 absolute right-[-.9rem] top-[-.9rem]">${item.count}</div>
//             <img src=${item.image} class="w-[5rem]">
//             <div class="flex flex-col gap-3 items-start">
//             <h4 class="text-xl font-semibold tracking-[1px]">${item.name}</h4>
//             <p class="text-2xl text-gray-300 font-semibold tracking-[1px]">${item.price}$</p>
//             <div class="flex items-center gap-5 ">
            
//             <button id="plus-${item.id}" class="border border-gray-50 rounded-[50%]">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px"
//             viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path
//             d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
//             </button>
            
//             <button id="minus-${item.id}" class="border border-gray-50 rounded-[50%]">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M200-440v-80h560v80H200Z"/></svg>
//             </button>
//             </div>
//             </div>
//             <button  class="text-[1rem] font-semibold text-gray-300 bg-red-600 rounded-[.2rem] py-1 px-3 mt-auto ml-auto cursor-pointer ">Order</button>
//             </div>

            
//             `;
// document.getElementById(`plus-${item.id}`).addEventListener('click' , ()=> increment(item))

//             // plusCard(item)

//     })
  
// }

function increment(item){
    console.log(item.id);
    console.log("hh");


}



function plusCard(item){
    console.log(item.id)
    const btnPlus = document.getElementById(`plus-${item.id}`)
    // console.log(btnPlus)
    btnPlus.addEventListener('click' , () =>{
    // console.log(id)

selectCard =  selectCard.map( el =>{

if(el.id === item.id){

  return{

    ...el ,
   count : el.count+1

  }

}

})


})

}




// function minusCard(item){

//     btnMinus = document.getElementById(`minus-${item.id}`)
    
//     btnMinus.addEventListener('click' , () =>{
//         selectCard.map(el => {

//             if(el.id === item.id){

//                 return {
//                     ...item ,
//                        count : el.count <= 1 ? 1 : el.count - 1,
//                 }


//             }

//             return el


//         })

//         console.log("hello")
//         orderCard()
//     })
    

// }