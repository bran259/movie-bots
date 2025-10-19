import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotCard';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('health');
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then(res => res.json())
      .then(setBots)
      .catch(err => console.error('Failed to load bots:', err));
  }, []);

  const enlistBot = (bot) => {
    if (army.some(b => b.bot_class === bot.bot_class)) {
      return alert(`You already have a ${bot.bot_class} bot in your army!`);
    }
    setArmy([...army, bot]);
    setBots(bots.filter(b => b.id !== bot.id));
  };

  const releaseBot = (botId) => {
    const releasedBot = army.find(b => b.id === botId);
    setArmy(army.filter(b => b.id !== botId));
    setBots([...bots, releasedBot]);
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:4000/bots/${botId}`, { method: 'DELETE' })
      .catch(err => console.error('Failed to delete bot:', err));
    setArmy(army.filter(b => b.id !== botId));
    setBots(bots.filter(b => b.id !== botId));
  };

  const sortedBots = [...bots]
    .filter(bot => !selectedClasses.length || selectedClasses.includes(bot.bot_class))
    .sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <div className="App">
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={enlistBot}
        />
      ) : (
        <>
          <h1>Bot Battlr</h1>
          <SortBar sortBy={sortBy} onSortChange={setSortBy} />
          <FilterBar
            selectedClasses={selectedClasses}
            onFilterChange={setSelectedClasses}
          />
          <BotCollection bots={sortedBots} onSelect={setSelectedBot} />
        </>
      )}
      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
