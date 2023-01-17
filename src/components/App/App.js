import "./App.css";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "../../pages/routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
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
