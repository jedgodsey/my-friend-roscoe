//Global Variables
let dayNight = 'day';
let loneliness = 0;
let hunger = 0;
let fatigue = 0;
let shifts = 1;
let openClose = 0;
let circleLength = 5;
let circleDepth = 37;
let $raccoon = $('#roscoe');
let instructions = `Who's that? It's ROSCOE, the raccoon that lives under your stairs. Close the door to let him rest. Open the door to play with him! If you think he looks hungry, feed him some Garbage! If he gets too tired, hungry or lonely, he may move on to another house.`
const bars = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let days = 0;
let moments = 0;

//Starting/ending functions
let gameStart = () => {
    $('#door-img').attr('src', './resources/door-open.svg');
    alert(instructions);
    gamePlay();
}

function gameEnd() {
    $raccoon.css('transform','translateX(125%)');
    clearInterval(days);
    clearInterval(moments);

    $('main').append(`<div id="end-modal"><div id="modal-message">It looks like Roscoe has moved on to another house. Would you like to play again?</div><div id="modal-buttons"><span id="play" /><span id="quit" /></div>`);
    $('#play').html(`<a href="./index.html">PLAY</a>`);
    $('#quit').html(`<a href="https://www.skedaddlewildlife.com/blog/wildlife-removal-dont-feed-raccoons/">QUIT</a>`);
}

//Background timing functions
function gamePlay() {
    days = setInterval(function() {
        calendar();
        shifts++;
        lightOut();
    }, 10000)

    moments = setInterval(function() {
        loneliness++;
        hunger++;
        fatigue++;
        biggestStress();
        status(loneliness, hunger, fatigue);  
    }, 5000);
}

//Visible timing functions
let lightOut = () => {
    if (shifts % 2 !== 1) {
        $('main').css('background-color', 'navy');
        $('#yard').css('opacity', '.7')
        dayNight = 'night';
        $('#roscoe').css('transform','translateY(100%)');        
    } else {
        $('main').css('background-color', 'lightblue');
        dayNight = 'day';
        $('#roscoe').css('transform','translateY(0%)')
    }
}
let calendar = () => {
    if (shifts % 2 == 0) {
        circleLength += 11;
        circleLength > 71 ? circleLength = 5 : null;
        $('#circle-img').css('left', circleLength + '%');
    }
    if (shifts % 14 == 0) {
        circleDepth += 10;
        if (circleDepth < 68) {
            $('#circle-img').css('top', circleDepth + '%'); 
        } else {
            $('#circle-img').attr('src', '')
            gameEnd();
        }
    }
}

//Event listeners for game interaction
$('#door-frame').click(function() {
    if (openClose % 2 == 1) {
        $('#door-img').attr('src', './resources/door-closed.svg');
        if (dayNight === 'night') {
            fatigue >= 5 ? fatigue -= 5 : fatigue = 0;
            response('perky');
        }
    } else {
        $('#door-img').attr('src', './resources/door-open.svg');
        if (dayNight === 'day') {
            loneliness >= 5 ? loneliness -= 5 : loneliness = 0;
            response('loved');
        }
    }
    status(loneliness, hunger, fatigue);
    biggestStress();
    openClose++
});

$('#trash').click(function() {
    if (dayNight === 'day' && openClose % 2 == 1) {
        hunger >= 1 ? hunger -= 1 : hunger = 0;
        response('full');
    }
    status(loneliness, hunger, fatigue);
    biggestStress();
})
$('#instructions').click(function() {
    alert(instructions);
})

//Mechanics for selecting raccoon image
let response = (stressor) => {
    $raccoon.attr('src', `./resources/${stressor}.svg`);
}

// Determines raccoon image without player intervention
let biggestStress = () => {
    if (loneliness == 10 || hunger == 10 || fatigue == 10) {
        gameEnd();
    } else {
        const allStressors = [loneliness, hunger, fatigue];
        const stressImages = ['./resources/lonely.svg', './resources/hungry.svg', './resources/tired.svg'];
        if (Math.max(...allStressors) > 6) {
            let pressingStress = 0;
            for (let i = 0; i < allStressors.length; i++) {
                if (allStressors[i] > pressingStress) {
                    console.log(i);
                    pressingStresss = i;
                }
            }
            $raccoon.attr('src', stressImages[pressingStress]);
        }
    }
}

// Chooses image for status representation.
let status = (loneliness, hunger, fatigue) => {
    $('#lonely').attr('src', `./resources/${bars[loneliness]}.svg`);
    $('#hungry').attr('src', `./resources/${bars[hunger]}.svg`);
    $('#tired').attr('src', `./resources/${bars[fatigue]}.svg`);
}

// Game initiation
$('#door-frame').one('click', function() {
    gameStart()
});


const createSquares = function (numberOfSquares)  {
    const $squaresContainer= $('.squares');
   for(let i = 1; i <= numberOfSquares; i++) {
    const $square =('<div class = "square" />');
   // append to parent container
   $squaresContainer.append($square);
   }
  }
