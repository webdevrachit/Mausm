import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import  Load from './Load'

import WeatherBox from "./WeatherBox";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const apiCall = async (evt) => {
    if (evt.key === "Enter") {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=37337e92cace3dbf81be18bc19e29fb8`
      );
      try {
        setWeather(res.data);
        setQuery("");
        console.log(res.data);
        console.log(weather);
      } catch (error) {
        console.error();
      }
    }
  };
  const bg = () => {
    if (typeof weather.main != "undefined") {
      if (weather.main.temp > 16) {
        return "app warm";
      } else return "app cold";
    }
    return "app cold animated infinite bounce delay-2s";
  };

  return (
    <div className={bg()}>
      <main>
        <div className="search-box">
          <input
          color="primary"
            id="outlined-basic"
            label="City"
            variant="filled"
            className="search-bar"
            placeholder="Search your city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={apiCall}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <WeatherBox weather={weather}></WeatherBox>
        ) : (
          <Load></Load>
        )}
      </main>
    </div>
  );
}

export default App;
