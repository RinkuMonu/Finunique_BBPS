import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            Recharge your DTH instantly and keep enjoying your favorite shows. ABDKS Solutions offers a secure, easy-to-use BBPS DTH recharge platform for individuals and retailers. Recharge any major operator in seconds.
          </p>
        </>
      ),
    },
    {
      title: "Supported DTH Operators",
      body: (
        <>
          <p>Recharge instantly for:</p>
          <ul>
            <li>Airtel Digital TV</li>
            <li>Tata Play (Tata Sky)</li>
            <li>Dish TV</li>
            <li>D2H (Videocon D2H)</li>
            <li>Sun Direct</li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Recharge on ABDKS",
      body: (
        <ol>
          <li>Go to Recharge & Bill Pay on ABDKS.</li>
          <li>Select DTH as your service.</li>
          <li>Choose your operator.</li>
          <li>Enter your customer ID or registered number.</li>
          <li>Choose/enter amount and pay.</li>
          <li>Get instant recharge confirmation.</li>
        </ol>
      ),
    },
    {
      title: "Why Choose ABDKS for DTH Recharge?",
      body: (
        <ul>
          <li>Zero extra fees</li>
          <li>Multiple payment modes</li>
          <li>Instant processing</li>
          <li>All major operators supported</li>
          <li>Mobile-optimized dashboard</li>
          <li>Exclusive cashback offers</li>
        </ul>
      ),
    },
    {
      title: "Start Earning with DTH Recharge Services",
      body: (
        <>
          <p>
            Are you a retailer or cyber café operator? Start earning commission on every DTH recharge with ABDKS BBPS.
          </p>
          <p>Easy onboarding, real-time logs, and dedicated support included.</p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="/createaccount?role=Retailer" className="btn btn-warning text-dark fw-semibold shadow-sm">Become a Partner</Link>
            <Link to="#" className="btn btn-outline-secondary fw-semibold">Recharge Now</Link>
          </div>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How long does a DTH recharge take?</Accordion.Header>
            <Accordion.Body>Recharge is processed instantly and usually reflects in seconds.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Which DTH providers are supported?</Accordion.Header>
            <Accordion.Body>ABDKS supports Airtel, Tata Play, Dish TV, D2H, and Sun Direct.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I pay for someone else’s DTH?</Accordion.Header>
            <Accordion.Body>Yes. You can recharge for any valid customer ID or number.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What payment options can I use?</Accordion.Header>
            <Accordion.Body>UPI, debit/credit card, net banking, and wallets are supported.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
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
    </div>
  );
};

export default FAQDthRecharge;
