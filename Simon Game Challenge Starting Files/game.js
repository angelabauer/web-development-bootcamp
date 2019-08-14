//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//12.
var userClickedPattern = []


//1. Inside game.js create a new function called nextSequence()
function nextSequence() {

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    //7.1. make a function to that
    animation(randomChosenColour);

}

// 10. Detect when any of the buttons are clicked
$('div[type="button"]').on('click', function(){

    //11. To store the id of the button that got clicked
    var userChosenColour = $(this)[0]['id'];

    //12.1.
    userClickedPattern.push(userChosenColour);



    console.log(userClickedPattern);


    animation($(this)[0]['id']);

});

function animation(color){
    //7. Use the jquery to select the button with the same id as the randomChosenColour
    switch (color) {
        case 'red':
            //8. Use jquery to animate a flash to the button select
            $('#red').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            // 9. Use javascript to play the sound for the button colour selected
            playSound(color)

            //13.
            animationPress($('#' + color));

            console.log('button red');
            break;

        case 'blue':
            //8. Use jquery to animate a flash to the button select
            $('#blue').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            // 9. Use javascript to play the sound for the button colour selected
            playSound(color)

            //13.
            animationPress($('#' + color));

            console.log('button blue');
            break;

        case 'green':
            //8. Use jquery to animate a flash to the button select
            $('#green').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            // 9. Use javascript to play the sound for the button colour selected
            playSound(color)

            //13.
            animationPress($('#' + color));

            console.log('button green');
            break;

        case 'yellow':
            //8. Use jquery to animate a flash to the button select
            $('#yellow').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            // 9. Use javascript to play the sound for the button colour selected
            playSound(color)

            //13.
            animationPress($('#' + color));

            console.log('button yellow');
            break;
    }

}



function playSound(color){

    //9.
    var audio = new Audio('sounds/'+ color +'.mp3');
    audio.play();
}



function animationPress(currentColour){

    currentColour.addClass('pressed');

    setTimeout(function(){
        currentColour.removeClass('pressed');
    }, 100)

}
