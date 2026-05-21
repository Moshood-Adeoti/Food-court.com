import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" 
        ? "bg-gray-800 min-h-screen text-white" 
        : "bg-white min-h-screen text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}