var moveBy = 50;
$('#left').click(function () {

    console.log($(window).height());
    var el = $('#content');

    if (el.position().left - moveBy < 0) {
        el.stop().animate({
            left: '0'
        })
    } else {
        el.stop().animate({
            left: '-=' + moveBy + 'px'
        })
    }
});

$('#right').click(function () {
    var width = $(window).width();
    var el = $("#content");
    if ((parseInt(el.position().left) + el.width() + moveBy) > width) {
        el.stop().animate({
            left: width - el.width() + 'px'
        })
    } else {
        el.stop().animate({
            left: '+='+moveBy+'px'
        })
    }
});

$('#up').click(function () {
    $("#content").stop().animate({
        top: '-='+moveBy+'px'
    })
});

$('#down').click(function () {
    $("#content").stop().animate({
        top: '+='+moveBy+'px'
    })
});


// function runthis() {
//     $("#content").animate({
//         width: '200px'
//     }, 400, function () {
//         $("#content").animate({
//             height: '200px'
//         }, 2000)
//     });
// }
// runthis();