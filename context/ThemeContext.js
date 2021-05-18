import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [darkMode, toggleDarkMode] = useToggle();
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
