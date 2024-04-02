caixa = document.getElementById("id_caixa")
var postop = 0
var posleft = 0
var cor = 0
var audio = new Audio('boo.mp3');

setInterval(myTimer, 10)
setInterval(myTimer2, 10)

function myTimer(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
    postop += 1
    posleft += 1
    if (postop > 830){
        postop = 0
    }
    if (posleft > 1500){
        posleft = 0
    }
    caixa.style.left = posleft+"px"
    caixa.style.top = postop+"px"

}

function myTimer2(){

if (cor == 255){
 cor = 0
}
cor += 1
caixa.style.backgroundColor = `rgb(${cor}, ${cor}, 255`
console.log(cor)
}

function beatbox(){
    audio.play();
    posleft = Math.random() * 800
    postop = Math.random() * 800
}