import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

function ServiceItem({ imgSrc, title, description, features }) {
  return (
    <div className="col-lg-4 col-md-6 mt-6 ">
      <div className="service-item style-2 text-center">
        <div className="service-icon">
          <img className="img-fluid" src={imgSrc} alt={title} />
        </div>
        <div className="service-desc">
          <div className="service-title">
            <h4>{title}</h4>
          </div>
          <p>{description}</p>
          <div className="d-flex flex-column mt-2">
            <ul className="list-unstyled">
              {features.map((fet, index) => (
                <li key={index} className="mb-1 d-flex align-items-start">
                  <FiCheckCircle className="me-2 text-primary mt-1" />
                  <span>{fet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
