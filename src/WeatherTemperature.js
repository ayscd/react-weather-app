import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheit(){
        return (((props.celsius * 9) / 5) + 32);
    }
    if (unit === 'celsius') {
        return(
            <div className="WeatherTemperature">
                <span className="real-temp">{Math.round(props.celsius)}</span>
                <span className="temp-unit">ºC| <a href="/" onClick={showFahrenheit}>ºF</a></span>
            </div>
        )
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="real-temp">{Math.round(fahrenheit())}</span>
                <span className="temp-unit"><a href="/" onClick={showCelsius}>ºC</a> | ºF</span>
            </div>
        );
    }
    
}