import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "lazysizes";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </BrowserRouter>
);
