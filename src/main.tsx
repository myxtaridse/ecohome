import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./context/MainContext.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/ecohome/">
      <MainContext>
        <App />
      </MainContext>
      </BrowserRouter>
  </StrictMode>
);
