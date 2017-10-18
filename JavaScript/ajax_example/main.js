
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(pos) {
    f(pos.coords.latitude, pos.coords.longitude);
}

function f (lat, lon) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: 'GET',
        data: {
            APPID: '9ef3311b380d2586bf47ff522529e7a9',
            lat: lat,
            lon: lon
        },
        success: function (response) {
            // $('#content').html(response)
            console.log(response)
        }
    });
}

// f(45.5231, -122.6765);