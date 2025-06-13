import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FAQCreditCardPayment = () => {
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
      title: "About Credit Card Bill Payment",
      body: (
        <>
          <p>
            A credit card gives you access to short-term credit for immediate payments. However, forgetting your bill date can result in interest charges, late fees, and even a lower credit score. That’s why timely bill payment is crucial.
          </p>
          <p>
            ABDKS Solutions Private Ltd. offers a fast, secure, and seamless way to pay your credit card bills online — helping you avoid penalties, improve credit health, and manage your finances more effectively.
          </p>
          <p>
            Our platform supports credit card bill payments for all major Indian banks, powered by BBPS (Bharat Bill Payment System) infrastructure for reliability and speed.
          </p>
        </>
      ),
    },
    {
      title: "Supported Credit Card Issuers",
      body: (
        <>
          <p>You can make credit card bill payments for a wide range of banks and institutions, including:</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>HDFC Bank</li>
                <li>SBI Card</li>
                <li>Axis Bank</li>
                <li>ICICI Bank</li>
                <li>Kotak Mahindra Bank</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>RBL Bank</li>
                <li>Yes Bank</li>
                <li>Standard Chartered Bank</li>
                <li>American Express</li>
                <li>Canara Bank</li>
                <li>And many other private and public banks</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "How to Pay Credit Card Bills on ABDKS",
      body: (
        <>
          <ol>
            <li>Visit the ABDKS website or open the mobile app</li>
            <li>Login using your mobile number and OTP</li>
            <li>Go to Recharge & Bill Pay, then select Credit Card Payment</li>
            <li>Choose your bank from the dropdown</li>
            <li>Enter your credit card number and bill amount</li>
            <li>Apply available coupon codes (if any)</li>
            <li>Select your preferred payment method (UPI, card, net banking, wallet)</li>
            <li>Click “Pay Now” and receive instant confirmation with a digital receipt</li>
          </ol>
        </>
      ),
    },
    {
      title: "Key Benefits of Paying Credit Card Bills via ABDKS",
      body: (
        <>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Instant Processing – Avoid late fees with real-time confirmation</li>
                <li>Encrypted Payments – 100% secure and RBI-authorized BBPS gateway</li>
                <li>24x7 Availability – Pay bills anytime, including weekends and holidays</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Multiple Payment Modes – UPI, net banking, debit/credit cards, and wallets</li>
                <li>Mobile-Friendly – Seamless experience on both Android and iOS</li>
                <li>No Extra Charges – Pay bills with zero convenience or processing fees</li>
                <li>Real-Time Receipts – Get detailed transaction history instantly</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Retailer & Agent Benefits",
      body: (
        <>
          <p>If you're a retailer, CSC operator, or local service provider, ABDKS helps you offer credit card bill payment services to your customers:</p>
          <ul>
            <li>Earn commission on every bill paid</li>
            <li>Attract more walk-ins by offering value-added services</li>
            <li>No technical setup required – start with just a smartphone</li>
            <li>Real-time tracking via your partner dashboard</li>
            <li>Support from our Jaipur-based team</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is it safe to pay my credit card bill on ABDKS?</Accordion.Header>
            <Accordion.Body>
              Yes. ABDKS uses encrypted, RBI-authorized systems to safely process your payment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I pay someone else's credit card bill?</Accordion.Header>
            <Accordion.Body>
              Yes. All you need is the correct credit card number and bill amount.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How fast is the payment processed?</Accordion.Header>
            <Accordion.Body>
              Most payments reflect within minutes. Some banks may take 2-3 business days for final settlement.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I only pay the minimum amount payable?</Accordion.Header>
            <Accordion.Body>
              Yes, but regularly doing so can affect your credit score. Full payment is always recommended.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What happens if I miss my bill due date?</Accordion.Header>
            <Accordion.Body>
              Missing your due date can lead to late fees, interest charges, and a negative impact on your credit score.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Start Paying Smart – Use ABDKS for Credit Card Bill Payments",
      body: (
        <>
          <p>
            Whether for personal use or retail business, ABDKS makes credit card bill payment secure, fast, and reliable — powered by BBPS and trusted across India.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button variant="primary" size="lg">
              Pay Now
            </Button>
            <Button variant="outline-primary" size="lg">
              Become a Partner
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

export default FAQCreditCardPayment;
