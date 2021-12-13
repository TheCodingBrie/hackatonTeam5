import "./App.css";
import Picture from "./Picture";
import { useState } from "react";
import Landingpage from "./Landingpage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route
        path="/createcard"
        element={<Picture showModal={showModal} setShowModal={setShowModal} />}
      />
    </Routes>
    // <div className="App">
    //   <Landingpage />
    //   <Picture v />
    // </div>
  );
}
export default App;
