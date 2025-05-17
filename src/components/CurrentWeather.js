import React from 'react';

export default function CurrentWeather({ current, location }) {
  const iconUrl = current.condition.icon.startsWith('http')
    ? current.condition.icon
    : `https:${current.condition.icon}`;

  return (
    <div className="current-weather">
      <h2>{location.name}, {location.country}</h2>
      <div className="current-main">
        <img src={iconUrl} alt={current.condition.text} className="weather-icon" />
        <div className="current-temp">
          <span className="temperature">{current.temp_c}°C</span>
          <p>{current.condition.text}</p>
        </div>
      </div>
    </div>
  );
}
