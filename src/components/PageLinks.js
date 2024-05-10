import React from "react";
import { navBarLinks } from "../data";
import PageLink from "./PageLink";

export default function PageLinks({ elemClass }) {
  {
    return navBarLinks.map((link) => {
      return <PageLink key={link.id} elemClass={elemClass} link={link} />;
    });
  }
}
