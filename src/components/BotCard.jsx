import React from 'react';

const BotCard = ({ bot, onBack, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      {/* <p><strong>Catchphrase:</strong> {bot.catchphrase}</p> */}
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <div className="stats">
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
      </div>
      <button onClick={onBack}>Go Back</button>
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotCard;