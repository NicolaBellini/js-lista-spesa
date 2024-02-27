const shopList = [
  "frutta",
  "verdura",
  "acqua",
  "sale",
  "olio"
]

const shopListExtracted = []

// while(shopListExtracted.length < shopList.length){
  // estraggo un elemento random da shoppinglist e lo pusho dentro a shopListExtracted
  for(let i = 0; i < shopList.length ; i++){
   
    shopItems = shopList[i]
    shopListExtracted.push(shopItems)
    console.log(shopList[i] , shopItems , shopListExtracted);
  }
// }

// (Math.floor(Math.random) * )