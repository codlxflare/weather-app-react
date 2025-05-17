import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header({ onLocation }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="app-header">
      <h1>Прогноз погоды</h1>
      <div className="header-controls">
        <button onClick={onLocation} className="icon-btn" title="Мое местоположение">
          📍
        </button>
        <button onClick={toggleTheme} className="icon-btn" title="Сменить тему">
          🌓
        </button>
      </div>
    </header>
  );
}
