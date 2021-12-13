import "./App.css";
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

export default App;
