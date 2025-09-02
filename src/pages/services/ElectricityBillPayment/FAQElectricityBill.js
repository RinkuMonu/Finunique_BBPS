import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQElectricityBill = () => {
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
      title: "How to Pay Your Electricity Bill through Finunique Online",
      body: (
        <>
          <p>
            Forget queues! With Finunique, you can easily pay your electricity bills online via a secure BBPS-integrated platform. Whether you are a customer or a retailer, Finunique makes payments seamless across all major Indian states.
          </p>
          <p>Follow these steps:</p>
          <ol>
            <li>Go to 'Recharge & Bill Payment' on Finunique website/app.</li>
            <li>Select 'Electricity'.</li>
            <li>Choose your electricity board.</li>
            <li>Enter your consumer number.</li>
            <li>Fetch & verify your bill.</li>
            <li>Choose your payment method and pay.</li>
            <li>Receive instant confirmation & receipt.</li>
          </ol>
        </>
      ),
    },
    {
      title: "Supported Electricity Boards on Finunique BBPS",
      body: (
        <>
          <p>Finunique supports 25+ boards including:</p>
          <ul>
            <li>JVVNL, AVVNL, JDVVNL (Rajasthan)</li>
            <li>BSES Rajdhani / Yamuna (Delhi)</li>
            <li>TNEB (Tamil Nadu), MSEB (Maharashtra), UPPCL (UP)</li>
            <li>BESCOM, HESCOM, MESCOM (Karnataka)</li>
            <li>WBSEDCL, CESC, DGVCL, PGVCL, and more</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Choose Finunique for Electricity Bill Payments?",
      body: (
        <ul>
          <li>BBPS-Compliant & secure</li>
          <li>Zero transaction charges</li>
          <li>Multiple payment modes (UPI, cards, wallets)</li>
          <li>24/7 availability</li>
          <li>Instant digital receipts</li>
          <li>Exclusive offers and cashback</li>
          <li>RBI-approved flow</li>
        </ul>
      ),
    },
    {
      title: "Electricity Bill Offers & Coupons",
      body: (
        <>
          <p>Get 5% SuperCash up to ₹50 on your first payment.</p>
          <ul>
            <li>Minimum transaction: ₹300</li>
            <li>Maximum cashback: ₹50</li>
            <li>Check our offers page regularly.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Benefits for Retailers & Agents",
      body: (
        <>
          <p>Retailers can offer electricity bill payments and earn commissions:</p>
          <ul>
            <li>Real-time payments for customers</li>
            <li>No setup — just a smartphone needed</li>
            <li>Instant commission credit</li>
            <li>Detailed transaction history & partner dashboard</li>
            <li>Increased footfall & trust</li>
          </ul>
        </>
      ),
    },
    {
      title: "FAQs",
      body: (
        <ul>
          <li><strong>How to check my bill?</strong> Select board, enter details & view instantly on Finunique.</li>
          <li><strong>Is it secure?</strong> Yes, fully RBI-authorized & BBPS-integrated.</li>
          <li><strong>When is payment updated?</strong> Instantly reflected with receipt.</li>
          <li><strong>What if payment fails?</strong> Amount auto-refunded; support always ready.</li>
          <li><strong>Can I pay for others?</strong> Yes, using their consumer number.</li>
        </ul>
      ),
    },
    {
      title: "Pay Smartly with Finunique",
      body: (
        <>
          <p>Enjoy a fast, secure, commission-free electricity bill payment experience nationwide.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/billpayment" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">Pay Your Bill</Link>
            <Link to="/createaccount" className="btn btn-outline-secondary fw-semibold px-4">Become a Partner</Link>
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

export default FAQElectricityBill;
