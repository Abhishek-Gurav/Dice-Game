var n = Math.random();
var m = Math.random();
var random1 = Math.floor(n * 6) + 1;
var random2 = Math.floor(m * 6) + 1;

// console.log(random1);
// console.log(random2);

var att1 = "images/dice" + random1 + ".png";
var att2 = "images/dice" + random2 + ".png";
console.log(att2);

document.querySelector(".img1").setAttribute("src" , att1);
document.querySelector(".img2").setAttribute("src" , att2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player1 wins 🎉🎉"
}
else if(random2 > random1) {
    document.querySelector("h1").innerHTML = "Player2 wins 🎉🎉"
}
else{
    document.querySelector("h1").innerHTML = "Player1 & Player 2 tied."
}