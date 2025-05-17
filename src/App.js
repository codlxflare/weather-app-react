import React, { useEffect, useContext } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import AirQuality from './components/AirQuality';
import { useWeather } from './hooks/useWeather';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { current, forecast, airQuality, fetchWeather, loading, error } = useWeather();
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetchWeather('Москва');
  }, [fetchWeather]);

  const handleLocation = () => {
    if (!navigator.geolocation) return alert('Геолокация не поддерживается');
    navigator.geolocation.getCurrentPosition(
      pos => fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`),
      () => alert('Не удалось определить местоположение')
    );
  };

  return (
    <div className="app-container">
      <Header onLocation={handleLocation} />
      <Search onSearch={fetchWeather} />
      {loading && <div className="loading-spinner"><div className="spinner"></div><p>Загрузка...</p></div>}
      {error && <p className="error-message">Ошибка: {error}</p>}
      {current && <CurrentWeather current={current.current} location={current.location} />}
      {current && <WeatherDetails current={current.current} />}
      {forecast && <Forecast forecast={forecast.forecast} />}
      {airQuality != null && <AirQuality aqi={airQuality} />}
      <footer className="app-footer">
        <p>Обновлено: <span id="lastUpdated">{new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}</span></p>
      </footer>
    </div>
  );
}

export default App;
