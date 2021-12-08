$(document).ready(function () {
  var searchBtn = $("#searchBtn");

  initLocalStorage();

  if (localStorage.getItem("prevCityWeatherSrch") != "[]") {
    var currentSrchHist = JSON.parse(
      localStorage.getItem("prevCityWeatherSrch")
    );
    renderLastCity(currentSrchHist[0]);
  }

  dispalySearchHist();

  //get city coordinates
  $(document).on("click", ".prvCity", function (e) {
    e.preventDefault();
    var cityName = $(this).attr("id");
    var apiKey = "cfef46a9be5508dca8cbd550d239da50";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&cnt=5&units=imperial&appid=" +
      apiKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (results) {
      weatherForecast(results);
    });
  });

 