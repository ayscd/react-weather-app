import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon className="forecast-icon" size={40} code="clear-sky-day"/>
                    <div className="forecast-temps">
                        <span><strong className="forecast-max-temp">19º</strong></span> 
                        <span className="forecast-min-temp">10º</span>
                    </div>
                </div>
            </div>
        </div>
    )
}