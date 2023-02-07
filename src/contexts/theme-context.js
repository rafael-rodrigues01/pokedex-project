import { createContext, useState } from "react";

import animateBackground from "../images/animate-background.webp";
import nightBackground from "../images/night-pokemon-background.webp";

export const themes = {
  light: {
    backgroundImage: animateBackground,
  },
  dark: {
    backgroundImage: nightBackground,
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
