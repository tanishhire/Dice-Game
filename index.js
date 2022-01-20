var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var imageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}



// function winner (Number1, Number2){
//     if (Number1 > Number2) {
//         document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
//     }
//     else if(Number2> Number1){
//         document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
//     }
//     else{
//         document.querySelector("h1").innerHTML = "Draw!";
//     }
// }

// winner(randomNumber1, randomNumber2);
