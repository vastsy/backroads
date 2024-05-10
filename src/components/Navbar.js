import React from "react";
import logo from "../images/logo.svg";
import { navBarLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <PageLinks elemClass="nav-link" />
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} link={link} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;