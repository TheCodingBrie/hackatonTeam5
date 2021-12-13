import React, { useRef } from "react";

export default function Preview({ pictureURL }) {
  const printRef = React.useRef;
  return <div ref={printRef}>I will be the printed content</div>;
}
