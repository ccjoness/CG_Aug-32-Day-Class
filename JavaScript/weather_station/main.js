'use strict';
// var latitude, longitude;
//
// $(document).ready(function() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(handle_geolocation_query, error);
//   } else {
//     alert('Device probably not ready.');
//   }
// });
//
// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// }
//
// function handle_geolocation_query(position) {
//   latitude = (position.coords.latitude);
//   longitude = (position.coords.longitude);
//   onPositionReady();
// }
//
// function onPositionReady() {
//   console.log(latitude);
//   console.log(longitude);
//   var city = '';
//     // proceed
//
//   $.ajax({
//     type: "GET",
//     url: "http://api.wunderground.com/api/c38a0b4cb7804271/geolookup/conditions/q/" + latitude + "," + longitude + ".json",
//     dataType: "json",
//     success: function(result) {
//       console.log(result.current_observation);
//       $('#cityName').text(result.current_observation.display_location.full);
//       $('#lastObs').text(result.current_observation.observation_time);
//       $('#currTempF').text(result.current_observation.temp_f);
//       $('#currTempC').text(result.current_observation.temp_c);
//       $('#currWind').text(result.current_observation.wind_string);
//       $('#currCond').html('<img src="http://icons.wxug.com/i/c/i/' + result.current_observation.icon + '.gif"> ' + result.current_observation.weather);
//       $("#bgimg").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/436722/" + result.current_observation.icon + ".png");
//     },
//     error: function(xhr, status, error) {
//       console.log(status);
//     }
//   });
// }
//
// function FullScreenBackground(theItem) {
//   var winWidth = $(window).width();
//   var winHeight = $(window).height();
//   var imageWidth = $(theItem).width();
//   var imageHeight = $(theItem).height();
//   var picHeight = imageHeight / imageWidth;
//   var picWidth = imageWidth / imageHeight;
//   if ((winHeight / winWidth) < picHeight) {
//     $(theItem).css("width", winWidth);
//     $(theItem).css("height", picHeight * winWidth);
//   } else {
//     $(theItem).css("height", winHeight);
//     $(theItem).css("width", picWidth * winHeight);
//   }
//   $(theItem).css("margin-left", winWidth / 2 - $(theItem).width() / 2);
//   $(theItem).css("margin-top", winHeight / 2 - $(theItem).height() / 2);
// }
//
// window.onload = function() {
//   FullScreenBackground('#bgimg');
// };
// $(window).resize(function() {
//   FullScreenBackground('#bgimg');
// });
//
// $("#f").click(function() {
//   $("#f").prop("disabled", true);
//   $("#c").prop("disabled", false);
//   $("#currTempCs").hide();
//   $("#currTempFs").show();
// });
//
// $("#c").click(function() {
//   $("#f").prop("disabled", false);
//   $("#c").prop("disabled", true);
//   $("#currTempCs").show();
//   $("#currTempFs").hide();
// });

