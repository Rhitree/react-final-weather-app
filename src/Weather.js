import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from 'axios';


export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false })
    ;
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: (Math.round(response.data.temperature.current)),
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            city: response.data.city,
            humidity: response.data.temperature.humididty,
            condition: response.data.condition.decription,
            icon: response.data.condition.icon_url,
        });
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <input
                type="search"
                placeholder="Enter A City..."
                className="form-control"
                autoFocus="on"
                />
                <input type="submit" value="Search" className="button" />            
            </form>
                <div className="row">
                    <div className="col-8">
                        <h1>{weatherData.city}</h1>
                    </div>
                    <div className="col-4">
                        <img
                            src={weatherData.icon}
                            alt={weatherData.condition}
                            />
                    </div>
                </div>
            <ul className="date-forecast">
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li>{weatherData.condition}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <span className="temperature"> {weatherData.temperature}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {weatherData.wind}km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
} else {

    const apiKey ="b3a37c1584b0oatf80a196c74f3071cb";
    let city = "London";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...."
    }
}