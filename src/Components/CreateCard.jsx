import CreateText from "./CreateText";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Picture from "./Picture";
import { NavLink } from "react-router-dom";

const CreateCard = () => {
  const [to, setTo] = useState();
  const printRef = useRef();
  const [messageDropdownShown, setMessageDropdownShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFocus = (e) => {
    if (e.target.id === "message" || e.target.className.includes("dropdown"))
      setMessageDropdownShown(true);
    else setMessageDropdownShown(false);
  };

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("card/jpg");
    const link = document.createElement("a");
    //
    if (typeof link.download === "string") {
      link.href = data;
      link.download = "card.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div onClick={handleFocus} className="CreateCard">
      <NavLink to="/" className="logo"></NavLink>
      <div className="createBox" ref={printRef}>
        <div className="container">
          <CreateText messageDropdownShown={messageDropdownShown} />
          <Picture showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
      <button
        className="previewBtn"
        type="button"
        onClick={handleDownloadImage}
      >
        Preview Card
      </button>
    </div>
  );
};

export default CreateCard;
