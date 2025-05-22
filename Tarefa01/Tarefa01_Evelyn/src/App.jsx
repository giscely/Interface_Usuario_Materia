import React, { useState } from 'react';
import Galeria from './Galeria';
import Detalhes from './Detalhes';
import Tema from './Tema';
import './App.css';

const App = () => {
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Tema toggleTheme={toggleTheme} />
      <Galeria onSelect={setSelectedPersonagem} />
      <Detalhes personagem={selectedPersonagem} />
    </div>
  );
};

export default App;