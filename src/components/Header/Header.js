import React, { useState, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './style.css';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkmode(!darkMode);
    theme === 'theme-light' ? updateTheme('theme-dark') : updateTheme('theme-light');
  }

  return (
    <div className='Header_container'>
     <div>Rick and Morty API</div>
     <button type='toggel-button' onClick={handleClick}>{!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}

export default Header;
