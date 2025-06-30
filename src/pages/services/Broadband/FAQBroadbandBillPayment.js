import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQBroadbandBillPayment = () => {
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
      title: "Pay Your Broadband Bill Online with Ease",
      body: (
        <>
          <p>
            Stay connected without interruption. ABDKS Solutions Private Ltd. offers a secure and seamless platform to pay your broadband bills online — anytime, anywhere. Whether you're managing your home Wi-Fi or offering bill payment services at a retail shop, ABDKS ensures smooth transactions with instant confirmations.
          </p>
          <p><strong>Broadband bill payment</strong><br />
            Fast, safe and convenient internet bill payment with ABDKS<br />
            Easily pay your broadband bill online<br />
            Stay connected without hindrance. ABDKS Solutions offers a safe and spontaneous platform to pay your broadband bills online - anytime, anywhere. Whether you are managing your home Wi-Fi or offering bill payment services at a retail shop, ABDKS ensures smooth transactions with immediate confirmation.
          </p>
        </>
      ),
    },
    {
      title: "Supported Broadband Service Providers",
      body: (
        <>
          <p>Our platform supports broadband bill payments for leading providers such as:</p>
          <ul>
            <li>Airtel Broadband</li>
            <li>ACT Fibernet</li>
            <li>BSNL Broadband</li>
            <li>JioFiber</li>
            <li>Hathway</li>
            <li>Tikona</li>
            <li>YOU Broadband</li>
            <li>MTNL</li>
            <li>Excitel</li>
            <li>RailWire</li>
          </ul>
          <p>Coverage may vary based on region and provider availability.</p>
        </>
      ),
    },
    {
      title: "How to Pay a Broadband Bill with ABDKS",
      body: (
        <>
          <ol>
            <li>Go to the bill payment section on ABDKS website or mobile app.</li>
            <li>Choose broadband as service category.</li>
            <li>Choose your operator from the list.</li>
            <li>Enter your account number/user ID.</li>
            <li>The system automatically receives your current bill details.</li>
            <li>Confirm the amount and complete the payment using UPI, Debit/Credit Card, Wallet or Internet banking.</li>
            <li>Get immediate payment confirmation and digital receipt.</li>
          </ol>
        </>
      ),
    },
    {
      title: "Key Benefits",
      body: (
        <>
          <ul>
            <li><strong>24x7 Bill Payment</strong> - Recharge or Pay your Internet bill anytime.</li>
            <li><strong>Real-Time Updates</strong> - Get updates immediately after real-time confirmation.</li>
            <li><strong>Many Payment Methods</strong> - UPI, card, wallet and net banking supported.</li>
            <li><strong>All Major ISP Supported</strong> - Manage all broadband bills at one place.</li>
            <li><strong>Safe and Encrypted Transactions</strong> - Complete compliance with banking security criteria.</li>
            <li><strong>Customized for Mobile</strong> - Android works easily on iOS and desktop devices.</li>
          </ul>
        </>
      ),
    },
    {
      title: "For Retailers and Agents",
      body: (
        <>
          <p>Add broadband bill payment services to your current setup:</p>
          <ul>
            <li>Attract digital customers in your area</li>
            <li>Offer bill payment for homes, offices and hostels</li>
            <li>No technical skill is necessary</li>
            <li>Earn commission on every transaction</li>
            <li>Real-time support from our Jaipur-based team</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How quickly is the broadband bill paid?</Accordion.Header>
            <Accordion.Body>Most payments are completed in real-time with instant status confirmation.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Which broadband providers are supported?</Accordion.Header>
            <Accordion.Body>ABDKS supports Airtel, BSNL, JioFiber, ACT, Hathway, Tikona, and more.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I pay broadband bills for others?</Accordion.Header>
            <Accordion.Body>Yes, you can pay bills for any broadband account using valid details.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there extra charges?</Accordion.Header>
            <Accordion.Body>No additional transaction fees are charged for bill payments on ABDKS.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Never Miss a Broadband Due Date Again",
      body: (
        <>
          <p>Whether you're a user or a digital service provider, ABDKS helps you stay connected with fast, secure broadband bill payments — all in one place.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">Pay Now</Link>
            <Link to="/createaccount" className="btn btn-outline-secondary cta-secondary" sizeLink>Join as a Partner</Link>
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

export default FAQBroadbandBillPayment;
