let numberofDrumbuttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofDrumbuttons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        makesound(this.innerHTML)
        makeAnimations(this.innerHTML);

    });
}


document.addEventListener("keypress", function(event) {
    makesound(event.key)
    makeAnimations(event.key);

})

function makesound(eventkey) {

    switch (eventkey) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        default:
            console.log(eventkey);
            break;

    }

}

function makeAnimations(currentkey) {
    var activekey = document.querySelector('.' + currentkey);
    activekey.classList.add("pressed")
    setTimeout(() => {
        activekey.classList.remove("pressed");
    }, 200);
}