const API_KEY = "dde4e5a3ff65ea6c0be40396fa820c49"; // Replace with your actual OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // 🔍 DEBUG (important)

      // ✅ FIX: cod can be string OR number
      if (data.cod != 200) {
        document.getElementById("weatherResult").innerHTML =
          `<p style="color:red;">${data.message}</p>`;
        return;
      }

      document.getElementById("weatherResult").innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherResult").innerHTML =
        "<p style='color:red;'>Network error</p>";
    });
}
