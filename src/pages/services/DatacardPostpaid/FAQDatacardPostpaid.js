import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQDatacardPostpaid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = [
    {
      title: "Why Choose ABDKS for Datacard Postpaid Recharge?",
      body: (
        <>
          <p>
            With ABDKS Solutions Pvt. Ltd., you can recharge your Datacard postpaid plans with speed, reliability, and ease. Our platform supports secure and real-time bill payments.
          </p>
          <p>
            Enjoy flexible payment options, instant bill fetch, and confirmation – all from the comfort of your device.
          </p>
        </>
      ),
    },
    {
      title: "Supported Datacard Postpaid Operators",
      body: (
        <>
          <p>You can pay Datacard postpaid bills for leading service providers such as:</p>
          <ul>
            <li>Airtel Datacard</li>
            <li>JioFi (Jio Datacard)</li>
            <li>Vi (Vodafone Idea Dongle)</li>
            <li>BSNL Datacard</li>
          </ul>
          <p><em>Operator support may vary depending on region and account type.</em></p>
        </>
      ),
    },
    {
      title: "Steps to Pay Datacard Postpaid Bills",
      body: (
        <ol>
          <li>Select the “Datacard Postpaid” category on the ABDKS platform.</li>
          <li>Choose your operator from the list.</li>
          <li>Enter your registered Datacard number or mobile number.</li>
          <li>Review the bill details, if auto-fetched.</li>
          <li>Proceed with payment using UPI, card, wallet, or net banking.</li>
          <li>Receive instant confirmation upon successful transaction.</li>
        </ol>
      ),
    },
    {
      title: "Features of Our Platform",
      body: (
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li><strong>Fast Payments</strong> – Complete recharge in under a minute.</li>
              <li><strong>Available 24/7</strong> – Recharge anytime, even at midnight.</li>
              <li><strong>Safe & Secure</strong> – Encrypted transactions via trusted gateways.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li><strong>Real-time Bill Fetch</strong> – View exact dues instantly.</li>
              <li><strong>Retailer Panel</strong> – Offer recharges from your local store.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What number do I need to enter for datacard postpaid recharge?
            </Accordion.Header>
            <Accordion.Body>
              Usually, the mobile number linked with your datacard or the unique ID provided by the operator. Refer to your bill or contact customer care for clarification.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I pay for someone else’s datacard?
            </Accordion.Header>
            <Accordion.Body>
              Yes, as long as you have their correct operator and datacard/account number.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Are receipts or confirmations provided?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you will receive an on-screen confirmation along with an SMS or email receipt (if registered).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Is this service available in all locations?
            </Accordion.Header>
            <Accordion.Body>
              Yes, ABDKS provides online datacard postpaid recharge services across India.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Start Recharging Now",
      body: (
        <>
          <p>Don't let your datacard run out of balance. Recharge it easily with ABDKS and stay connected.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main">
              Recharge Now
            </Link>
            <Link to="/createaccount" className="btn btn-outline-secondary cta-secondary">
              Become a Partner
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-4">
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div>
          {content.map((item, index) => (
            <Card key={index} className="mb-4">
              <Card.Body>
                <Card.Title className="h4 mb-3 text-primary">{item.title}</Card.Title>
                {item.body}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQDatacardPostpaid;
