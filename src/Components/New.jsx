import React from "react";

const New = () => {
  return (
    <div>
      <p id="demo">JavaScript can change HTML content.</p>

      <button
        type="button"
        onClick={() =>
          (document.getElementById("demo").innerHTML = "Hello There!!")
        }
      >
        Click Me!
      </button>
    </div>
  );
};

export default New;
