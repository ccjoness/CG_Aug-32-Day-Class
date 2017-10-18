var score = 0;
var timer;
var interval = 1000;
var clicks = 0;
var playing = false;

function play() {
    var hole_arr = $('.hole');
    if (hole_arr.length > 0) {
        var random = Math.floor(Math.random() * hole_arr.length);
        // console.log(random);
        $(hole_arr[random]).attr('src', 'mole.jpg').removeClass('hole').addClass('mole');
    } else {
        clearInterval(timer);
        console.log(!timer);
        alert('You lose!');
    }
}

$('#start').click(function () {
    if (!playing) {
        timer = setInterval(play, interval);
        playing = true
    } else {
        clearInterval(timer);
        playing = false;
    }
});

$('.img').click(function () {
    // var hole_arr = document.getElementsByClassName('hole');

    if ($(this).attr('src') === 'mole.jpg' && playing) {
        $(this).attr('src', 'hole.jpg').removeClass('mole').addClass('hole');
        score += 100;
        if (clicks === 9) {
            clicks = 0;
            interval -= 100;
            clearInterval(timer);
            playing = false;
            timer = setInterval(play, interval);
            playing = true;
        } else {
            clicks++;
        }
    } else {
        score -= 50
    }
});

$('img').on('dragstart', function () {
    event.preventDefault();
});