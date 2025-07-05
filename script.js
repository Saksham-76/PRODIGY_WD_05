const apiKey = "4a3b250069cd1e598af09471145ebb43"; 

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
      if (data.cod === 200) {
        document.getElementById("weatherResult").classList.remove("hidden");
        document.getElementById("cityName").innerText = `📍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temp").innerText = `🌡️ Temperature: ${data.main.temp} °C`;
        document.getElementById("desc").innerText = `🌥️ Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      } else {
        alert("City not found!");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Failed to fetch weather data.");
    });
}
