//Global Variables
let time = 0;
let dayNight = 'day';
let loneliness = 0;
let hunger = 0;
let tiredness = 0;
let calendar = 1;
let openClose = 0;
let $raccoon = $('#roscoe');

//Timing functions
setInterval(() => {
    $('time').text(`One more day with Roscoe makes ${calendar}!`)
    calendar++;
    lightOut();
}, 5000)

setInterval(() => { 
    time++;
    loneliness++;
    hunger++;
    tiredness++;
    biggestStress();
    $('summary').text(`LONELINESS: ${loneliness}  HUNGER: ${hunger}  TIREDNESS: ${tiredness}`)    
}, 1000);

let lightOut = () => {
    if (calendar % 2 == 0) {
        $('main').css('background-color', 'navy');
        $('#yard').css('opacity', '.7')
        dayNight = 'night';
    } else {
        $('main').css('background-color', 'lightblue');
        dayNight = 'day';
    }
}

//Event listeners for game interaction
$('#door-frame').click(function() {
    if (openClose % 2 == 0) {
        $('#door-img').attr('src', './resources/door-closed.svg');
    } else {
        $('#door-img').attr('src', './resources/door-open.svg');
    }
    openClose++
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
    if (loneliness > 9 || hunger > 9 || tiredness > 9) {
        ($('figure')).html('');
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
        }
        $raccoon.attr('src', stressImages[troubleIndex]);
    }
}

//Mechanics for adjusting scores
let interact = (stressor) => {
    stressor -= 5;
    response(stressor);
}
