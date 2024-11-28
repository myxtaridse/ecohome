
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import MainContext from "./context/MainContext.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";



createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <HashRouter>
      <MainContext>
        <Provider store={store}>
            <App />
        </Provider>
      </MainContext>
      </HashRouter>
  // </StrictMode>
);
