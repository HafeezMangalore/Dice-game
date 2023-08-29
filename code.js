var roll_btn=document.getElementById("roll_btn")
roll_btn.addEventListener("click",function(e){
   var randomno1=Math.floor(Math.random()*6)+1
var randomimg1="images/dice"+randomno1+".png"
// console.log(randomno1)
// console.log(randomimg1)
var img1=document.getElementById("img1")
img1.setAttribute("src",randomimg1)




var randomno2=Math.floor(Math.random()*6)+1
var randomimg2="images/dice"+randomno2+".png"
// console.log(randomno2)
//  console.log(randomimg2)
var img2=document.getElementById("img2")
img2.setAttribute("src",randomimg2)
