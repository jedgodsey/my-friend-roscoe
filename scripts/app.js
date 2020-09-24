//Global Variables
let time = 0;
let dayNight = 'day';
let loneliness = 0;
let hunger = 0;
let tiredness = 0;
let shifts = 1;
let openClose = 0;
let circleLength = 5;
let circleDepth = 37;
let $raccoon = $('#roscoe');
let instructions = `Who's that? It's Roscoe! Close the door to let him rest. Open the door to play with him! If you think he looks hungry, feed him some Garbage! If he gets too tired, hungry or lonely, he may move on to another house.`

//Starting functions
let gameStart = () => {
    $('#door-img').attr('src', './resources/door-open.svg');
    alert(instructions);
    gamePlay();
}
//Timing functions
const gamePlay = () => {
    setInterval(() => {
        calendar();
        shifts++;
        lightOut();
    }, 10000)

    setInterval(() => { 
        time++;
        loneliness++;
        hunger++;
        tiredness++;
        biggestStress();
        $('summary').text(`LONELINESS: ${loneliness}  HUNGER: ${hunger}  TIREDNESS: ${tiredness}`)    
    }, 5000);
}

let lightOut = () => {
    if (shifts % 2 == 0) {
        $('main').css('background-color', 'navy');
        $('#yard').css('opacity', '.7')
        dayNight = 'night';
        $('#roscoe').css('transform','translateY(-100%)');
    } else {
        $('main').css('background-color', 'lightblue');
        dayNight = 'day';
        $('#roscoe').css('transform','translateY(0%)')
    }
}
let calendar = () => {
    if (shifts > 20) {
        $('figure').html('');
    }
    if (shifts % 2 == 0) {
        circleLength += 11;
        circleLength > 71 ? circleLength = 5 : null;
        $('#circle-img').css('left', circleLength + '%');
    }
    if (shifts % 14 == 0) {
        circleDepth += 10;
        circleDepth < 68 ? $('#circle-img').css('top', circleDepth + '%') : $('#circle-img').attr('src', '')
    }
}

//Event listeners for game interaction
$('#door-frame').click(function() {
    if (openClose % 2 == 0) {
        $('#door-img').attr('src', './resources/door-closed.svg');
        if (dayNight === 'night') {
            tiredness >= 5 ? tiredness -= 5 : tiredness = 0;
        }
    } else {
        $('#door-img').attr('src', './resources/door-open.svg');
        if (dayNight === 'day') {
            loneliness >= 5 ? loneliness -= 5 : loneliness = 0;
        }
    }
    // shifts > 0 ? shifts-- : null;
    openClose++
});

$('#trash').click(function() {
    hunger >= 5 ? hunger -= 5 : hunger = 0;
    // shifts > 0 ? shifts-- : null;
})
$('button').click(function() {
    alert(instructions);
})

//Mechanics for selecting raccoon image


let response = (stressor) => {
    switch (stressor) {
        case loneliness:
            $raccoon.attr('src', './resources/excited.svg');
        break;
        case hunger:
            $raccoon.attr('src', './resources/full.svg');
        break;
        case tiredness:
            $raccoon.attr('src', './resources/full.svg');
    }
}

// Determines raccoon image without player intervention
let biggestStress = () => {
    if (loneliness == 11 || hunger == 11 || tiredness == 11) {
        ($('figure')).html('');
        let endGame = confirm(`It looks like Roscoe has moved on to another house. Would you like to play again?`)
        location.reload();
    } else {
        const allStressors = [loneliness, hunger, tiredness];
        troubleIndex = 0;
        const stressImages = ['./resources/lonely.svg', './resources/hungry.svg', './resources/tired.svg']
        if (Math.max(...allStressors) > 6) {
            let pressingStress = 0;
            for (let i = 0; i < allStressors.length; i++) {
                if (allStressors[i] > pressingStress) {
                    pressingStresss = allStressors[i];
                    troubleIndex = i;
                }
            }
            $raccoon.attr('src', stressImages[troubleIndex]);
        }
    }
}
$('#door-frame').one('click', function() {
    gameStart()
});
