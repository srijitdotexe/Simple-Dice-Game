var random1 = Math.floor(Math.random()*6+1);
var newDiceImg1 = "./images/dice" + random1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",newDiceImg1);

var random2 = Math.floor(Math.random()*6+1);
var newDiceImg2 = "./images/dice" + random2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",newDiceImg2);

if(random1===random2)
    document.querySelector("h1").textContent = "Draw!";
else if(random1>random2)
    document.querySelector("h1").textContent = "Player 1 Wins!"
else
    document.querySelector("h1").textContent = "Player 2 Wins!"
