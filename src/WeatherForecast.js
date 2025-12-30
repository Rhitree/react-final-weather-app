import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return  (
        <div className="WeatherForecast">
            <div className="weatherContainerHeader">Forecast</div>
                <div className="row">
                    <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="WeatherForecast-temperatures">
                        <div className="WeatherForecast-icon">
                                <WeatherIcon 
                                code={"clear-sky-day"} size={50}
                                />                            
                        </div>
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                    </div>
                </div>
        </div>
    );
}
