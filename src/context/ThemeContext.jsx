import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState(() => {
    const stored = localStorage.getItem('themeColor');
    return /^#[0-9A-Fa-f]{6}$/.test(stored) ? stored : '#ffffff';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', color);
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