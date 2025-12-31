import React, { useState } from "react";
import "./Weather.css";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
    });
  }


    function search() {
    const apiKey ="b3a37c1584b0oatf80a196c74f3071cb";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <input
                type="search"
                placeholder="Enter A City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                />
                <input type="submit" value="Search" className="button" />            
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
    );
} else {
    search();
    return "Loading...."
    }
}

