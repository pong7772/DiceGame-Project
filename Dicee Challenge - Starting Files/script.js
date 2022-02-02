// random for picture 1
var randomNum1=Math.floor((Math.random()*6)+1);
var picRandom1="images/dice"+randomNum1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",picRandom1);

// random for pic 2

var randomNum2=Math.floor((Math.random()*6)+1);
var picRandom2="images/dice"+randomNum2+".png";
var imgae2=document.querySelectorAll("img")[1].setAttribute("src",picRandom2);

// create winner
if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML=" Player1 Win!!";
}
else if(randomNum1< randomNum2){
    document.querySelector("h1").innerHTML=" Player2 Win !!";
}
else{
    document.querySelector("h1").innerHTML= "Drew";
}