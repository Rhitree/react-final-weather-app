import React from 'react';
import Weather from './Weather';
import './App.css';
import WeatherForecast from './WeatherForecast';

export default function App() {
  return <div className="App">
    <div className="outerContainer">
       <div className="container">
        <div className="appContainerHeader">
              <div className="dots1">
                 <span className="dot1"></span>
                 <span className="dot2"></span>
                 <span className="dot3-1"></span>
                  React Weather App</div>
              </div>
        <div className="appContainerContent">
         <Weather defaultCity="Cardiff"/>
         </div>
          </div>
          <div className="ForecastContainer">
          </div>
      <footer>
        This project was coded by Rhian Jenkins and is open-sourced on 
        <a href= "https://github.com/Rhitree/react-final-weather-app" target="_blank" rel="noreferrer"> Github </a>
        and hosted on 
        <a href="https://app.netlify.com/projects/silver-eclair-98aa41/overview" target="_blank" rel="noreferrer"> Netlify </a>
      </footer>
      </div>
    </div>
  ;
}

