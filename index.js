for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me`)
    
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
      }

  return gifts;
}

wrapGifts(gifts);


function writeCards( names, event) {
    const cart = []
    for (let i = 0; i < names.length; i++) {
    cart.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cart
 }
 
 
function countDown(countDown) {
    while (countDown > -1) {
    console.log(countDown--);
  }
}