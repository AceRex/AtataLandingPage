import React from "react";
import "./about.css";
import { GiAfrica, GiArtificialHive, GiShoppingCart } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

export default function About() {
  return (
    <div className="container" id='About'>
      <section className=" about-contain">
        <div className="abt-contain">
          <div className="sd-left">
            <small>
              <GoPrimitiveDot />
              About Us
            </small>
            <p>Who Are We?</p>
            <div className='sd-left-text'>
              Atata57 is an e-commerce and auction startup place, where to buy
              and own exquisite African Artworks and Handicrafts at fair prices.
              </div>
              <div className='sd-left-text'>
              When we say exquisite, we mean distinctive, lovely, rare,
              beautiful, and excellent African Artworks and Handicrafts.
            </div>
          </div>
          <div className="sd-right">
            <div className="sd-right-div">
              <span>
                <GiAfrica />
              </span>
              <p>
                Africa is beautiful, so are the people, Artworks, and
                Handicrafts with diverse cultural and historical backgrounds
                therein.
              </p>
            </div>
            <div className="sd-right-div">
              <span>
                <GiArtificialHive />
              </span>
              <p>
                {" "}
                Check out our e-commerce pages and shop through our unique wide
                range of African Artworks and Handicrafts.
              </p>
            </div>
            <div className="sd-right-div">
              <span>
                <GiShoppingCart />
              </span>
              <p>
                Check out our auction pages and bid for our carefully selected
                rare Antiguities, Artworks and everything of African riits with
                electrifying stories, sources and un ending emotional
                connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
