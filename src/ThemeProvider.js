import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ToggleThemeContext = React.createContext();

export const useCurrentTheme = () => useContext(ThemeContext);
export const useSetCurrentTheme = () => useContext(ToggleThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((darkTheme) => !darkTheme);
  return (
    <ThemeContext.Provider value={darkTheme}>
      {/* providing the state of dark theme to the whole application */}
      <ToggleThemeContext.Provider value={toggleTheme}>
        {/* providing a way to set state of dark theme to the whole application */}
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
