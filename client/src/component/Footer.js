import React from "react";
import { FaInstagram, FaFacebookF, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv1">
        <FaInstagram className="footerIcon" />
        <FaFacebookF className="footerIcon" />
        <FaSnapchat className="footerIcon" />
      </div>
      <div>
        <p> &copy; Igunnuoda Olorunleke</p>
      </div>
    </div>
  );
};

export default Footer;
