import React from "react";

export default function SocialLink({ link }) {
  return (
    <li key={link.id}>
      <a href={link.href} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={link.icon}></i>
      </a>
    </li>
  );
}
