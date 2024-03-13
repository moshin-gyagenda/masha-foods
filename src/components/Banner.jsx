import React, { useState, useEffect } from "react";
import Banner1 from "../assets/images/bunner.jpeg";
import Banner2 from "../assets/images/chicken.png";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Banner1, Banner2];
  const messages = ["Welcome to Masha Foods!", "Delicious Moments Await You!"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const bannerStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="jumbotron banner" style={bannerStyle}>
      <div className="container">
        <div className="banner-text">
          <h1
            className="btn text-center"
            style={{
              backgroundColor: "purple",
              borderRadius: "10px",
              // width: "600px",
              borderColor: "purple",
            }}
          >
            {messages[currentImage]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
