import axios from 'axios';
import React, {useState, useEffect} from 'react'

function WeatherApi() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2bec8e7d79aa7d04ae05131c64ffa0c6`

    const fixedLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            setLocation('');
        }
    }

  return (
    <div>
        <div>
            <input 
                type="text" 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={fixedLocation}
                placeholder='ketik lokasi disini...'
                className='px-5 border-2 border-black' 
            />
        </div>
        <div>
            <h1>{data.name}</h1>
            {data.main ? 
                <div>
                    <h2>{data.main.temp}°F</h2>
                    <h3>{data.weather[0].main}</h3>
                    <h3>terasa seperti: {data.main.feels_like}°F</h3>
                    <h3>kelembaban    : {data.main.humidity}%</h3>
                </div>
            : 'tekan enter'}
            {data.wind ? 
                <div>
                    <h3>kecepatan angin: {data.wind.speed} mph</h3>
                    <h3>derajat: {data.wind.deg}°</h3>
                </div>
            : ''}
        </div>

    </div>
  )
}

export default WeatherApi