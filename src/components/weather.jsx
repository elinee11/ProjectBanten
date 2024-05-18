import React, { useEffect, useState } from "react";
import axios from "axios";
import "./weather.css";

const WeatherBox = ({ title, value }) => {
  return (
    <div className="weather-box">
      <p className="text-lg md:max-w-3xl">
      Weather</p>
      {/* <p>{value}</p> */}
      <div className="flex">

      <h1 className="text-4xl md:text-5xl font-bold md:max-w-2xl mb-5 leading-[1.2]">
      26
      </h1>
<p>°</p>
<p className="pt-3 text-3xl text-slate-100">C</p>
      </div>

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
      // 'X-RapidAPI-Key': '912b400cffmshdeebb3da93f61e4p1b614fjsn5ad7bcd6dfb9',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
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
    <div>
      <WeatherBox
        value={
          Weather ? `${(Math.round (Weather.current_observation.condition.temperature))}°C` : ""
        }
      />
    </div>
  );
}
