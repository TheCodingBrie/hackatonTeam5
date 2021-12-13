import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

export default function PictureList({
  setPictureURL,
  setShowModal,
  showModal,
}) {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(loadImage, []);

  function loadImage() {
    const imgParam = "Christmas season";
    const fetchUrl = `https://loremflickr.com/800/600/${imgParam}`;
    setIsLoading(true);
    fetch(fetchUrl)
      .then((response) => {
        setIsLoading(false);
        setImage(response.url);
      })
      .catch(() => setError(true));
  }

  const modalStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImage = () => {
    setShowModal(false);
    setPictureURL(image);
  };

  const loadContent = () => {
    if (isLoading)
      return <div>Your content is loading, please be patient.</div>;
    if (error) return <div>Oops, something went wrong, please reload.</div>;

    return <img alt="Christmas" src={image} />;
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Select picture Modal"
      >
        <h2>Choose a picture</h2>
        <div>{loadContent()}</div>
        <button onClick={loadImage}>Refresh</button>
        <button onClick={handleImage}>Select this photo</button>
      </Modal>
    </div>
  );
}
