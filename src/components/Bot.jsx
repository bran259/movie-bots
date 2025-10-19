import React from 'react';

const Bot = ({ bot, onSelect }) => {
  return (
    <div className="bot-card" onClick={() => onSelect(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      {/* <p>{bot.catchphrase}</p> */}
      <p>Class: {bot.bot_class}</p>
      <div className="stats">
        <span>Health: {bot.health}</span>
        <span>Damage: {bot.damage}</span>
        <span>Armor: {bot.armor}</span>
      </div>
    </div>
  );
};

export default Bot;