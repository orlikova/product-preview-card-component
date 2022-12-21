import React from "react";
import "./App.css";
import { Main } from "./components/Main/Main";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./constants/theme/getTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={getTheme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
