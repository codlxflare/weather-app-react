import React from 'react';

export default function WeatherDetails({ current }) {
  return (
    <div className="weather-details-grid">
      <div className="detail-card">
        <div className="detail-icon">🌡️</div>
        <div className="detail-info">
          <h3>Ощущается</h3><p>{current.feelslike_c}°C</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="detail-icon">💧</div>
        <div className="detail-info">
          <h3>Влажность</h3><p>{current.humidity}%</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="detail-icon">📊</div>
        <div className="detail-info">
          <h3>Давление</h3><p>{current.pressure_mb} hPa</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="detail-icon">💨</div>
        <div className="detail-info">
          <h3>Ветер</h3><p>{current.wind_kph} км/ч, {current.wind_dir}</p>
        </div>
      </div>
    </div>
  );
}
