import React from "react";
import Title from "./Title";
import { serviceItems } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {serviceItems.map((item) => {
          return <Service key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Services;
