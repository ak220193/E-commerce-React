import React from "react";
import "./CategorylistItem.css";
import Button from "@mui/material/Button"; // Importing Button from Material-UI

const Categorylist = ({ item }) => {
  return (
    <div className="Catergorylist__container">
      <div className="list__image">
        <img src={item.img} alt="catimg" />
      </div>
      <div className="list__info">
        <h1 className="list__title">{item.title}</h1>
        <Button
          variant="contained"
          style={{
            color: "black",
            background: "white",
            border: "1px solid black",
            marginTop: "5px",
            padding: "10px"
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Categorylist;
