import React from "react";
import "./App.css";
import Background from "./components/Background";
import Content from "./components/Content";

function App() {
  return (
    <div style={{ minHeight: "600px", minWidth: "1280px", position: "relative", textAlign: "center" }}>
      <Background />
      <Content />
    </div>
  );
}

export default App;
