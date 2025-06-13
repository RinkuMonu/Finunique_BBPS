import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FAQGasBillPayment = () => {
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
      title: "Hassle-Free Piped and LPG Gas Bill Payments",
      body: (
        <>
          <p>
            Managing your household gas connection is now easier than ever with
            <strong> ABDKS Solutions Private Ltd.</strong> Whether it’s a piped gas bill or a LPG gas booking, our
            platform offers a secure, fast, and convenient way to make your
            payments online — anytime, from anywhere.
          </p>
        </>
      ),
    },
    {
      title: "Supported Gas Providers",
      body: (
        <>
          <p>
            ABDKS supports bill payments and bookings for major gas service
            providers, including:
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Indraprastha Gas Limited (IGL)</li>
                <li>Mahanagar Gas Limited (MGL)</li>
                <li>Gujarat Gas</li>
                <li>Adani Total Gas</li>
                <li>GAIL Gas</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>HP Gas</li>
                <li>Bharat Gas</li>
                <li>Indian Oil (Indane)</li>
                <li>Tripura Natural Gas Company</li>
                <li>Assam Gas Company</li>
              </ul>
            </div>
          </div>
          <p>and other regional piped gas boards</p>
        </>
      ),
    },
    {
      title: "How to Pay Gas Bills Online Using ABDKS",
      body: (
        <>
          <ol>
            <li>Visit the Bill Payment section on the ABDKS website or app</li>
            <li>Select Gas as the category</li>
            <li>Choose your service provider from the dropdown</li>
            <li>Enter your Consumer Number / Customer ID</li>
            <li>View bill details fetched automatically</li>
            <li>Confirm the amount and pay via UPI, card, wallet, or net banking</li>
            <li>Receive instant confirmation and digital receipt</li>
          </ol>
        </>
      ),
    },
    {
      title: "Key Features & Benefits",
      body: (
        <>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <strong>Instant Confirmation</strong> – Payment processed in
                  seconds
                </li>
                <li>
                  <strong>Available 24/7</strong> – Make payments anytime, even
                  on holidays
                </li>
                <li>
                  <strong>Supports LPG & Piped Gas Bills</strong> – One platform
                  for all types of connections
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <strong>Multiple Payment Modes</strong> – UPI, debit/credit
                  card, wallet, and internet banking
                </li>
                <li>
                  <strong>Safe and Secure</strong> – Encrypted transactions with
                  RBI-authorized gateways
                </li>
                <li>
                  <strong>User-Friendly Design</strong> – Optimized for mobile
                  and desktop users alike
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Benefits for Retailers & Local Agents",
      body: (
        <>
          <p>
            If you run a digital service center, shop, or kiosk, offer gas bill
            payment services through ABDKS and:
          </p>
          <ul>
            <li>Increase walk-in customers</li>
            <li>Earn commission on every successful payment</li>
            <li>Provide value-added services in your area</li>
            <li>Access detailed reports and dashboards</li>
            <li>Get real-time support from the ABDKS team</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Which gas companies are supported for bill payment?
              </Accordion.Header>
              <Accordion.Body>
                ABDKS supports both piped and LPG gas providers such as IGL,
                MGL, Adani Gas, Bharat Gas, Indane, and more.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How soon is the payment confirmed?
              </Accordion.Header>
              <Accordion.Body>
                Payments are confirmed instantly, and digital receipts are
                generated in real time.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I use ABDKS to pay someone else's gas bill?
              </Accordion.Header>
              <Accordion.Body>
                Yes, simply enter the correct consumer number and proceed with
                the payment.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Are there any additional charges?
              </Accordion.Header>
              <Accordion.Body>
                No extra transaction fees are charged on gas bill payments made
                via ABDKS.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      ),
    },
    {
      title: "Pay Your Gas Bill in Minutes with ABDKS",
      body: (
        <>
          <p>
            Stay safe, save time, and never miss a due date again. With ABDKS,
            paying gas bills is quick, convenient, and secure.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button variant="primary" size="lg">
              Pay Your Gas Bill Now
            </Button>
            <Button variant="outline-primary" size="lg">
              Join as a Retailer
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

export default FAQGasBillPayment;
