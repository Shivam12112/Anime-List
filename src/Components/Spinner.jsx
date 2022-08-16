import React from "react";
import spinner from "../images/Loader.gif";

const Spinner = () => {
  return (
    <div>
      <img src={spinner} className="d-block m-auto" alt="" />
    </div>
  );
};

export default Spinner;
