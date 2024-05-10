import React from "react";

export default function Service({ item }) {
  return (
    <article key={item.id} className="service">
      <span className="service-icon">
        <i className={item.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{item.title}</h4>
        <p className="service-text">{item.desc}</p>
      </div>
    </article>
  );
}
