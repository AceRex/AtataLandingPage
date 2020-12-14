import React from "react";
import "./services.css";
import { GiSellCard } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

export default function Services() {
  return (
    <div className="container" id='Services'>
        <div className="header">
          <small>
            <GoPrimitiveDot />
            Our Services
          </small>
        <p>What Do We Offer?</p>
        </div>

      <section className="services">
        
        <div className="services-item">
          <div className="services-icon">
            <GiSellCard />
          </div>
          <div className="services-text">
            Sales Of African Artworks and Handicrafts
          </div>
        </div>
        <div className="services-item">
          <div className="services-icon">
            <RiAuctionFill />
          </div>
          <div className="services-text">
            Auction of African Artworks and Handicrafts
          </div>
        </div>
        <div className="services-item">
          <div className="services-icon">
            <FaShippingFast />
          </div>
          <div className="services-text">Global Shipping</div>
        </div>
        <div className="services-item">
          <div className="services-icon">
            <FiBox />
          </div>
          <div className="services-text">
            Give Back to our Supplier's communities
          </div>
        </div>
      </section>
    </div>
  );
}
