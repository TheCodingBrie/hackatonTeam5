import "./../App.css";

import { useState } from "react";

const CreateText = ({ messageDropdownShown }) => {
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setMessage(e.target.value);
    // console.log(e.target.value.length);
  };

  const handleClick = (e) => {
    if (e.target.className.includes("item")) {
      setMessage(e.target.innerHTML);
    }
  };
  return (
    <div className="CreateText">
      <form>
        <div className="to">
          <h2>
            Dear
            <input type="text" placeholder="someone" />
          </h2>
        </div>
        <div className="message">
          <textarea
            //id="messageArea"
            onChange={handleChange}
            type="text"
            list="messages"
            name="message"
            id="message"
            placeholder="message"
            style={{ width: "500px" }}
            value={message}
          />
          {messageDropdownShown && (
            <div id="dropdownMenu" className="dropdown" onClick={handleClick}>
              <h4 className="dropdown item">
                May your holidays sparkle with joy and laughter.
              </h4>
              <h4 className="dropdown item">
                Merry Christmas! May you get chance to take in the beauty and
                true meaning of the season.
              </h4>
              <h4 className="dropdown item">
                Eat. Drink. Be Merry. Have a wonderful Christmas.
              </h4>
              <h4 className="dropdown item">
                Merry Christmas to you and God bless you and your family with
                peace and joy for the year to come.
              </h4>
              <h4 className="dropdown item">
                May the festive season bring you opportunities and success in
                life! Merry Christmas!
              </h4>
            </div>
          )}
          {/* <datalist id="messages">
            <option value="May your holidays sparkle with joy and laughter."></option>
            <option value="Merry Christmas! May you get chance to take in the beauty and true meaning of the season."></option>
            <option value="Eat. Drink. Be Merry. Have a wonderful Christmas."></option>
            <option value="Merry Christmas to you and God bless you and your family with peace and joy for the year to come."></option>
            <option value="May the festive season bring you opportunities and success in life! Merry Christmas!"></option>
          </datalist> */}
        </div>
        <div className="from">
          <h1>With lots of love!</h1>
          <input type="text" placeholder="your name" />
        </div>
      </form>
    </div>
  );
};

export default CreateText;
