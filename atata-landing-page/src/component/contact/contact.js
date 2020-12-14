import React from "react";
import "./contact.css";
import { GoPrimitiveDot } from "react-icons/go";
import { GiGlobe } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import {AiTwotonePhone, AiOutlineInstagram} from 'react-icons/ai'
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

export default function Contact() {
  return (
    <div className="container" id="Contact">
      <section className=" contact-contain">
        <div className="cont-contain">
          <div className="cont-left">
            <small>
              <GoPrimitiveDot />
              Our Contact
            </small>
            <p>Contact Us</p>
            <div className="cont-left-text">
              <a href="https://web.facebook.com/atata57" target="_blank">
                <RiFacebookCircleLine />
              </a>
              <a href="https://twitter.com/atata57" target="_blank">
                <TiSocialTwitterCircular />
              </a>
              <a
                href="https://ng.linkedin.com/company/atata57-synergy-and-alignment-limited"
                target="_blank"
              >
                <TiSocialLinkedinCircular />
              </a>
              <a
                href="https://www.instagram.com/atata57synergy/"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>

          <div className="cont-right">
            <div className="cont-right-div">
              <MdLocationOn />
              <p>15th Floor, Western House, Broad Street, Marina, Lagos</p>
            </div>
            <div className="cont-right-div mail-link">
              <a href="mailto:info@atata57.com ">
                <GiGlobe />                
              info@atata57.com
              </a>
            </div>
            <div className="cont-right-div">
              <AiTwotonePhone />
              <p>+2348134283833, +2347063940683, +2348164475628, +2348069692384.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
