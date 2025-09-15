import React, { createContext, useContext, useEffect, useState } from "react";

const defaultColors = {
  primary: "#2563eb",
  secondary: "#10b981",
  accent: "#f59e0b",
  background: "#f9f9f9",
  surface: "#ffffff",
  text: "#1f2937",
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [colors, setColors] = useState(defaultColors);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme-colors");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setColors((prev) => ({ ...prev, ...parsed }));
        Object.entries({ ...defaultColors, ...parsed }).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--${key}`, value);
        });
      } catch (err) {
        console.error("Invalid theme-colors in localStorage", err);
        localStorage.removeItem("theme-colors");
        Object.entries(defaultColors).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--${key}`, value);
        });
        setColors(defaultColors);
      }
    } else {
      Object.entries(defaultColors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      });
    }
  }, []);

  function setColor(key, value) {
    setColors((prev) => {
      const updated = { ...prev, [key]: value };
      document.documentElement.style.setProperty(`--${key}`, value);
      localStorage.setItem("theme-colors", JSON.stringify(updated));
      return updated;
    });
  }

  function resetColors() {
    Object.entries(defaultColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    localStorage.removeItem("theme-colors");
    setColors(defaultColors);
  }

  return (
    <ThemeContext.Provider value={{ colors, setColor, resetColors, open, setOpen }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export const themeDefaults = defaultColors;