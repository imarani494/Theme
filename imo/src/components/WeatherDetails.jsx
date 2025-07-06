import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError('');
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        setError('City not found or API error.');
      }
    };
    fetchWeather();
  }, [city]);

  if (error) return <div style={{ padding: '20px' }}>{error}</div>;

  if (!weather) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '40px' }}>
      <h2>Weather in {weather.name}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>

      <div style={{ marginTop: '30px' }}>
        <h3>Location Map</h3>
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
            weather.name
          )}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WeatherDetails;
