//Musica de fundo
var audio2 = new Audio('LKKRSTYZ.mp3');
audio2.loop = true
audio2.play();
////////////////////////////////////////////////////////////


console.log("FOI")
textao = document.getElementById("id_textao")
setInterval(myTimer, 10)

setInterval(myTimer2, 6000)
var sentido = 1
var postop = 0
var posleft = 0
function myTimer2(){
    console.log("TROCOU")
if (sentido == 1){
    sentido = -1
} else {
    sentido = 1
}
}
function myTimer(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
    if (sentido == 1){
    posleft += 2
    } else {
        posleft -= 2
    }

    if (posleft > 1500){
        posleft = 0
    }
    if (sentido ==1){
    textao.style.left = posleft+"px"
    }
    if (sentido == -1){
    textao.style.left = posleft+"px"
    }

}