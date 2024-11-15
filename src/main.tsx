import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import MainContext from "./context/MainContext.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <MainContext>
        <App />
      </MainContext>
      </HashRouter>
  </StrictMode>
);
