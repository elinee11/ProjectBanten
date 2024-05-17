import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherBox = ({ title, value }) => {
  return (
    <div className="weather-box">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default function Weather() {
  const [Weather, setWeather] = useState(null);

  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: {
      location: "Tangerang",
      format: "json",
      u: "c"
    },
    headers: {
      "X-RapidAPI-Key": "ff0be89d1fmsh3552aa7226e175cp18cb7djsn4d764bc12b6c",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com"
    }
  };

  async function fetchWeather() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <WeatherBox
        title="Temperature"
        value={
          Weather ? `${(Math.round (Weather.current_observation.condition.temperature))}°C` : ""
        }
      />
    </div>
  );
}
