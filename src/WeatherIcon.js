import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const dataMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "CLOUDY",
        "broken-clouds-day": "CLOUDY",
        "scattered-clouds-night": "FOG",
        "broken-clouds-night": "FOG",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "SLEET",
        "thunderstorm-night": "SLEET",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "WIND",
        "mist-night": "WIND"
    }
    return(
        <ReactAnimatedWeather
            icon={dataMapping[props.code]}
            color="grey"
            size={80}
            animate={true}
        />
    )
}