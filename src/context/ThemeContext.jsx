import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState(() => localStorage.getItem('themeColor') || '#ffffff');

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