import React, { useState, useEffect } from "react";
import "./Smallnavbar.css";
import {navitems} from "../../Variabledata/small-nav-content"

const Smallnavbar = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % navitems.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="small-nav__container">
      <div className="dummydata">
        <p>{navitems[currentItemIndex].text}</p>
      </div>
    </div>
  );
};

export default Smallnavbar;
