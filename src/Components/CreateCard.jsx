import CreateText from "./CreateText";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";

const CreateCard = ({ messageDropdownShown }) => {
  const [to, setTo] = useState();
  const printRef = useRef();
  const [messageDropdownShown, setMessageDropdownShown] = useState(false);

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
      <div ref={printRef}>
        <CreateText messageDropdownShown={messageDropdownShown} />
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
