import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQCableBillPayment = () => {
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
      title: "About Cable TV Bill Payment",
      body: (
        <>
          <p>
            With Finunique Small Private Limited., you can now pay your cable TV bills
            online in just a few simple steps. Whether you're paying for your
            home connection or helping a customer as a digital service retailer,
            Finunique ensures smooth, secure, and real-time bill payments.
          </p>
          <p>
            Avoid missed deadlines, late penalties, and long queues — make your
            cable bill payments digitally with ease.
          </p>
        </>
      ),
    },
    {
      title: "Supported Cable Operators",
      body: (
        <ul>
          <li>GTPL</li>
          <li>DEN Networks</li>
          <li>Hathway</li>
          <li>Digi Cable</li>
          <li>Siti Cable</li>
          <li>InCable</li>
          <li>Asianet</li>
          <li>Fastway</li>
          <li>NXT Digital</li>
          <li>And more depending on your region</li>
        </ul>
      ),
    },
    {
      title: "How to Pay Cable Bills via Finunique",
      body: (
        <ol>
          <li>
            Go to the Bill Payment section on the Finunique website or mobile app
          </li>
          <li>Select Cable TV or Cable Bill from the service category</li>
          <li>Choose your Cable Operator from the dropdown list</li>
          <li>Enter your Subscriber ID / Customer Number</li>
          <li>The system auto-fetches the current bill amount</li>
          <li>
            Complete the payment using UPI, debit/credit card, wallet, or
            internet banking
          </li>
          <li>Get instant confirmation and a digital receipt</li>
        </ol>
      ),
    },
    {
      title: "Why Use Finunique for Cable Bill Payment?",
      body: (
        <ul>
          <li>24x7 Availability – Pay anytime, anywhere</li>
          <li>
            All Major Operators Supported – Serve urban and rural connections
          </li>
          <li>Instant Confirmation – Real-time payment status updates</li>
          <li>
            Secure Payments – Encrypted & RBI-compliant payment infrastructure
          </li>
          <li>
            Mobile-Friendly Platform – Optimized for quick use on mobile devices
          </li>
          <li>Multi-Payment Options – UPI, cards, wallet, and net banking</li>
        </ul>
      ),
    },
    {
      title: "Benefits for Retailers & CSC Operators",
      body: (
        <ul>
          <li>Provide a valuable service in your local area</li>
          <li>Earn commissions on each successful cable bill payment</li>
          <li>Attract more footfall to your digital service point</li>
          <li>Get a dedicated dashboard with full transaction logs</li>
          <li>Access 24x7 support from the Finunique backend team</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can I pay for any cable operator?
            </Accordion.Header>
            <Accordion.Body>
              Yes, Finunique supports a wide range of regional and national cable TV
              providers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Is the payment confirmed instantly?
            </Accordion.Header>
            <Accordion.Body>
              Yes. Once paid, the status is updated instantly and a digital
              receipt is issued.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Are there extra fees for paying a cable bill through Finunique?
            </Accordion.Header>
            <Accordion.Body>
              No additional charges are applied for standard cable bill
              payments.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I pay for someone else’s cable connection?
            </Accordion.Header>
            <Accordion.Body>
              Yes, just enter their correct Subscriber ID or customer number.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Pay Your Cable TV Bill Without Any Delay",
      body: (
        <>
          <p>
            Choose Finunique to simplify your entertainment bill payments — quickly,
            securely, and without hassle.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/billpayment" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">
              Pay Cable Bill Now
            </Link>
            <Link to="/createaccount?role=Retailer" className="btn btn-outline-secondary fw-semibold px-4">
              Become a Retail Partner
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="faq-accordion-item">
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div className="timeline">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glassy-bg p-4 shadow-sm rounded">
                <h4 className="fw-bold mb-3 text-gradient">{item.title}</h4>
                {item.body}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <style jsx>{`
        .timeline {
          position: relative;
          margin-left: 20px;
        }
        .timeline-card {
          position: relative;
          margin-bottom: 50px;
        }
        .timeline-marker {
          position: absolute;
          left: -27px;
          top: 20px;
          width: 12px;
          height: 12px;
          background: #fcbf49;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 0 4px rgba(252, 191, 73, 0.3);
        }
        .glassy-bg {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default FAQCableBillPayment;
