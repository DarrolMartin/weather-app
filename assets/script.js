console.log('Hello, World!')
// declaring variables
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");

// Retrieving weather from the Api
function searchWeather(city) {
  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b445f90518eb857bc16646aa7e277584&units=metric`;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
    });
  
}
// displaying Weather data
function displayWeather (data) {
  let cityName = data.name;
  let temp = data.main.temp;
  let humidity = data.main.humidity;
  let windSpeed = data.wind.speed;
  let icon = data.weather[0].icon;
  let iconURL = `http://openweathermap.org/img/w/${icon}.png`;

  $("#city-name").text(cityName);
  $("#currentIcon").attr("src", iconURL);
  $("#currentTemp").text(temp);
  $("#currentHumidity").text(humidity);
  $("#currentWindSpeed").text(windSpeed);  

}

function runSearch(event) {
  event.preventDefault();
  let searchValue = searchInput.value;
  // console.log(searchValue);
  // searchInput.value = "";
  searchWeather(searchValue);
  searchForecast(searchValue);
  // fetch(searchValue);
  // displayForecast(searchValue);
}


