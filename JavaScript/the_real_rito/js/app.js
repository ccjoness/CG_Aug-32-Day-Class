'use strict';
$('.ui.checkbox').checkbox();

$('input[type="radio"]').change(function () {
    console.log($(this).attr('name'));
    console.log($(this).next().html())
});

$('input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
        console.log($(this).attr('name'));
        console.log($(this).is(":checked"))
    }
});