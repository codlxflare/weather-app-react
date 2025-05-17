import React from 'react';
import ForecastDay from './ForecastDay';

export default function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      {forecast.forecastday.map(day => (
        <ForecastDay key={day.date} day={day} />
      ))}
    </div>
  );
}
