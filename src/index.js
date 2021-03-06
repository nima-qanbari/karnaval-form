import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import MemberContextProvider from "./Context/MemberContext";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StylesProvider jss={jss}>
    <ThemeProvider theme={theme}>
      <MemberContextProvider>
        <Router>
          <App />
        </Router>
      </MemberContextProvider>
    </ThemeProvider>
  </StylesProvider>
);
