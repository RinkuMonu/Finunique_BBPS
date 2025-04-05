import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return <>
  
    <div style={{marginTop:"-5px"}}>
      <section className="page-title">
        <img src="/assets/about us -01.svg" alt="about" />
      </section>
      <div className="page-content">
        <section className="pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="shape-img-bg">
                  <img className="mask-img1" src="/assets/WHO WE ARE.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10 text-secondary">
                <div className="theme-title mb-4">
                  <h2>WHO WE ARE</h2>
                  <p>
                    We are happy to introduce you about Abdks Private
                    Limited, Abdks Private Limited is service provider
                    company which is providing Recharge and BillPayment - BBPS
                    services to our valuable retailers/merchants.
                  </p>
                  <p>
                    Abdks Private Limited has taken a step forward in
                    the field of Financial Inclusion through a partnership with
                    Multiple Banks &amp; Other Parties.
                  </p>
                  <h2>OUR VISION</h2>
                  <p>
                    Company’s main goal is to fulfill the needs and desire of our
                    customer and satisfy them. We are providing numerous services
                    to our customers for their betterment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-secondary">
            <div className="row">
              <div className="col-lg-12 col-md-12 text-left">
                <div className="service-item style-2">
                  <div className="service-desc abt">
                    <div className="service-title">
                      <h4>WHAT WE DO</h4>
                    </div>
                    <p>
                      Abdks Private Limited is easy to operate but also
                      it makes your easier and faster. We are providing the best
                      services to our customers. Whether it’s IT Services &amp;
                      Banking Services.
                    </p>
                    <div className="service-title">
                      <h4>24X7 SUPPORT</h4>
                    </div>
                    <p>
                      "Our customer service is best in class and commited to serve
                      you 24x7 for your queries and questions."
                    </p>
                    <div className="service-title">
                      <h4>100% QUALITY ASSURANCE</h4>
                    </div>
                    <p>
                      Quality is characterized through joint efforts with our
                      customers. While certain parts of value are steady, others
                      are customer particular.
                    </p>
                    <div className="service-title">
                      <h4>OUR PROMISE</h4>
                    </div>
                    <p>
                      We promise to deliberately join forces with each customer. we
                      are managed the chance to work with requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  </>;
};

export default AboutUs;
