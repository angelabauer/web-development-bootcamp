document.addEventListener('keydown', function(event){

    handleSounds(event.key);

});


function play(element){

    handleSounds(element.id);

}

function handleSounds(position){

    switch (position) {
        case 'first', 'w':

            var firstAudio = new Audio('sounds/tom-1.mp3')
            firstAudio.play()

            break;
        case 'second', 'a':

            var secondAudio = new Audio('sounds/tom-2.mp3')
            secondAudio.play()

            break;
        case 'third', 's':

            var thirdAudio = new Audio('sounds/tom-3.mp3')
            thirdAudio.play()

            break;
        case 'fourth', 'd':

            var fourthAudio = new Audio('sounds/tom-4.mp3')
            fourthAudio.play()

            break;
        case 'fiveth', 'j':

            var fivethAudio = new Audio('sounds/crash.mp3')
            fivethAudio.play()

            break;
        case 'sixth', 'k':

            var sixthAudio = new Audio('sounds/kick-bass.mp3')
            sixthAudio.play()

            break;
        case 'seventh', 'l':

            var seventhAudio = new Audio('sounds/snare.mp3')
            seventhAudio.play()

            break;
        default:
            //console.log('nothing will happen');
    }
}
