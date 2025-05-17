import React from 'react';

function getAqiInfo(aqi) {
  const levels = [
    { min:0, max:50, level:'Хорошо', color:'#4CAF50', desc:'Качество воздуха удовлетворительное' },
    { min:51,max:100,level:'Умеренно',color:'#FFEB3B',desc:'Качество воздуха приемлемое' },
    { min:101,max:150,level:'Плохо',color:'#FF9800',desc:'Может влиять на чувствительных людей' },
    { min:151,max:200,level:'Очень плохо',color:'#F44336',desc:'Может влиять на всех' },
    { min:201,max:300,level:'Опасно',color:'#9C27B0',desc:'Серьезный риск для здоровья' },
    { min:301,max:500,level:'Очень опасно',color:'#795548',desc:'Чрезвычайные условия' }
  ];
  return levels.find(l=>aqi>=l.min&&aqi<=l.max)||{};
}

export default function AirQuality({ aqi }) {
  const info = getAqiInfo(aqi);
  return (
    <div className="air-quality-card">
      <h2 className="section-title">Качество воздуха</h2>
      <div className="aqi-container">
        <div className="aqi-value" style={{ backgroundColor: info.color }}>{aqi}</div>
        <div className="aqi-info">
          <p className="aqi-level">{info.level}</p>
          <p className="aqi-description">{info.desc}</p>
        </div>
      </div>
    </div>
  );
}
