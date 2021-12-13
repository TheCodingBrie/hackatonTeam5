import "./App.css";
<<<<<<< HEAD
import Picture from "./Picture";
import { useState } from "react";
import Landingpage from "./Landingpage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
=======
import CreateCard from "./Components/CreateCard";
import { useState } from "react";

const App = () => {
  const [messageDropdownShown, setMessageDropdownShown] = useState(false);

  const handleFocus = (e) => {
    if (e.target.id === "message" || e.target.className.includes("dropdown"))
      setMessageDropdownShown(true);
    else setMessageDropdownShown(false);
  };
  return (
    <div className="App" onClick={handleFocus}>
      <CreateCard messageDropdownShown={messageDropdownShown} />
    </div>
  );
};
>>>>>>> createcard

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
