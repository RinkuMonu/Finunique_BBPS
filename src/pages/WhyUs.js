import React from "react";
import "./styles/whyUs.css"
const WhyUs = () => {
  return (
    <div>
      <section className="page-title border-0">
        <img
          src="/images/whyBG.svg"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>

      <section className="pb0 bbps">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="shape-img-bg">
                <img className="mask-img1" src="/images/WHY.svg" alt="WhyUs vector" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10">
              <div className="theme-title mb-4">
                <h2>Explore Unlimited Business Opportunities</h2>
                <p>
                  ABDKS Solutions Private Limited is easy to operate and it
                  also makes your work easier and faster. We will always have
                  wide variety of options as per your needs. You are always
                  privileged to choose how to go forward. After all, You are
                  Important to us.
                </p>
                <p>
                  We at ABDKS Solutions Private Limited Providing Bharat Bill
                  Payment System API with 24*7 Auto Billing.
                </p>
                <h2>Supportive Team</h2>
                <p>
                  Our customer service is best in className and committed to serve
                  you 24x7 for your queries and questions. We're just one call
                  away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
