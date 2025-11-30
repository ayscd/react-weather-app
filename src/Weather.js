import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time*1000),
            iconUrl: response.data.condition.icon_url,
            description: response.data.condition.description,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return(
        <div className="Weather">
            <header>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                            className="search-input w-100"
                            type="search"
                            placeholder="Enter a city..."
                            required
                            onChange={handleCityChange}
                            autoFocus="on"
                            />
                        </div>
                        <div className="col-3">
                        <input  className="search-button w-100" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </header>
            <hr />
            <main>
                <WeatherInfo data={weatherData}/>
            </main>
        </div>
        );
    } else {
        search();
        return "Loading...";
    }
   
}