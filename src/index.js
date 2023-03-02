console.log(new Date());

let now = new Date();

let date = now.getDate();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let currentDate = document.querySelector("#date-today");
currentDate.innerHTML = `${day}, ${date} ${month} ${year}`;

//

// function showCity(event) {
//   event.preventDefault();
//   let city = document.querySelector("#city-input");
//   let changedCity = document.querySelector("#changed-city");
//   changedCity.innerHTML = `${city.value}`;
// }

// let submit = document.querySelector("#submit");
// submit.addEventListener("submit", showCity);

//

// let temperature = document.querySelector("#temp");

// function showCelsius(event) {
//   event.preventDefault();
//   temperature.innerHTML = `20`;
// }

// let celsius = document.querySelector("#celsius-link");
// celsius.addEventListener("click", showCelsius);

// function showFahrenheit(event) {
//   event.preventDefault();
//   temperature.innerHTML = `80`;
// }

// let fahrenheit = document.querySelector("#fahrenheit-link");
// fahrenheit.addEventListener("click", showFahrenheit);

// Location

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = `${temperature}°`;

  let lowTemp = Math.round(response.data.main.temp_min);
  let currentLow = document.querySelector("#low");
  currentLow.innerHTML = `${lowTemp}°`;

  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}%`;

  let wind = response.data.wind.speed;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `${wind}mph`;
}

function searchCity(city) {
  let apiKey = "aa496803e5bcab4c41ca90ff3cc746bd";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let changedCity = document.querySelector("#changed-city");
  changedCity.innerHTML = `${city}`;
  searchCity(city);
}

let submit = document.querySelector("#submit");
submit.addEventListener("submit", showCity);
