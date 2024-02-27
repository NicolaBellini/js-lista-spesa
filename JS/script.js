const shopList = [
  "frutta",
  "verdura",
  "acqua",
  "sale",
  "olio"
]

const shopListExtracted = []


const output = document.getElementById("output")
let validExtraction = true

while(validExtraction){
  
  let i = 0;
 for(let i = 0; i < shopList.length; i++){
    
  shopItems = shopList[i];
  shopListExtracted.push(shopItems);
 }

  console.log(shopItems);

  if(shopList.length = shopListExtracted.length){
    validExtraction = false;
    output.innerHTML += ` list items= ${shopList}` 
  }

  console.log(validExtraction, shopListExtracted);
}

// (Math.floor(Math.random) * )