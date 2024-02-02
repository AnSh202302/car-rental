import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental">
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
