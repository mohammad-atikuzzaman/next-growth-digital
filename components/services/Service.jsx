import Image from "next/image";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import "./styles.css"

const Service = ({ title, detail, icon }) => {
  return (
    <div className="service-card">
      <section className="service-header">
        <Image
          src={icon}
          width={56}
          height={56}
          alt={title}
          className="service-icon"
        />
        <h2 className="service-title">{title}</h2>
      </section>
      <p className="service-detail">
       {detail}
      </p>
      <div className="service-footer">
        <FiArrowDownRight className="service-icon-arrow" />
      </div>
    </div>
  );
};

export default Service;
