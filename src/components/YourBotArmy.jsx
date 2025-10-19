import React from 'react';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army ({army.length}/6)</h2>
      <div className="army-grid">
        {army.map(bot => (
          <div key={bot.id} className="army-bot">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name} ({bot.bot_class})</h3>
            <div className="army-stats">
              <span>H: {bot.health}</span>
              <span>D: {bot.damage}</span>
              <span>A: {bot.armor}</span>
            </div>
            <button onClick={() => onRelease(bot.id)}>Release</button>
            <button className="discharge" onClick={() => onDischarge(bot.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;