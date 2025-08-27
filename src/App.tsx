import React from "react";
import BootstrapButton from "./components/BootstrapButton";
import BootstrapCard from "./components/BootstrapCard";
import BootstrapModal from "./components/BootstrapModal";

function App() {
  return (
    <div className="container mt-5">
      <h1>Hello Vite + TypeScript + Bootstrap</h1>
      <BootstrapButton />
      <BootstrapCard />
      <BootstrapModal />
    </div>
  );
}

export default App;
