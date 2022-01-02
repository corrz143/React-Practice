import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p> &copy; 2021 jimmyspizza.com</p>
    </div>
  );
};

export default Footer;
