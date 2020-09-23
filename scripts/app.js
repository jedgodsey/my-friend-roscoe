//Global Variables
let time = 0;
let dayNight = 'day';
let loneliness = 0;
let hunger = 0;
let tiredness = 0;
let days = 1;
let openClose = 0;
let $raccoon = $('#roscoe');
let instructions = 'Open the door to play with Roscoe. Close the door to let him rest. If you think he looks hungry, feed him some Garbage! If he gets too tired, hungry or lonely, he may move on to another house.'

//Timing functions
const gameStart = () => {
    alert(instructions);
    setInterval(() => {
        $('time').text(`One more day with Roscoe makes ${days}!`)
        days++;
        lightOut();
        calendar();
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
    if (days % 2 == 0) {
        $('main').css('background-color', 'navy');
        $('#yard').css('opacity', '.7')
        dayNight = 'night';
    } else {
        $('main').css('background-color', 'lightblue');
        dayNight = 'day';
    }
}

let calendar = () => {
    if (days > 10) {
        $('figure').html('');
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
    days > 0 ? days-- : null;
    openClose++
});

$('#trash').click(function() {
    hunger >= 5 ? hunger -= 5 : hunger = 0;
    days > 0 ? days-- : null;
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
gameStart();
