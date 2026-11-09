import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// firebase database s
import firebaseConfig from "../firebaseConfig.js";
// firebase database e

// setup redux start
import { store } from "../app/store";
import { Provider } from "react-redux";
// setup redux end

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
