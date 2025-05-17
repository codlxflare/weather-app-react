import { useState, useCallback } from 'react';

const API_KEY = 'c77d30a835c84c55807172509251104';
const BASE_URL = 'https://api.weatherapi.com/v1';

export function useWeather() {
  const [data, setData] = useState({
    current: null,
    forecast: null,
    airQuality: null,
    loading: false,
    error: null,
  });

  const fetchWeather = useCallback(async query => {
    setData(d => ({ ...d, loading: true, error: null }));
    try {
      const [curRes, fcRes, aqRes] = await Promise.all([
        fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}&lang=ru`),
        fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=3&lang=ru`),
        fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=yes`),
      ]);
      if (!curRes.ok || !fcRes.ok || !aqRes.ok) {
        const msg = curRes.status === 404 || fcRes.status === 404 ? 'Город не найден' : 'Ошибка сервера';
        throw new Error(msg);
      }
      const [current, forecast, airQualityData] = await Promise.all([
        curRes.json(),
        fcRes.json(),
        aqRes.json(),
      ]);
      setData({
        current,
        forecast,
        airQuality: airQualityData.current.air_quality['us-epa-index'],
        loading: false,
        error: null
      });
    } catch (error) {
      setData(d => ({ ...d, loading: false, error: error.message }));
    }
  }, []);

  return { ...data, fetchWeather };
}
