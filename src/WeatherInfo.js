import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
                <div className="row">
                        <div className="col-8">
                            <h1>{props.data.city}</h1>
                        </div>
                        <div className="col-4">
                            <div className="float-right">
                                <WeatherIcon 
                                code={props.data.icon} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="weatherContainer">
                        <ul className="date-forecast">
                            <li>
                                <FormattedDate date={props.data.date} />
                            </li>
                            <li>{props.data.condition}</li>
                        </ul>
                        <div className="row">
                            <div className="col-6">
                                <span className="temperature"> {props.data.temperature}</span>
                                <span className="unit">°C</span>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>
                                        Humidity: {props.data.humidity}%
                                    </li>
                                    <li>
                                        Wind: {props.data.wind}km/h
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}