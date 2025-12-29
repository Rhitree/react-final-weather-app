import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
                <div className="row">
                        <div className="col-7">
                            <h1 className="cityBox">◅{props.data.city}▻</h1>
                        </div>
                        <div className="col-5">
                            <div className="float-right">
                                <WeatherIcon 
                                code={props.data.icon} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="weatherContainer">
                        <div className="weatherContainerHeader"> Current Weather</div>
                            <div className="weatherContainerInfo">
                                <ul className="date-forecast">
                                    <li className="dateInfo">
                                        <FormattedDate date={props.data.date} />
                                    </li>
                                    <li className="conditionInfo">{props.data.description}</li>
                                </ul>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="starburst">
                                            <WeatherTemperature celsius={props.data.temperature}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <ul className="condition">
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
            </div>
        );
}