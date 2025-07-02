import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQFastag = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = [
    {
      title: "Hassle-Free FASTag Recharge",
      body: (
        <>
          <p>
            With ABDKS Solutions Private Ltd., recharging your FASTag is quick,
            easy, and secure. Avoid toll booth delays and keep your FASTag active
            with our seamless online recharge service.
          </p>
          <p>
            We support major FASTag issuing banks and provide instant recharge
            confirmation with secure transactions across devices.
          </p>
        </>
      ),
    },
    {
      title: "Supported FASTag Issuers",
      body: (
        <>
          <p>Recharge your FASTag from these supported banks and issuers:</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>ICICI Bank FASTag</li>
                <li>HDFC Bank FASTag</li>
                <li>Axis Bank FASTag</li>
                <li>SBI FASTag</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Paytm FASTag</li>
                <li>IDFC First Bank FASTag</li>
                <li>Bank of Baroda FASTag</li>
                <li>And more...</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "How to Recharge FASTag Online",
      body: (
        <>
          <ol>
            <li>Go to the Recharge section on the ABDKS website or app.</li>
            <li>Select "FASTag" as the recharge category.</li>
            <li>Choose your issuing bank/operator.</li>
            <li>Enter your vehicle number linked to FASTag.</li>
            <li>View the recharge amount or enter a custom value.</li>
            <li>Proceed with UPI, debit/credit card, wallet, or net banking.</li>
            <li>Receive instant recharge confirmation and receipt.</li>
          </ol>
        </>
      ),
    },
    {
      title: "Key Features",
      body: (
        <>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li><strong>Instant Recharge</strong> – Recharge your FASTag in seconds.</li>
                <li><strong>Secure Payments</strong> – End-to-end encrypted transactions.</li>
                <li><strong>24/7 Access</strong> – Recharge anytime, from any device.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><strong>Multiple Operators</strong> – Supports all major banks and providers.</li>
                <li><strong>Responsive Design</strong> – Mobile-friendly and fast interface.</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "For Retailers and Service Points",
      body: (
        <>
          <p>Offer FASTag recharge services at your retail outlet and increase customer footfall:</p>
          <ul>
            <li>Provide value-added services for drivers and fleet owners</li>
            <li>Earn commission on every recharge</li>
            <li>Real-time transaction tracking and reporting</li>
            <li>Easy setup with the ABDKS retailer dashboard</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Which banks do you support for FASTag recharge?
            </Accordion.Header>
            <Accordion.Body>
              We support all major FASTag issuing banks like ICICI, SBI, HDFC, Axis, Paytm, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How much time does it take to reflect the recharge?
            </Accordion.Header>
            <Accordion.Body>
              Recharge is usually processed instantly, and your FASTag balance is updated within minutes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I recharge someone else's FASTag?
            </Accordion.Header>
            <Accordion.Body>
              Yes, simply enter the correct vehicle number or account ID linked to the FASTag and proceed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Is there any convenience fee for FASTag recharge?
            </Accordion.Header>
            <Accordion.Body>
              No, ABDKS does not charge any additional convenience fee for FASTag recharges.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Never Miss a Toll Again",
      body: (
        <>
          <p>
            Ensure smooth highway travel and avoid penalty charges with timely FASTag recharges through ABDKS.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">
              Recharge FASTag Now
            </Link>
            <Link to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">
              Become a Recharge Partner
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
                <Card.Title className="h4 mb-3 text-warning-emphasis">
                  {item.title}
                </Card.Title>
                {item.body}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQFastag;
