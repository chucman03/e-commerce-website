import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import MainHomepage from "./components/MainHomepage/MainHomepage.jsx";

function App() {
  return (
    <>
      <Header />
      <MainHomepage />
    </>
  );
}

export default App;
