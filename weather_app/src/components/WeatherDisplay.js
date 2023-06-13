import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WeatherDisplay = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)
    const { city } = useParams()

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=c23cb9cf622c4ad881370943231306&q=${city}`
                );
                const data = await response.json();
                console.log(data)
                if (data.error) {
                    setError(true);
                } else {
                    setWeatherData(data);
                }
            } catch (error) {
                console.log('Error fetching weather data:', error)
            }
        }

        fetchWeatherData()
    }, [city])

    if (error) {
        return <div className='error'>Error fetching weather data. Please check the city name.</div>
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { location, current } = weatherData;

    return (
        <div>
            <div className='weather-display'>
                <h2>Current Weather in {location.name}</h2>
                <p>Temperature: {current.temp_c}°C</p>
                <p>Condition: {current.condition.text}</p>
            </div>

            <div className='card-container-top'>
                <div className='Card0'>
                    <p>Feels Like: {current.feelslike_c}°C</p>
                </div>
                <div className='Card'>
                    <p>cloud: {current.cloud}</p>
                </div>
            </div>

            <div className='card-container'>
                <div className='Card1'>
                    <p>Humidity: {current.humidity}%</p>
                </div>

                <div className='Card2'>
                    <p>Pressure: {current.pressure_mb} mb</p>
                </div>

                <div className='Card3'>
                    <p>Wind Speed: {current.wind_kph} kph</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay;



