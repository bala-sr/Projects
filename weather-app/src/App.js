import { fetchWeather } from "./FetchWeather.js";
import React, {useState} from "react";
import "./Home.css";

export default function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const search = async () => {
        console.log("City = ", city);
        const data = await fetchWeather(city);
        console.log("home: ", data.main);
        setWeather(data);
        console.log("weather = ", weather);
        setCity('');
    }

    return (
        <>
            <nav>
                <h2>WeatherApp</h2>
            </nav>    
            <section className="container">
                <p>
                    Enter the city name to get the weather forecast
                </p>
                <section className="search">
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
                    <button className="submit-btn" onClick={search}>Submit</button>
                </section>    
            </section>
            { weather.main &&
                (
                    <div className="weather-display">
                        <h2 id="place">{weather.name}<sup id="country">{weather.sys.country}</sup></h2>
                        <div class="temp-info">
                            <span id="temp">
                                {weather.main.temp}
                                <sup>&deg;C</sup>
                            </span>
                        </div>
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p id="weather">{weather.weather[0].description}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}