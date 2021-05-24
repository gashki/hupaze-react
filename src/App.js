import React from "react";
import "./App.css";

import Details from "./components/Details";
import Devices from "./components/Devices";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Devices />
      <Details />
      <Navbar />
    </div>
  );
};

export default App;
