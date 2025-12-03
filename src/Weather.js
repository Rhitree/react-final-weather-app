import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                        <div className="col-9">
                        <input
                        type="search"
                        placeholder="Enter A City..."
                        className="form-control"
                        autoFocus="on"
                        />
                        <div className="col-3">
                     <input type="submit" value="Search" className="button" />            
                    </div>
                </div>
            </div>
        </form>
            <div className="city-and-img">
            <span><h1>New York</h1></span>
            <span>
                <FontAwesomeIcon icon={faSun} size="4x" color="gold" />
            </span>
           </div>
            <ul className="date-forecast">
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <span className="temperature"> 6</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 13km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}