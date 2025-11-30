import React from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
        return(
            <div className="WeatherTemperature">
                <span className="real-temp">{Math.round(props.celsius)}</span>
                <span className="temp-unit">ºC</span>
            </div>
        )
    };