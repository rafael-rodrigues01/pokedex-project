import "./App.css";
import { createGlobalStyle } from "styled-components";

import { AppRoutes } from "../../routes/routes";
import { ThemeProvider } from "../../contexts/theme-context";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className="App">
        <GlobalStyle />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`


  *::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: #070d12;
}

*::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 3px solid #070d12;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a{
    text-decoration: none;
  }

`;

export default App;
