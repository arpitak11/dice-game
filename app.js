
var randomNumber= Math.floor(Math.random()*6) +1;
var imageNumber="dice"+ randomNumber +".png";
var diceImage= "images/"+ imageNumber;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage);

var randomNumber1= Math.floor(Math.random()*6) +1;
var imageNumber1="dice"+ randomNumber1 +".png";
var diceImage1= "images/"+ imageNumber1;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage1);

if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="Player 1 Wins!🚩"
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}