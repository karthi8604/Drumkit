
var nos = document.getElementsByClassName("drum").length;

for(var i=0;i<nos;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        animate(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animate(event.key);
});

function animate(key){
    var btn = document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}

function makeSound(value){
    switch (value) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            // document.querySelector("body").style.backgroundColor = "black";
            break;
    }
}
