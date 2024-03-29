import { useEffect, useState } from "react";
import Main from "./Main";
import Search from "./Search";
import "./WeatherApp.css";
export default function WeatherApp() {
  const key = "c987abe7139696a6d20680d02402102e";
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setSubmit(input);
    setError("");
    setInput("");
  }

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          if (!submit) return;
          const weather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${submit}&units=Metric&appid=${key}`
          );

          const Weatherdata = await weather.json();
          if (Weatherdata.cod === "404") throw new Error("City not Found");

          setWeather(Weatherdata);
        } catch (err) {
          console.error(err);
          setError(err.message);
          console.log(err.message);
        }
      }
      fetchWeather();
    },
    [submit]
  );
  return (
    <div
      className="container"
      // style={{ backgroundImage: "url(http://localhost:3000/1.png)" }}
    >
      <Search input={input} setInput={setInput} handleClick={handleClick} />
      <Main weather={weather} city={city} error={error} />
    </div>
  );
}
