import React from "react";
import "../styles/Loader.css"

function Loader() {
  return (
    <>
      <div className="container">
        <div className="Loader">
          <span></span>
        </div>
        <div className="Loader">
          <span></span>
        </div>
        <div className="Loader">
          <i></i>
        </div>
        <div className="Loader">
          <i></i>
        </div>
      </div>
    </>
  );
}

export default Loader;
