import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import "./variables.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./store/ReduxProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
