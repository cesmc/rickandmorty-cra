import React, { useState } from 'react';
import './style.css';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkMode);
  }

  return (
    <div className='Header_container'>
     <div>Rick and Morty API</div>
     <button type='button' onClick={handleClick}>{!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}

export default Header;
