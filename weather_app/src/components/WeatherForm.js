import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const WeatherForm = () => {
    const [city, setCity] = useState('')
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        history(`/weather/${city}`)
    }

    return (
        <div className='form-container'>
            <h2>Enter Your City</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="search" type="submit">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm;
