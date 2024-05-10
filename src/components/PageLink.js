import React from "react";

export default function PageLink({ elemClass, link }) {
  return (
    <li key={link.id}>
      <a href={link.href} className={elemClass}>
        {link.text}
      </a>
    </li>
  );
}
