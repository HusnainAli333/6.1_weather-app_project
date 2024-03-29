import { useEffect, useState } from "react";

export default function Main({ weather, city, error }) {
  const [icon, setIcon] = useState(null);
  let icons = ""; // Declare icon variable before conditional statements
  console.log(error);
  if (weather.weather && weather.weather.length > 0) {
    if (
      weather.weather[0].icon === "01d" ||
      weather.weather[0].icon === "01n"
    ) {
      icons = "./Assets/clear.png";
    } else if (
      weather.weather[0].icon === "02d" ||
      weather.weather[0].icon === "02n"
    ) {
      icons = "./Assets/cloud.png";
    } else if (
      weather.weather[0].icon === "03d" ||
      weather.weather[0].icon === "03n"
    ) {
      icons = "./Assets/drizzle.png";
    } else if (
      weather.weather[0].icon === "04d" ||
      weather.weather[0].icon === "04n"
    ) {
      icons = "./Assets/drizzle.png";
    } else if (
      weather.weather[0].icon === "09d" ||
      weather.weather[0].icon === "09n"
    ) {
      icons = "./Assets/rain.png";
    } else if (
      weather.weather[0].icon === "10d" ||
      weather.weather[0].icon === "10n"
    ) {
      icons = "./Assets/rain.png";
    } else if (
      weather.weather[0].icon === "13d" ||
      weather.weather[0].icon === "13n"
    ) {
      icons = "./Assets/snow.png";
    }
  } else {
    icons = "./Assets/clear.png";
  }

  useEffect(() => {
    async function fetchWeatherIcon() {
      try {
        if (!weather.weather || weather.weather.length === 0) return;

        const iconCode = weather.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        setIcon(iconUrl);
      } catch (error) {
        console.error("Error fetching weather icon:", error);
      }
    }

    fetchWeatherIcon();
  }, [weather.weather]);
  return (
    <>
      {error && <p className="error">{error}</p>}
      {!error && (
        <>
          <div className="Weather-image">
            <img src={icons} alt="humidty" />
          </div>

          {weather.main?.temp && (
            <>
              <div className="weather-temp">{weather.main.temp} ° C</div>
              <div className="icon">
                <div className="weather-location">{weather.name}</div>
                <img src={icon} alt="humidty" />
              </div>
            </>
          )}
          <div className="data-container">
            <div className="element">
              <img src="./Assets/humidity.png" alt="" />
              <div className="data">
                <div className="humidity-perc">{weather.main?.humidity}%</div>
                <div className="text">humidity</div>
              </div>
            </div>
            <div className="element">
              <img src="./Assets/wind.png" alt="" />
              <div className="data">
                <div className="humidity-perc">{weather.wind?.speed} km/h</div>
                <div className="text">Wind speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
