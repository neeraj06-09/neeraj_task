import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <About />
      <Prices />
      <Shop />
    </div>
  );
}

export default App;
