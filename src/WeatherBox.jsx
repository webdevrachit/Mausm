import React from "react";
import { Paper } from "@material-ui/core";
import styles from "./WeatherBox.module.css";

function WeatherBox({ weather }) {
  console.log(weather);

  return (
    <div className={styles.weatherBox}>
      <Paper elevation={6} className={styles.paper}>
        <div className={styles.upper}>
          <div className={styles.location}>
            {weather.name}, {weather.sys.country}
          </div>
          <div className={styles.temp}> {weather.main.temp}°C</div>
          <div className={styles.weatherDescription}>
            {weather.weather[0].description}
          </div>
        </div>
        <div className={styles.secData}>
          <div>Maximum temp: {weather.main.temp_max}°C</div>
          <div>Minimum temp: {weather.main.temp_min}°C</div>
          <div>Humidity: {weather.main.humidity}%</div>
          <div>Wind Speed: {weather.wind.speed}kmph</div>
        </div>
      </Paper>
    </div>
  );
}

export default WeatherBox;
