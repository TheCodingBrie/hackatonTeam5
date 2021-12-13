import React from "react";
import "./landingpage.css";
import { NavLink } from "react-router-dom";

function Landingpage() {
  return (
    <div className="mainPage">
      <div className="logo"></div>
      <div className="welcome-text">
        <h1>Season's Greetings!</h1>
        <br />
        <p>
          Make this season extra special by sending heartfelt digital cards to
          friends and family!
        </p>
        <br />
        <br />
        <NavLink to="/createcard" className="create-card">
          Create a card
        </NavLink>
      </div>
    </div>
  );
}

export default Landingpage;
