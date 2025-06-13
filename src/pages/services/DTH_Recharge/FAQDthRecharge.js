import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FAQDthRecharge = () => {
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
      title: "Uninterrupted entertainment begins here",
      body: (
        <>
          <p>
            Enjoy non-stop TV entertainment by recharging your DTH connection in seconds. <br />
            Abdks Solutions Private Ltd. provides reliable, a safe and easy-to-use DTH recharge BBPS platform by individual users and retailers across India. <br />
            Recharge any major DTH operator immediately and keep watching your favorite channels without delay.
          </p>
        </>
      ),
    },
    {
      title: "Supported DTH Operator",
      body: (
        <>
          <p>We support immediate recharge for all major DTH service providers in India:</p>
          <ul>
            <li>Airtel Digital TV</li>
            <li>Tata Play (Tata Sky)</li>
            <li>Dish tv</li>
            <li>D2H (Videocon D2H)</li>
            <li>Sun direct</li>
          </ul>
          <p>
            Whether you are a customer or a digital retailer, our DTH recharge BBPS system ensures easy access to all platforms.
          </p>
        </>
      ),
    },
    {
      title: "How to recharge a DTH with online ABDKS",
      body: (
        <>
          <ol>
            <li>Recharge and Bill Pay Section on ABDKS platform</li>
            <li>Select DTH as your service category</li>
            <li>Choose your DTH operator (eg, Airtel DTH, Tata Play)</li>
            <li>Enter your 10-conductive customer ID or registered number</li>
            <li>Select or enter your desired recharge amount</li>
            <li>Pay through UPI, Credit/Debit Card, Wallet or Net Banking</li>
            <li>Get confirmation of immediate recharge and continue watching TV uninterruptedly</li>
          </ol>
        </>
      ),
    },
    {
      title: "Why Choose ABDKS for DTH Recharge?",
      body: (
        <ul>
          <li>Zero Transaction Fee – No extra charges on any DTH recharge</li>
          <li>Multiple Payment Modes – UPI, credit card, debit card, wallet, net banking</li>
          <li>Fast & Secure Processing – Recharges are completed in real-time</li>
          <li>All Major Operators Supported – One platform for all DTH services</li>
          <li>User-Friendly Dashboard – Mobile-optimized and step-by-step interface</li>
          <li>Seasonal Cashback & Offers – Enjoy deals on select plans and top-ups</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How long does a DTH recharge take?</Accordion.Header>
            <Accordion.Body>
              Recharges are processed within seconds and typically reflect immediately in your DTH account.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Which DTH providers are supported?</Accordion.Header>
            <Accordion.Body>
              ABDKS supports Airtel DTH, Tata Play, Dish TV, Videocon d2h, and Sun Direct.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I check my DTH balance?</Accordion.Header>
            <Accordion.Body>
              You can check your balance using your DTH provider's app, website, or customer care number.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What payment options are available?</Accordion.Header>
            <Accordion.Body>
              You can pay using UPI, debit/credit card, net banking, wallet, or ZIP pay later options.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Start Earning with DTH Recharge Services",
      body: (
        <>
          <p>
            If you're a retailer, cyber café operator, or small business owner, offer DTH recharge BBPS services through ABDKS and earn commission on every transaction.
          </p>
          <p>
            Our platform is fast, secure, and ready to power your digital service business.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button variant="primary" size="lg">Become a Partner</Button>
            <Button variant="outline-primary" size="lg">Recharge Now</Button>
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
                <Card.Title className="h4 mb-3 text-warning-emphasis">{item.title}</Card.Title>
                {item.body}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQDthRecharge;
