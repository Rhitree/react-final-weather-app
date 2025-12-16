import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return <div className="App">
    <div className="outerContainer">
       <div className="container">
        <div className="appContainerHeader">React Weather App</div>
        <div className="appContainerContent">
         <Weather defaultCity="Cardiff"/>
         </div>
          </div>
      <footer>
        This project was coded by Rhian Jenkins and is open-sourced on 
        <a href= "https://github.com/Rhitree/react-final-weather-app" target="_blank"> Github </a>
        and hosted on 
        <a href="https://silver-eclair-98aa41.netlify.app/" target="_blank"> Netlify </a>
      </footer>
      </div>
    </div>
  ;
}

