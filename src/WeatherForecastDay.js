import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`;
    }

    function showDay() {
        let date = new Date(props.data.time*1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();
        return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            <div className="forecast-day">{showDay()}</div>
            <WeatherIcon className="forecast-icon" size={40} code={props.data.condition.icon} />
            <div className="forecast-temps">
                <span><strong className="forecast-max-temp">{maxTemperature()}º</strong></span> 
                <span className="forecast-min-temp">{minTemperature()}º</span>
            </div>
        </div>
    )
}