import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./store/ReduxProvider.tsx";
// import { UserProvider } from "./context/userContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <UserProvider> */}
      <ReduxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    {/* </UserProvider> */}
  </StrictMode>
);
