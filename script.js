var cities = document.getElementById('city')
var pastSearch = document.getElementById('past-search')
var searchedCity = document.getElementById('searched-city')
var apiKey = 'cfef46a9be5508dca8cbd550d239da50'
searchButton()

function searchButton(){
    var button = document.getElementById('btn');
    button.addEventListener("click", fetchWeather.value);
}

function fetchWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cfef46a9be5508dca8cbd550d239da50')
        .then(response => response.json())
        .then(data => console.log(data))
}