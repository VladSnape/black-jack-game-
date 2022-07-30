// blackjack thing
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true ;
let message = "wag1" 
let imessage = document.getElementById("central")
let iSum = document.getElementById("sum-el")
let card = document.getElementById("card")
let cardy = " " + cards[0] + " , " + cards[1]






function getRandomCard() {
    
    let ting = Math.floor( Math.random() * 13 + 1 )
    if (ting > 10 ) {
        return 10
    }
    else if ( ting === 1 ) {
        return 11
    }
    else {
        return ting
    }
    
}


function startGame() {
    
   
    iSum.textContent = "sum : " + sum
    card.textContent = "cards : "  
    for (let i = 0; i < cards.length; i += 1) {
        card.textContent += cards[i] + " - "
    }
if (sum === 21) {
    message = "cool you have won "
    imessage.textContent = message
    hasBlackJack = true
    isAlive = false
}
else if (sum > 21) {
    message = "hahaha get wrecked"
   imessage.textContent = message 
    isAlive = false;
}
else if (sum < 21) {
    message = " ok , draw a card you will lose next"
    imessage.textContent= message 
    isAlive = true
}
}

if ( isAlive === true && hasBlackJack === false ) { 
// i have no idea why this thing does not work
function newCard() {
   console.log("drawing a new card from the deck")
   let thirdCard = getRandomCard()
   cards.push(thirdCard)
   sum += cards[2]
   cardy = " " + cards[0] + " , " + cards[1]+  " , " + cards[2]
   card.textContent = "cards : " + cardy
 
   startGame()
}
}


// heres the first time man creating a loop or a for loo[p i dont know 
for ( let i = 10; i < 101; i += 10) {
    console.log(i)
}


// here is a array based loop somthing like that
let cardi = [ 4, 6, 8, 10, 12, 34]
for ( let i = 0; i < cardi.length; i ++ ) {
    console.log(cardi[i])
}

for ( i = 0; i < sentence.length; i += 1 ) {
    console.log(sentence[i])
    greating.textContent += sentence[i]
}


// here learning the return function thing 
let firstTime = 30; // i know its a lot for the first time uwu
let secondTime = 45;
function totaly() {
 return firstTime + secondTime
    
}

// random numbers 



function rollDice() {
    let numbey = Math.floor (Math.random() * 13 + 1)
  return numbey
}


// nesting if
let one = true 
let two = true 
if ( one === false && two === false ) {
    console.log('three')
}