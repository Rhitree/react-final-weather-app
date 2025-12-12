import React, { useState } from "react";
import "./Weather.css";
import "./WeatherInfo"
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";


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
            <WeatherInfo data={weatherData}/>

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