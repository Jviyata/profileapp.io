import React from 'react';
import { useMode } from '../../contexts/ModeContext';

const DarkModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <button 
      className={`fixed top-[10px] right-[10px] p-[10px] rounded-md 
        ${mode === 'light' 
          ? 'bg-[#333] text-white' 
          : 'bg-[#ddd] text-black'}`} 
      onClick={toggleMode}
    >
      Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default DarkModeToggle;
