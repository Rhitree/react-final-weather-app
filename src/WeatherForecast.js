import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08"
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    }
    
    if (loaded) {
        return  (
        <div className="WeatherForecast">
            <div className="weatherContainerHeader">
                <div className="dots3">
                     <span className="dot1"></span>
                     <span className="dot2"></span>
                     <span className="dot3-3"></span>
                     Forecast</div>
                     </div>
                <div className="row">
                    <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="WeatherForecast-temperatures">
                        <div className="WeatherForecast-icon">
                                <WeatherIcon 
                                code={"clear-sky-day"} size={50}
                                />                            
                        </div>
                        <span className="WeatherForecast-temperature-max">{forecast[0].temperature.maximum}°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );

    } else {
        return null;
    }
}
