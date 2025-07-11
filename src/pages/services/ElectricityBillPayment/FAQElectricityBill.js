import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
      title: "How to Pay Your Electricity Bill through ABDKS Online",
      body: (
        <>
          <p>
            Forget queues! With ABDKS, you can easily pay your electricity bills online via a secure BBPS-integrated platform. Whether you are a customer or a retailer, ABDKS makes payments seamless across all major Indian states.
          </p>
          <p>Follow these steps:</p>
          <ol>
            <li>Go to 'Recharge & Bill Payment' on ABDKS website/app.</li>
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
      title: "Supported Electricity Boards on ABDKS BBPS",
      body: (
        <>
          <p>ABDKS supports 25+ boards including:</p>
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
      title: "Why Choose ABDKS for Electricity Bill Payments?",
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
          <li><strong>How to check my bill?</strong> Select board, enter details & view instantly on ABDKS.</li>
          <li><strong>Is it secure?</strong> Yes, fully RBI-authorized & BBPS-integrated.</li>
          <li><strong>When is payment updated?</strong> Instantly reflected with receipt.</li>
          <li><strong>What if payment fails?</strong> Amount auto-refunded; support always ready.</li>
          <li><strong>Can I pay for others?</strong> Yes, using their consumer number.</li>
        </ul>
      ),
    },
    {
      title: "Pay Smartly with ABDKS",
      body: (
        <>
          <p>Enjoy a fast, secure, commission-free electricity bill payment experience nationwide.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary px-4">
              Pay Your Bill
            </Link>
            <Link to="/createaccount" className="btn btn-outline-secondary px-4">
              Become a Partner
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
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div className="row">
          {content.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <Card className="shadow-sm border-0 rounded-4 h-100 faq-card">
                <Card.Body>
                  <Card.Title className="h5 fw-bold mb-3 text-primary">{item.title}</Card.Title>
                  <div>{item.body}</div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .faq-card {
          transition: all 0.3s ease;
        }
        .faq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
};

export default FAQElectricityBill;
