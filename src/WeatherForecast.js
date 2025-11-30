import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loadedInfo, setLoadedInfo] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoadedInfo(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoadedInfo(true);
    }

    function load() {
        const apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
    
    if (loadedInfo) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index > 0 && index < 7) {
                            return (
                                <div className="col-2" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                        })
                    }
                </div>
            </div>
        )
    } else {
        load();
        return null;   
    }

}