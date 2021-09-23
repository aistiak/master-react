import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import SomeComponent from "./components/SomeComponent";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SomeComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
