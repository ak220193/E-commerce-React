import React, { useState, useEffect } from "react";
import "./Smallnavbar.css";

const apidata = [
  {
    id: 1,
    text: "Deal for the day :  10% offer on selected Products"
  },
  {
    id: 2,
    text: "Deal for the day :  Free shipping over Rs.1999"
  },
  {
    id: 3,
    text: "Exclusive Deals :  10% discount on Combo Only applicable for Registered Members"
  },
  {
    text: "Bonus : Rs.100 off on your First order"
  },
  {
    text: "Refer Your friend for exclusive gift cards"
  }
];

const Smallnavbar = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % apidata.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="small-nav__container">
      <div className="dummydata">
        <p>{apidata[currentItemIndex].text}</p>
      </div>
    </div>
  );
};

export default Smallnavbar;
