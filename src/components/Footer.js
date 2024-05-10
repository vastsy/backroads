import React from "react";
import { navBarLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <PageLinks elemClass="footer-link" />
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} link={link} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{year}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
