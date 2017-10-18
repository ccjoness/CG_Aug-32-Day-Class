var dieList = [new Die('die1'), new Die('die2')];
var round = 1;

function Die(id) {
    this.value = 0;
    this.held = false;
    this.containerId = $('#' + id);
    this.render = function () {
        this.containerId.stop().effect("shake", {times: 5}, 500).attr('src', 'img/' + this.value + '.png')
    };
    this.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.render();
    };
}

function clearHolds() {
    $.each(dieList, function (index, die) {
            die.held = false;
            //
            console.log();
            var target = $('#' + (parseInt($(die.containerId).attr('id').replace(/[^\d.]/g, '')) - 1));
            target.removeClass('held');
            target.text(target.data("text-original"));
        }
    )
}

function disableButtons() {
    $('.holdButton').prop("disabled", true);
    $('#roll').prop("disabled", true).removeClass('play');
    $('#newGame').prop("disabled", false).addClass('play');
}

function enableButtons() {
    $('.holdButton').prop("disabled", false);
    $('#roll').prop("disabled", false).addClass('play');
    $('#newGame').prop("disabled", true).removeClass('play');
}

function checkROund() {
    if (dieList[0].value === 3 && dieList[1].value === 3) {
        $("#roundNumber").html("Angry Dice! Go Back to round 1!");
        setTimeout(function () {
            $("#roundNumber").fadeOut('slow', function () {
                $("#roundNumber").html('Round: ' + round).fadeIn('slow');
            })
        }, 2000);
        round = 1;
        clearHolds()
    } else if (dieList[0].value + dieList[1].value === 3 && round === 1) {
        round = 2;
        $("#roundNumber").html('Round: ' + round);
        clearHolds()
    } else if (
        (dieList[0].value === 4 || dieList[0].value === 3) &&
        (dieList[1].value === 4 || dieList[1].value === 3) &&
        round === 2) {
        round = 3;
        $("#roundNumber").html('Round: ' + round);
        clearHolds()
    } else if (dieList[0].value + dieList[1].value === 11 && round === 3) {
        round = 4;
        $("#roundNumber").html("You Win!");
        disableButtons();
        clearHolds();
    }
}

function roll() {
    if (round < 4) {
        $.each(dieList, function (index, die) {
            if (!die.held) {
                die.roll()
            }
        })
    }
    checkROund();
}

function reset() {
    enableButtons();
    roll();
    clearHolds();
    round = 1;
    $("#roundNumber").html('Round: ' + round)
}

function hold() {
    if ($('.held').length < 1 || $(this).hasClass('held')) {
        var ind = $(this).attr('id');
        var t = $(this);
        if (dieList[ind].value !== 6) {
            dieList[ind].held = !dieList[ind].held;
            t.toggleClass('held');
            t.text() === t.data("text-swap") ? t.text(t.data("text-original")) : t.text(t.data("text-swap"));
        } else {
            console.log("A 6 can not be held.")
        }
    } else {
        console.log("You can't hold two die at the dame time!")
    }
}

$('.holdButton').click(hold);
$('#roll').click(roll);
$('#newGame').click(reset);