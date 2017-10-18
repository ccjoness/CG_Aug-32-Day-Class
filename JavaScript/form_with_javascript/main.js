'use strict';

$('#formName').blur(function () {
    var val = $(this).val();
    if (val.length > 0) {
        $(this).addClass('okay').removeClass('error')
    } else {
        $(this).addClass('error').removeClass('okay')
    }
});

$('#formEmail').blur(function () {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (re.test($(this).val())) {
    //     $(this).addClass('okay').removeClass('error')
    // } else {
    //     $(this).addClass('error').removeClass('okay')
    // }
    var val = $(this).val();
    if (val.indexOf('@') !== -1 && val.indexOf('.') !== -1) {
        $(this).addClass('okay').removeClass('error')
    } else {
        $(this).addClass('error').removeClass('okay')
    }
});

$('#mainForm').submit(function () {
    $('#mainForm').append('<input type="hidden" name="total" value="6.00">');
    return true;
});