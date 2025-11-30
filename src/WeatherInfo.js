import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-12 main-info">
                    <h1>{props.data.city}</h1>
                    <span>
                        <ul className="main-ul">
                            <li><FormattedDate date={props.data.date}/></li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="row"> 
                <div className="col-8 temperature-info">
                    <div className="icon">
                        <WeatherIcon size={80} code={props.data.icon} alt={props.data.description}/>
                    </div> 
                    <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <div className="col-4 temperature-info">
                    <ul className="secondary-ul">    
                        <li>Humidity: <strong>{props.data.humidity}%</strong></li>
                        <li>Wind: <strong>{Math.round(props.data.wind)}km/h</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}