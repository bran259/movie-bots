import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onSelect }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="grid">
        {bots.map(bot => (
          <Bot key={bot.id} bot={bot} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;