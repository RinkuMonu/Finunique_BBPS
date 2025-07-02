import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQPostpaid = () => {
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
      title: "Why Choose ABDKS for Postpaid Bill Payment?",
      body: (
        <>
          <p>
            Pay your postpaid mobile bills conveniently through ABDKS Solutions Private Ltd.
            We offer fast, secure, and user-friendly postpaid recharge services for all major operators in India.
          </p>
          <p>
            Enjoy real-time bill fetching, instant confirmation, and flexible payment options — all on one platform.
          </p>
        </>
      ),
    },
    {
      title: "Supported Mobile Operators",
      body: (
        <>
          <p>You can recharge your postpaid numbers from all leading telecom operators including:</p>
          <ul>
            <li>Airtel Postpaid</li>
            <li>Jio Postpaid</li>
            <li>Vi (Vodafone Idea) Postpaid</li>
            <li>BSNL Postpaid</li>
          </ul>
          <p><em>Operator availability may vary by region.</em></p>
        </>
      ),
    },
    {
      title: "Steps to Recharge Postpaid Number",
      body: (
        <ol>
          <li>Go to the Postpaid Recharge section on the ABDKS platform.</li>
          <li>Select your mobile operator.</li>
          <li>Enter your mobile number.</li>
          <li>Review the fetched bill details (if supported).</li>
          <li>Choose a payment method — UPI, credit/debit card, wallet, or net banking.</li>
          <li>Complete payment and get instant confirmation.</li>
        </ol>
      ),
    },
    {
      title: "Top Features",
      body: (
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li><strong>Instant Bill Fetching</strong> – View real-time dues before paying.</li>
              <li><strong>24/7 Availability</strong> – Recharge anytime, from anywhere.</li>
              <li><strong>Secure Transactions</strong> – Protected by RBI-authorized payment gateways.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li><strong>Multiple Operators</strong> – Manage multiple connections easily.</li>
              <li><strong>Mobile-Optimized</strong> – Smooth experience on mobile and desktop.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Retailer Benefits",
      body: (
        <>
          <p>Want to offer mobile postpaid bill payment services?</p>
          <ul>
            <li>Increase footfall at your retail outlet</li>
            <li>Earn a commission on every bill paid</li>
            <li>Access to transaction reports and a user-friendly dashboard</li>
            <li>Onboard easily without any technical setup</li>
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
              Which operators can I pay postpaid bills for?
            </Accordion.Header>
            <Accordion.Body>
              ABDKS supports Airtel, Jio, Vodafone Idea, BSNL, and other major operators.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Are there any extra charges for postpaid bill payment?
            </Accordion.Header>
            <Accordion.Body>
              No. We do not charge extra fees for processing postpaid bill payments.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I pay someone else's mobile bill?
            </Accordion.Header>
            <Accordion.Body>
              Yes, just enter the correct mobile number and operator, and complete the payment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How will I get payment confirmation?
            </Accordion.Header>
            <Accordion.Body>
              You will receive an instant confirmation via SMS and email, along with a digital receipt.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Recharge Your Mobile Today",
      body: (
        <>
          <p>
            Never miss a due date again! Pay your mobile postpaid bills securely and instantly with ABDKS.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">
              Recharge Now
            </Link>
            <Link to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">
              Become a Service Partner
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
                <Card.Title className="h4 mb-3 text-primary">
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

export default FAQPostpaid;
