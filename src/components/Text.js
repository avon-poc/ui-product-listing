import React from "react";

const Text = (props) => {
  return (
    <div>
      <h1>{props.text}</h1> <br /> <img src={props.imgSrc} />
    </div>
  );
};

export default Text;
