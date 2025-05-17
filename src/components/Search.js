import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleKey = e => {
    if (e.key === 'Enter') onSearch(city.trim());
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyPress={handleKey}
          placeholder="Введите город"
        />
        <button onClick={() => onSearch(city.trim())} className="primary-btn">
          🔍 Поиск
        </button>
      </div>
    </div>
  );
}
