import React, { createContext, useContext, useLayoutEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState(() => {
    const stored = localStorage.getItem('themeColor');
    return /^#[0-9A-Fa-f]{6}$/.test(stored) ? stored : '#6be06b';
  });

  function getContrast(hex) {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return '#000';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? '#000' : '#fff';
  }

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--background-color', color);
    document.documentElement.style.setProperty('--text-color', getContrast(color));
    localStorage.setItem('themeColor', color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}