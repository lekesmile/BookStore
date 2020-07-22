import React from "react";
import { FaInstagram, FaFacebookF, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footerDiv1">
        <FaInstagram className="footerIcon" />
        <FaFacebookF className="footerIcon" />
        <FaSnapchat className="footerIcon" />
      </div>
      <div>
        <p> &copy; Olorunleke | {year}</p>
      </div>
    </div>
  );
};

export default Footer;
