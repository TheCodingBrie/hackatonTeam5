import React from "react";
import PictureList from "./PictureList";
import { useState } from "react";

export default function Picture({ showModal, setShowModal }) {
  const [pictureURL, setPictureURL] = useState("");

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="pictureBox">
        <button onClick={handleModal}>Choose a christmas image</button>
      </div>
      <PictureList
        setPictureURL={setPictureURL}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