function degToCompass(num) {
    var val = parseInt((num / 22.5) + .5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[val % 16]
}

var temp_k;
var descriptions = {
    '2': {
        type: 'Thundering and Lightening',
        images: ['lightning_01.jpg', 'lightning_02.jpg'],
        subCode: {
            '00': 'thunderstorm with light rain',
            '01': 'thunderstorm with rai',
            '02': 'thunderstorm with heavy rain',
            '10': 'light thunderstorm',
            '11': 'thunderstorm',
            '12': 'heavy thunderstorm',
            '21': 'ragged thunderstorm',
            '30': 'thunderstorm with light drizzl',
            '31': 'thunderstorm with drizzle',
            '32': 'thunderstorm with heavy drizzle'
        }
    },

    '3': {
        type: 'Drizzling',
        images: ['drizzling_01.jpg', 'drizzling_02.jpg', 'drizzling_03.jpg'],
        subCode: {
            '00': 'light intensity drizzle',
            '01': 'drizzle',
            '02': 'heavy intensity drizzle',
            '10': 'light intensity drizzle rain',
            '11': 'drizzle rain',
            '12': 'heavy intensity drizzle rain',
            '13': 'shower rain and drizzle',
            '14': 'heavy shower rain and drizzle',
            '21': 'shower drizzle'
        }
    },

    '5': {
        type: 'Raining',
        images: ['rainy_01.jpg', 'rainy_02.jpg', 'rainy_03.jpg'],
        subCode: {
            '00': 'light rain',
            '01': 'moderate rain',
            '02': 'heavy intensity rain',
            '03': 'very heavy rain',
            '04': 'extreme rain',
            '11': 'freezing rain',
            '20': 'light intensity shower rain',
            '21': 'shower rain',
            '22': 'heavy intensity shower rain',
            '31': 'ragged shower rain'
        }
    },

    '6': {
        type: 'Snowing',
        images: ['snow_01.jpg', 'snow_02.jpg', 'snow_03.png'],
        subCode: {
            '00': 'light snow',
            '01': 'snow',
            '02': 'heavy snow',
            '11': 'sleet',
            '12': 'shower sleet',
            '15': 'light rain and snow',
            '16': 'rain and snow',
            '20': 'light shower snow',
            '21': 'shower snow',
            '22': 'heavy shower snow'
        }
    },

    '7': {
        type: 'Atmospheric',
        images: ['atmospheric_01.jpg', 'atmospheric_02.jpg', 'atmospheric_03.jpg'],
        subCode: {
            '01': 'mist',
            '11': 'smoke',
            '21': 'haze',
            '31': 'sand, dust whirls',
            '41': 'fog',
            '51': 'sand',
            '61': 'dust',
            '62': 'volcanic ash',
            '71': 'squalls',
            '81': 'tornado'
        }
    },

    '800': {
        type: 'Clear',
        images: ['sunny_01.jpg', 'sunny_02.jpg', 'sunny_03.jpg', 'sunny_04.jpg'],
        subCode: {
            '00': 'clear sky'
        }
    },

    '8': {
        type: 'Cloudy',
        images: ['cloudy_01.jpg', 'cloudy_02.jpg', 'cloudy_03.jpg'],
        subCode: {
            '01': 'few clouds',
            '02': 'scattered clouds',
            '03': 'broken clouds',
            '04': 'overcast clouds'
        }
    },

    '9': {
        type: 'Extreme',
        images: ['extreme_01.jpg', 'extreme_02.jpg'],
        subCode: {
            '00': 'tornado',
            '01': 'tropical storm',
            '02': 'hurricane',
            '03': 'cold',
            '04': 'hot',
            '05': 'windy',
            '06': 'hail',

            '51': 'calm',
            '52': 'light breeze',
            '53': 'gentle breeze',
            '54': 'moderate breeze',
            '55': 'fresh breeze',
            '56': 'strong breeze',
            '57': 'high wind, near gale',
            '58': 'gale',
            '59': 'severe gale',
            '60': 'storm',
            '61': 'violent storm',
            '62': 'hurricane'
        }
    }


};

function setBackground(imgName) {

    $('.bg')
        .fadeOut(function () {
            $(this).css('backgroundImage', 'url("img/' + imgName + '")').fadeIn()
        })
}

function getConditions(first, end) {

    var len, randomImage;
    if (first + end === "800") {
        len = descriptions["800"].images.length;
        randomImage = Math.floor(Math.random() * len);
        setBackground(descriptions["800"].images[randomImage]);
        $('#currCond').html(descriptions["800"].type);
        $('#currCondDesc').html(descriptions["800"].subCode[end])
    } else {
        len = descriptions[first].images.length;
        randomImage = Math.floor(Math.random() * len);
        setBackground(descriptions[first].images[randomImage]);
        $('#currCond').html(descriptions[first].type);
        $('#currCondDesc').html(descriptions[first].subCode[end]);
        console.log(descriptions[first].images[randomImage])
    }
}

function getWeather(pos) {
    // console.log(pos.coords);
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'get',
        data: {
            APPID: "9ef3311b380d2586bf47ff522529e7a9",
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
        },
        success: function (response) {
            // console.log(response);
            temp_k = response.main.temp;
            var first_code_char = response.weather[0].id.toString().charAt(0);
            var code_char_end = response.weather[0].id.toString().charAt(1) + response.weather[0].id.toString().charAt(2);


            getConditions(first_code_char.toString(), code_char_end.toString());
            $('#cityName').html(response.name);
            $('#currWind').html(degToCompass(response.wind.deg));
            $('#windSpeed').html(response.wind.speed);
            $('#currTempF').html((response.main.temp * 9 / 5 - 459.67).toFixed(2));
            $('#currTempC').html((response.main.temp - 273.15).toFixed(2));
        }
    })
}

function getGeoByName(cityName) {
    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(cityName),
        type: 'GET',
        data: {
            key: 'AIzaSyAZ4GXuyxgEXQFQ4fIRf3sbsrFI9QwSugQ'
        },
        success: function (data) {
            var loc = {
                coords: {
                    latitude: data.results[0].geometry.location.lat,
                    longitude: data.results[0].geometry.location.lng
                }
            };
            getWeather(loc)
        }
    })
}

function error(err) {
    console.warn('ERROR(${err.code}): ${err.message}');
}

navigator.geolocation.getCurrentPosition(getWeather, error);

$('.tempButton').click(function () {
    if (!$(this).is(':disabled')) {
        $(this).prop('disabled', true).addClass('active');
        $($(this).siblings()[0]).prop('disabled', false).removeClass('active');
        var thisEl = $('#currTemp' + $(this).attr('id').toUpperCase() + 's');
        thisEl.show();
        $(thisEl.siblings()[0]).hide();
    }
});

$('#citySearch').click(function () {
    getGeoByName($('#newCity').val());

});


$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});

// navigator.geolocation.getCurrentPosition(getWeather, error);

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(setWeather);
// }
//
// function setWeather(pos) {
//     $.ajax({
//         url: 'http://api.openweathermap.org/data/2.5/weather',
//         type: 'get',
//         data: {
//             APPID: "9ef3311b380d2586bf47ff522529e7a9",
//             lat: pos.coords.latitude,
//             lon: pos.coords.longitude
//         },
//         success: function (respose) {
//             console.log(respose)
//         }
//     });
// }









