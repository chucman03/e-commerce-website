import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./Reset.scss";
import Layout from "./Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  // </StrictMode>
);
