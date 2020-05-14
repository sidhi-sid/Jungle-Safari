

let playing=false;
const audio=new Audio("./sounds/junglemusic.mp3")
function bgmusic(){
    if(!playing){
    audio.play();
    playing=true
    }else{
        audio.pause();
        playing=false;
    }
    
}
function bgmusicstop(){
    
    audio.pause();
}
function wolfspeaking(){
    const audio=new Audio("./sounds/wolf.mp3")
    audio.play();
}
function lionspeaking(){
    const audio=new Audio("./sounds/lion.mp3")
    audio.play();
}
function elephantspeaking(){
    const audio=new Audio("./sounds/elephant.mp3")
    audio.play();
}
function crocospeaking(){
    const audio=new Audio("./sounds/crocodile.mp3")
    audio.play();
}