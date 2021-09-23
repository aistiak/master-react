import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import SomeComponent from "./components/SomeComponent";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toogleTheme = () => setDarkTheme((darkTheme) => !darkTheme);
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>toggle</button>
        <SomeComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
