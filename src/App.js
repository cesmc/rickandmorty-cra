import React, { useState } from 'react';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  const [theme, updateTheme] = useState('theme-light');

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={ 'App ' + theme }>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
