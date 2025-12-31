import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setLoaded(false);
    }, [props.city]);

    function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
    }

    function load() {
        let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
    
   if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
         <div className="weatherContainerHeader">
                <div className="dots3">
                     <span className="dot1"></span>
                     <span className="dot2"></span>
                     <span className="dot3-3"></span>
                     Forecast</div>
                        </div>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}