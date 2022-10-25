import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MyThemeProvider } from "./styles/MyThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
);
