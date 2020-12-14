import React from "react";
import "./carousel.css";
import TextLoop from "react-text-loop";
import Img1 from "./model-Image.png";
import Img2 from "./sculpture.png";
import Img3 from "./zebra.png";
import Img4 from "./map.png";

export default function carousel() {
  return (
    <div className="container bg-carousel">
      <div className="animation-container">
        <TextLoop interval="5000">
            <span>
              <img src={Img1} className="model-img" />
            </span>
            <span className='text'>Sculpture at your Click</span><span>
              <img src={Img3} className="zebra-img" />
            </span>
            <span className='text'>One Big Africa Art Market</span>
        </TextLoop>{" "}
        <TextLoop interval="5000">
            <span className='text text-mobile'><p>African Artworks </p>and Handicrafts Home</span>            
            <span>
              <img src={Img2} className="sculp-img" />
            </span><span className='text'>Animal Skin at ease</span>            
            <span>
              <img src={Img4} className="map-img" />
            </span>
        </TextLoop>{" "}
      </div>
      <div className="image-slider"></div>
    </div>
  );
}
