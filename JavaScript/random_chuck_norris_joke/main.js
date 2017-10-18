// function () {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             var json = JSON.parse(this.response).value;
//             document.getElementById("jokeId").innerHTML = json.id;
//             document.getElementById("jokeDiv").innerHTML = json.joke;
//         }
//     };
//     xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
//     xhttp.send();
// }
function getJoke() {
    $.ajax({
        url: "http://api.icndb.com/jokes/random",
        type: 'GET',
        success: function (data) {
            $('#jokeId').html(data.value.id);
            $('#jokeDiv').html(data.value.joke);
        }
    })
}

$('#factMe').click(getJoke);
getJoke();
