import React, { useState } from "react";
import axios from "axios";

export default function Weatherr() {
    const [weatherData, setWeatherData] = useState({ready: false});
    
        function handleResponse(response) {
            console.log(response.data);
            setWeatherData({
                ready: true,
                city: response.data.city,
                date: new Date((response.data.time)*1000),
                iconUrl: response.data.condition.icon_url,
                description: response.data.condition.description,
                temperature: response.data.temperature.current,
                humidity: response.data.temperature.humidity,
                wind: response.data.wind.speed
            });
        }

    if (weatherData.ready) {
        return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                        className="search-input"
                        type="search"
                        placeholder="Enter a city..."
                        required
                        onChange={handleCityChange}
                        autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                    <input  className="search-button" type="submit" value="Search" />
                    </div>
                </div>
            </form>
            <WeatherInfo data="weatherData"/>
        </div>
        );
    }
    
}