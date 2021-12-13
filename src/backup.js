import "./App.css";
import { useState } from "react";
import Landingpage from "./Landingpage";
import { Routes, Route } from "react-router-dom";
import CreateCard from "./Components/CreateCard";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/createcard" element={<CreateCard />} />
    </Routes>
  );
}
export default App;
