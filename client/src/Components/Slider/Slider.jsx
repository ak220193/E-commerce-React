import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from "../../Assets/image1.png";
import Image2 from "../../Assets/image2.png";
import Image3 from "../../Assets/women1.jpg";
import Image4 from "../../Assets/women5.jpg";

import "./Slider.css";

const Slider = () => {

  const banneritems = [
    {
      id: 1,
      img: Image1,
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: Image2,
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 20% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: Image3,
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
    {
      id: 4,
      img: Image4,
      title: "ETHINIC MELA",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 20% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    const totalSlides = banneritems.length;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlides - 1);
    } else {
      setSlideIndex(slideIndex < totalSlides - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="Slider__container">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <IoIosArrowBack />
      </div>
      <div className="wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {banneritems.map((item) => (
          <div className="slide" style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="slide" className="image" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="button">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Slider;
