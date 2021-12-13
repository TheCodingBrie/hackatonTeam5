import React from "react";
import PictureList from "./PictureList";
import { useState } from "react";

export default function Picture({ showModal, setShowModal }) {
  const [pictureURL, setPictureURL] = useState(null);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className={pictureURL ? "hiddenContent" : "pictureBox"}>
        <button onClick={handleModal}>Choose a christmas image</button>
      </div>
      <img
        className={pictureURL ? "" : "hiddenContent"}
        src={pictureURL}
        alt="christmas"
      />
      <PictureList
        setPictureURL={setPictureURL}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
