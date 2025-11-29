import React, { useState } from "react";
import axios from "axios";

import './Weather.css';

export default function Search() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState(null);

  function displayInfo(response) {
    setInfo({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function accessInfo(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6643c7326a4c2a38838264a28531d97e&units=metric`;
    axios
      .get(url)
      .then(displayInfo)
      .catch((error) => {
        alert("Cidade não encontrada.");
        setInfo(null);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form className="row" id="search-form" onSubmit={accessInfo}>
        <input
          className="search-input col-10"
          id="search-input"
          type="search"
          placeholder="Enter a city..."
          required
          onChange={updateCity}
          autoFocus="on"
        />
        <input  className="search-button col-2" type="submit" value="Search" />
      </form>

      {info && (
        <p className="search-info">
          <ul>
            <li>
              <strong>Temperature:</strong> {Math.round(info.temperature)}ºC
            </li>
            <li>
              <strong>Description:</strong> {info.description}
            </li>
            <li>
              <strong>Humidity:</strong> {Math.round(info.humidity)}%
            </li>
            <li>
              <strong>Temperature:</strong> {info.temperature}km/H
            </li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
                alt={info.description}
              />
            </li>
          </ul>
        </p>
      )}
    </div>
  );
};