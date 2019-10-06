import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      syntax: "#555"
    }
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeContextProvider;
