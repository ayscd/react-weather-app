import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import './MainInfo.css'

export default function MainInfo() {
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
        return (
        <div className="main-info">
            <div className="row">
                <div className="col-12">
                    <h1>{weatherData.city}</h1>
                    <span>
                        <ul>
                            <li><FormattedDate date={weatherData.date}/></li>
                            <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="row"> 
                <div className="col-8 temperature-info">
                    <div className="icon" id="icon">
                        <img src={weatherData.iconUrl} alt={weatherData.description}/></div> 
                    <div className="real-temp">{Math.round(weatherData.temperature)}</div>
                    <div className="temp-unit">ºC</div>
                </div>
                <div className="col-4 temperature-info">
                    <ul className="secondary-temp-info">    
                        <li>Humidity: <strong>{weatherData.humidity}%</strong></li>
                        <li>Wind: <strong>{Math.round(weatherData.wind)}km/h</strong></li>
                    </ul>
                </div>
            </div>
        </div>
        );
    } else {
        const apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
        let city = "New York";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
   
};