"use strict";
var count = 1;

var timer;

function message() {
    $('#message').html('This has ran ' + count + ' times.');
    count++; // count += 1 or count = count + 1
}

$('#start').click(function () {
    timer = setInterval(message, 1000);
});

$('#stop').click(function () {
    $('#message').html('This has ran 0 times.');
    clearInterval(timer);
    count = 1;
});

// var timer = setInterval(function () {
//     console.log("Hi");
// }, 500);
//
//
//
// // function BankAccount(startingBalance) {
// //     this.balance = startingBalance;
// //     this.deposit = function (amount) {
// //         this.balance += amount;
// //     }
// // }
// //
// //
// // var chris = new BankAccount(200);
// // var sheri = new BankAccount(1321321321321);
// // console.log(BankAccount);
// // console.log(chris);
// // console.log(sheri);
//
//
//
// $('.colorBox').click(function () {
//     clearInterval(timer);
//     $(this).children().css('backgroundColor', 'red');
// });
//
//
//
// // $('#submit').click(function () {
// //     event.preventDefault();
// //     console.log(this)
// // });
// //
// //
// // var bankAccount = {
// //     balance:0,
// //     deposit: function (amount) {
// //         this.balance += amount;
// //     }
// // };
// //
// // bankAccount.deposit(200);
// // console.log(bankAccount.balance);
// //
// //
// //
// // var animalNoises = {
// //     name: null,
// //     age: 0,
// //     makeDogNoise: function () {
// //         return 'Bork!';
// //     },
// //     makeCatNoise: function () {
// //         return 'Meow!'
// //     }
// // };
// //
// // console.log(animalNoises.makeDogNoise());
// // console.log(animalNoises.makeCatNoise());
// // animalNoises.name = 'TigetNice';
// // console.log(animalNoises.name);
// // var color;// = document.getElementById('colorChoice').value;
// //
// // // document.getElementById('submit').addEventListener('click', function () {
// // //     event.preventDefault();
// // //
// // //     color = document.getElementById('colorChoice').value;
// // //
// // //     document.body.style.backgroundColor = color;
// // //     document.getElementById('messageBox').innerHTML = "<strong>You</strong> picked " + color + '. Good job!!';
// // //     console.log(document.getElementById('messageBox').innerHTML)
// // // });
// //
// // $('#submit').click(function () {
// //     //
// //     event.preventDefault();
// //
// //     color = $('#colorChoice').val();
// //
// //     $('body').css('backgroundColor', color);
// //     $('#messageBox').html("<strong>You</strong> picked " + color + ". Good job!!")
// // });
// //
// //
// //
// //
// // // var thing = _.filter([1, 2, 3, 4, 5, 6], function (num) {
// // //     return num % 2 === 0;
// // // });
// // //
// // // console.log(thing);
// //
// //
// // // var namesToAges = {
// // //   'Robyn': 38,
// // //   'Al': 15,
// // //   'Amanda': 90
// // // };
// // //
// // // var names = ['Robyn', 'Amanda', 'Al'];
// // //
// // // function getAgeForName(name) {
// // //     return namesToAges[name];
// // // }
// // // console.log(names.map(getAgeForName));
// //
// // // var r_num = Math.floor((Math.random() * 100) + 1);
// // //
// // // console.log(r_num);
// // // var name = 'Chris';
// // //
// // // var data = {
// // //     thing:'Value',
// // //     thing2: 'Value2'
// // // };
// // //
// // // console.log(data.thing2);
// // // console.log(data.thing);