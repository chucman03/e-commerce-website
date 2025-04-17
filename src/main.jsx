import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./Reset.scss";
import Layout from "./Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <BrowserRouter>
      <Layout />
    </BrowserRouter>

    {/* </StrictMode> */}
  </Provider>
);
