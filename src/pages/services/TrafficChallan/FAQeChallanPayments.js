import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FAQeChallanPayments = () => {
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
      title: "About eChallan Payment with ABDKS",
      body: (
        <>
          <p>
            ABDKS Solutions Private Ltd. offers a quick and secure solution to
            settle your traffic challans online. Whether you've received an
            e-challan for overspeeding, signal jumping, or other violations —
            our platform helps you pay your traffic fines instantly, from
            anywhere, without the need to visit a traffic office.
          </p>
          <p>
            Our goal is to make digital traffic fine payments simple,
            transparent, and hassle-free for every citizen and local retailer.
          </p>
        </>
      ),
    },
    {
      title: "What Can You Pay?",
      body: (
        <ul>
          <li>E-Challans issued by traffic police</li>
          <li>Speeding fines</li>
          <li>Red light violations</li>
          <li>No parking penalties</li>
          <li>Helmet/seatbelt violations</li>
          <li>Vehicle document-related fines</li>
          <li>Road tax-related challans (in supported regions)</li>
        </ul>
      ),
    },
    {
      title: "Supported States & Traffic Authorities",
      body: (
        <ul>
          <li>Rajasthan (Jaipur, Jodhpur, Udaipur, etc.)</li>
          <li>Delhi Traffic Police</li>
          <li>Maharashtra (Mumbai, Pune)</li>
          <li>Uttar Pradesh</li>
          <li>Telangana</li>
          <li>Karnataka</li>
          <li>Other states via Parivahan portal integration</li>
          <li>Coverage expands based on traffic department availability.</li>
        </ul>
      ),
    },
    {
      title: "How to Settle Traffic Challan with ABDKS",
      body: (
        <ol>
          <li>Visit the Challan Payment section on the ABDKS app or website</li>
          <li>Enter your vehicle number or challan number</li>
          <li>The system auto-fetches any pending fines</li>
          <li>Verify the fine details and amount</li>
          <li>
            Make payment using UPI, debit/credit card, wallet, or net banking
          </li>
          <li>Receive instant confirmation and digital receipt</li>
        </ol>
      ),
    },
    {
      title: "Why Use ABDKS for Challan Payment?",
      body: (
        <ul>
          <li>24x7 Access – Pay fines anytime, from mobile or desktop</li>
          <li>
            Secure Transactions – Encrypted payments through RBI-compliant
            gateways
          </li>
          <li>Real-Time Status – Get instant updates after payment</li>
          <li>
            Multiple Payment Methods – UPI, cards, wallet, and internet banking
            supported
          </li>
          <li>No Need to Visit Court or Office – Settle from your home or shop</li>
          <li>Supports Retailer Integration – Agents can offer services</li>
        </ul>
      ),
    },
    {
      title: "Benefits for Retailers & Digital Service Points",
      body: (
        <ul>
          <li>Offer traffic fine settlement services at your store or kiosk</li>
          <li>Help customers resolve challans easily</li>
          <li>Increase daily footfall and trust</li>
          <li>Earn small margins or service fees</li>
          <li>Access transactions via the ABDKS dashboard</li>
          <li>Get full training and backend support</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Is it safe to pay traffic fines through ABDKS?
            </Accordion.Header>
            <Accordion.Body>
              Yes. All payments are processed securely via official
              government-authorized channels.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I pay a challan for someone else?
            </Accordion.Header>
            <Accordion.Body>
              Yes, as long as you have their vehicle number or challan number.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Is my payment updated with the government?
            </Accordion.Header>
            <Accordion.Body>
              Yes, the payment is automatically updated on the official traffic
              police or Parivahan record.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there any extra charges?</Accordion.Header>
            <Accordion.Body>
              ABDKS does not charge additional service fees for standard challan
              payments.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Settle Traffic Fines Online – The Smart Way",
      body: (
        <>
          <p>
            Avoid delays, penalties, or legal issues. Choose ABDKS for
            hassle-free, secure, and verified traffic challan settlement —
            available 24x7 for individuals and retailers alike.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button variant="primary" size="lg">
              Pay Traffic Challan Now
            </Button>
            <Button variant="outline-primary" size="lg">
              Become a Digital Partner
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

export default FAQeChallanPayments;
