import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FAQWaterBillPayment = () => {
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
      title: "About Water Bill Payment",
      body: (
        <>
          <p>
            Abdks Solutions Private Ltd. provides a safe and efficient platform to
            pay your water bills online. Whether it is for a residential or
            commercial connection, our digital bill payment solution helps you
            to avoid all from long queues, missed deadline and late penalty.
          </p>
        </>
      ),
    },
    {
      title: "Supported Water Boards",
      body: (
        <ul>
          <li>Jal Board (Delhi)</li>
          <li>Rajasthan PHED – Jaipur & other districts</li>
          <li>BWSSB – Bengaluru Water Supply</li>
          <li>Chennai Metro Water</li>
          <li>Pune Municipal Corporation</li>
          <li>Hyderabad Metropolitan Water Supply</li>
          <li>And many more state & municipal water departments</li>
        </ul>
      ),
    },
    {
      title: "How to Pay Your Water Bill with ABDKS",
      body: (
        <ol>
          <li>Visit the Bill Payment section on the ABDKS app or website</li>
          <li>Select Water Bill as your service category</li>
          <li>Choose your city or water board</li>
          <li>Enter your consumer number / account ID</li>
          <li>View the current bill amount (auto-fetched from provider)</li>
          <li>Proceed to payment using UPI, credit/debit card, wallet, or net banking</li>
          <li>Get instant confirmation and downloadable digital receipt</li>
        </ol>
      ),
    },
    {
      title: "Key Benefits",
      body: (
        <ul>
          <li>Instant Payment Updates – Bill status updated in real-time</li>
          <li>Available 24x7 – Pay your bill anytime, even on holidays</li>
          <li>Supports All Major Cities – Single platform for national utility payments</li>
          <li>Multiple Payment Methods – Choose from UPI, cards, net banking, wallet</li>
          <li>Mobile-Friendly Experience – Works smoothly on phones and tablets</li>
          <li>Safe & Secure – Encrypted and RBI-authorized payment gateways</li>
        </ul>
      ),
    },
    {
      title: "Retailers: Add Water Bill Services to Your Shop",
      body: (
        <ul>
          <li>Offer utility services to more customers</li>
          <li>Earn commission on each water bill transaction</li>
          <li>Improve daily customer footfall and repeat visits</li>
          <li>Get access to full transaction reports and instant support</li>
          <li>No setup cost — just register and start earning</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Which water boards are supported on ABDKS?</Accordion.Header>
            <Accordion.Body>
              ABDKS supports Jal Boards and PHEDs in major cities and states including Delhi, Rajasthan, Karnataka, Telangana, Tamil Nadu, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How quickly is the payment confirmed?</Accordion.Header>
            <Accordion.Body>
              Payment is processed and confirmed instantly. The bill record is updated in real time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I pay someone else’s water bill?</Accordion.Header>
            <Accordion.Body>
              Yes, just enter the correct consumer number for the respective provider.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is there a charge for water bill payment?</Accordion.Header>
            <Accordion.Body>
              There is no additional service fee charged for standard water bill payments.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Pay Water Bills Effortlessly with ABDKS",
      body: (
        <>
          <p>
            Avoid late fees, save time, and pay securely with ABDKS — your trusted digital utility payment partner.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">Pay Now</Link>
            <Link  to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">Join as a Retail Partner</Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-4">
      {isMobile ? (
        <Accordion className="mb-4">
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

export default FAQWaterBillPayment;
