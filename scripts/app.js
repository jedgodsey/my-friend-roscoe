let time = 0;
let dayNight = 'day';
let loneliness = 0;
let hunger = 0;
let tiredness = 0;
let calendar = 1;
let openClose = 0;

setInterval(() => {
    $('time').text(`One more day with Roscoe makes ${calendar}!`)
    calendar++;
}, 30000)

setInterval(() => { 
    time++;
    loneliness++;
    hunger++;
    tiredness++;
    $('summary').text(`LONELINESS: ${loneliness}  HUNGER: ${hunger}  TIREDNESS: ${tiredness}`)    
}, 5000);

let lightOut = () => {
    if (calendar % 2 == 0) {
        $('main').css('background-color', 'navy');
    } else {
        $('main').css('background-color', 'pink');
    }
}

$('body').on('click', function(event) {
    if (openClose % 2 == 0) {
        $('#door-img').attr('src', './resources/door-closed.svg');
    } else {
        $('#door-img').attr('src', './resources/door-open.svg');
    }
    openClose++
})
