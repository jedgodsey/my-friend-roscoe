let time = 0;
let dayNight = 0;
let loneliness = 0;
let hunger = 0;
let tiredness = 0;
let calendar = 1;



setInterval(() => { 
    time++;
    dayNight++;
    loneliness++;
    hunger++;
    tiredness++;
    calendar++;
    check();
    $('summary').text(`LONELINESS: ${loneliness}  HUNGER: ${hunger}  TIREDNESS: ${tiredness}`)

    $('time').text(`One more day with Roscoe makes ${calendar}!`)
}, 1000);

let check = () => {
    if (calendar % 2 == 0) {
        $('main').css('background-color', 'navy');
    } else {
        $('main').css('background-color', 'pink');
    }
}



$('body').on('click', function(event) {
    console.log('door click');
    if ($('#door-img').css('src', './resources/door-open.svg')) {
        $('#door-img').css('src', './resources/door-closed.svg')
    } else if ($('#door-img').css('src', './resources/door-closed.svg')) {
        $('#door-img').css('src', './resources/door-open.svg')
    }
})
