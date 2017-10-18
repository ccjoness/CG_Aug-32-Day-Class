$(document).ready(function(){
    $('#submitWeather').click(function () {
        var city = $("#city").val();
        if(city != ''){
            $.ajax({
                url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
                "&APPID=2dac9abc6d26f876b5c559e153b4e67c",
                type: "Cet",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val('');
                }
            });
        }else{
            $("#empty").html('Field cannot be empty');
        }
    });
});
function show(data){
    return "<h3 style='font-size:40px; font-style: italic; font-family: 'Tahoma' class='text-center'>Current Weather for " +
    data.name + "," + data.sys.country +"</h3>" +
            "<h3 style='padding-right: 40px;'>Weather: "+ data.weather[0].main +"</h3>" +
            "<h3 style='padding-right: 40px;'>Description: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].description +"</h3>" +
            "<h3 style='padding-right: 40px;'>Temperature: "+ data.main.temp +"&deg;F</h3>" +
            "<h3 style='padding-right: 40px;'>Pressure: "+ data.main.pressure +"</h3>" +
            "<h3 style='padding-right: 40px;'>Humidity: "+ data.main.humidity +"%</h3>" +
            "<h3 style='padding-right: 40px;'>Min. Temperature: "+ data.main.temp_min +"&deg;F</h3>" +
            "<h3 style='padding-right: 40px;'>Max. Temperature: "+ data.main.temp_max +"&deg;F</h3>" +
            "<h3 style='padding-right: 40px;'>Wind Speeds: "+ data.wind.speeds +"</h3>" +
            "<h3 style='padding-right: 40px;'>Wind Direction: "+ data.wind.deg +"</h3>";
}