import React, { useState, useEffect } from 'react';
import './Tema.css';

const Tema = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
    toggleTheme();
  };

  return (
    <div className="tema">
      <button onClick={handleToggle} className="theme-button">
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
};

export default Tema;