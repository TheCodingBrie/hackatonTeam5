import "./App.css";
import Picture from "./Picture";
import { useState } from "react";
import Landingpage from "./Landingpage";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>hi</h1>
      <Landingpage />
      <Picture showModal={showModal} setShowModal={setShowModal} />
    </div>
  );


export default App;
