import React from 'react';

export default function ForecastDay({ day }) {
  const date = new Date(day.date);
  const dayName = date.toLocaleDateString('ru-RU', { weekday: 'short' });
  const iconUrl = day.day.condition.icon.startsWith('//')
    ? `https:${day.day.condition.icon}`
    : day.day.condition.icon;

  return (
    <div className="forecast-day">
      <h3>{dayName}</h3>
      <img src={iconUrl} alt={day.day.condition.text} className="weather-icon" />
      <p className="temperature">{day.day.avgtemp_c}°C</p>
      <p>{day.day.condition.text}</p>
      <div className="forecast-details">
        <p>↑ {day.day.maxtemp_c}°C</p>
        <p>↓ {day.day.mintemp_c}°C</p>
      </div>
    </div>
  );
}
