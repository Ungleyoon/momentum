const COORDS = "coords";
const WEATHER_KEY = "ebf0c687c1ab7045d41076fda0f8298b";
function setWeather() {
  const coords = getCoords();
  const lat = coords.lat;
  const lon = coords.lon;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const weatherIcon = document.querySelector(".weather-icon");
      const city = document.querySelector(".weather-city");
      const weather = document.querySelector(".weather-weather");
      const temperature = document.querySelector(".weather-temperature");
      weatherIcon.src = `./img/icons/${data.weather[0].icon}.png`;
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

function saveCoords(lat, lon) {
  const coordsObj = {
    lat: lat,
    lon: lon,
  };
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  setWeather();
}

function getCoords() {
  const getCoords = localStorage.getItem(COORDS);
  return JSON.parse(getCoords);
}

if (getCoords() === null) {
  navigator.geolocation.getCurrentPosition((res) => {
    saveCoords(res.coords.latitude, res.coords.longitude);
  });
} else setWeather();
setInterval(setWeather, 600000); //10분마다 날씨 갱신
