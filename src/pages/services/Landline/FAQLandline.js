import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FAQLandline = () => {
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
      title: "Seamless Landline Bill Payments",
      body: (
        <>
          <p>
            Stay connected with uninterrupted landline service. With ABDKS Solutions Private Ltd., you can pay your landline phone bills online — anytime, from anywhere.
          </p>
          <p>
            Our platform supports major telecom operators across India and offers real-time bill fetching, multiple payment methods, and instant payment confirmations.
          </p>
          <p>
            Whether you're managing personal bills or offering services as a retailer, ABDKS ensures secure and hassle-free bill payments.
          </p>
        </>
      ),
    },
    {
      title: "Supported Landline Operators",
      body: (
        <>
          <p>We support landline bill payments for the following operators:</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>BSNL Landline</li>
                <li>MTNL (Delhi & Mumbai)</li>
                <li>Airtel Landline</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Tata Tele Services</li>
                <li>Reliance Communications (if available)</li>
                <li><em>Coverage may vary by region.</em></li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "How to Pay Landline Bills Online",
      body: (
        <>
          <ol>
            <li>Go to the Bill Payment section on the ABDKS website or app.</li>
            <li>Select "Landline" as the bill category.</li>
            <li>Choose your operator and region.</li>
            <li>Enter your landline number or account ID.</li>
            <li>Review the fetched bill details.</li>
            <li>Pay via UPI, debit/credit card, wallet, or net banking.</li>
            <li>Receive an instant confirmation and digital receipt.</li>
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
                <li><strong>24x7 Access</strong> – Pay bills anytime, even on weekends and holidays.</li>
                <li><strong>Instant Confirmation</strong> – Real-time payment status with auto-generated receipts.</li>
                <li><strong>Secure Payments</strong> – All transactions are encrypted and processed via RBI-authorized gateways.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><strong>All Major Operators</strong> – Supports personal and business landline numbers.</li>
                <li><strong>Mobile-Friendly Design</strong> – Seamless experience on mobile, tablet, and desktop.</li>
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
          <p>Offer landline bill payment services at your retail outlet and boost your business:</p>
          <ul>
            <li>Increase walk-in customers</li>
            <li>Earn commissions on every bill paid</li>
            <li>Simple onboarding with no technical expertise required</li>
            <li>Real-time transaction reports and dedicated support via ABDKS dashboard</li>
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
              Which operators can I pay landline bills for?
            </Accordion.Header>
            <Accordion.Body>
              ABDKS supports major operators like BSNL, MTNL, Airtel, Tata, and more (subject to region).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Are there any extra charges for paying landline bills?
            </Accordion.Header>
            <Accordion.Body>
              No, there are no additional charges for using ABDKS for bill payments.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How soon is the bill payment confirmed?
            </Accordion.Header>
            <Accordion.Body>
              Payments are typically confirmed within a few minutes, with real-time status shown and confirmation sent via SMS/email.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I pay someone else's landline bill?
            </Accordion.Header>
            <Accordion.Body>
              Yes, simply enter the respective landline/account number and proceed with payment.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Never Miss a Landline Bill Again",
      body: (
        <>
          <p>
            Avoid late fees and disconnections. Pay your landline bills quickly and easily with ABDKS — anytime, anywhere.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button variant="primary" size="lg">
              Pay Your Landline Bill Now
            </Button>
            <Button variant="outline-primary" size="lg">
              Become a Service Partner
            </Button>
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

export default FAQLandline;
