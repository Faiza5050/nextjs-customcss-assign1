import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
  return (
    <div className="main-contact">
      <h1>Travel.</h1>
      <h2>Book your trip in minute, get full <br /> Control for much longer.</h2>

      <div className="contact">
        <div className="icon1">
          <a href="#">
            <FaFacebook />
          </a>        
        </div>

        <div className="icon1">
          <a href="#">
            <FaTwitter />
          </a>        
        </div>

        <div className="icon1">
          <a href="#">
            <FaInstagram />
          </a>
        </div>

        <div className="icon1">
          <a href="#">
            <IoLogoYoutube />
          </a>
        </div>
      </div>

      <div className="main-company">
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Careers
              </a>
            </li>
            <li>
              <a href="#">
                Mobile
              </a>
            </li>
          </ul>
        </div>
            
        <div className="cont">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">
                Help/FAQ
              </a>
            </li>
            <li>
              <a href="#">
                Press
              </a>
            </li>
            <li>
              <a href="#">
                Affilates
              </a>
            </li>
          </ul>
        </div>

        <div className="more">
          <h3>More</h3>      
          <ul>
            <li>
              <a href="#">
                Airlinefees
              </a>
            </li>
            <li>
              <a href="#">
                Airline
              </a>
            </li>
            <li>
              <a href="#">
                Low fare tips
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form>
        <div className="mail">
          <input
            type="email"
            placeholder="Your e-mail"
            className="input"
          />
          <button
            type="submit"
            className="bttn">
            Subscribe
          </button>
        </div>      
      </form>
        
    </div>

  )
}

export default Contact;
