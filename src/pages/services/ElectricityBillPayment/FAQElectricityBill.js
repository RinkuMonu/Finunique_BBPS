import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
          It is the days of standing in queues to pay electricity bills. With ABDKS Solutions Private Ltd., you can immediately make your electricity bill payment online through our safe and BBPS-integrated platform. Whether you're looking for a customer facility or a retailer offering services, ABDKS simplifies electricity bill payment across all major states in India.
        </p>
        <p>Follow these simple steps to pay your electricity bill using ABDKS:</p>
        <ol>
          <li>Go to the 'Recharge and Bill Payment' section on the ABDKS website or app.</li>
          <li>Select 'Electricity' as a bill category.</li>
          <li>Choose your electricity board/operator from dropdown.</li>
          <li>Enter your consumer/account number.</li>
          <li>The system will automatically fetch your latest bill.</li>
          <li>Click 'Continue' and verify the bill details.</li>
          <li>Select your favorite payment method and click 'Pay'.</li>
          <li>Get immediate confirmation and access your digital receipt via email or app.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Supported Electricity Boards on ABDKS BBPS",
    body: (
      <>
        <p>
          ABDKS supports electricity bill payments in 25+ Indian states and regional electricity boards, including:
        </p>
        <ul>
          <li>JVVNL, AVVNL, JDVVNL (Rajasthan)</li>
          <li>BSES Rajdhani / Yamuna (Delhi)</li>
          <li>TNEB (Tamil Nadu), MSEB (Maharashtra), PSPCL (Punjab), UPPCL (Uttar Pradesh)</li>
          <li>BESCOM, MESCOM, HESCOM (Karnataka), APSPDCL, APEPDCL (Andhra Pradesh)</li>
          <li>WBSEDCL (West Bengal), CESC, NBPDCL, SBPDCL, DGVCL, UGVCL, PGVCL</li>
          <li>And many more state-regulated DISCOMs</li>
        </ul>
        <p>
          Our BBPS electricity bill payment system ensures nationwide coverage, fast access, and real-time syncing with operators.
        </p>
      </>
    ),
  },
  {
    title: "Why Choose ABDKS for Electricity Bill Payments?",
    body: (
      <ul>
        <li>BBPS-Compliant Platform – Secure, real-time connection to all major boards</li>
        <li>Zero Transaction Charges – Pay electricity bills online with no extra fees</li>
        <li>Multiple Payment Modes – UPI, debit/credit card, wallet, net banking</li>
        <li>24/7 Access – Recharge or pay bills anytime, even on holidays</li>
        <li>Full Digital Receipt – Easily download or share your transaction history</li>
        <li>Attractive Offers – Get discounts, promo codes, and SuperCash rewards</li>
        <li>User-Friendly Dashboard – Works perfectly on both mobile and desktop</li>
        <li>RBI-Approved Payment Flow – Ensures your data and money stay secure</li>
      </ul>
    ),
  },
  {
    title: "Electricity Bill Offers & Coupon Codes",
    body: (
      <>
        <p>Enjoy 5% SuperCash up to ₹50 on your first electricity bill payment via ABDKS.</p>
        <ul>
          <li>Minimum transaction: ₹300</li>
          <li>Maximum reward: ₹50</li>
          <li>Visit our Electricity Bill Offers page regularly for updated coupons and cashback codes.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Benefits for Retailers & BBPS Agents",
    body: (
      <>
        <p>
          Retail shop owners, CSC operators, and entrepreneurs can use ABDKS to provide utility bill payment services and earn commissions on every successful transaction:
        </p>
        <ul>
          <li>Serve your local community with real-time bijli bill payments</li>
          <li>No complex setup – start with just a smartphone</li>
          <li>Instant commission credit on every bill payment</li>
          <li>Access to full transaction history and support via partner dashboard</li>
          <li>Grow footfall and trust with value-added BBPS services</li>
        </ul>
      </>
    ),
  },
  {
    title: "Frequently Asked Questions (FAQs)",
    body: (
      <ul>
        <li>
          <strong>How can I check my electricity bill online?</strong> Open the ABDKS app or website, go to ‘Electricity’, select your operator, and enter your account details to fetch your latest bill.
        </li>
        <li>
          <strong>Is online electricity bill payment secure on ABDKS?</strong> Yes. ABDKS uses RBI-authorized, BBPS-integrated, encrypted infrastructure to ensure secure and fraud-proof payments.
        </li>
        <li>
          <strong>How quickly is my bill payment updated?</strong> Almost instantly. Most electricity boards reflect payments in real-time with a confirmation message and digital receipt.
        </li>
        <li>
          <strong>What if the payment fails?</strong> In case of a failed transaction, your amount is auto-refunded. Our 24x7 Jaipur-based support team is always available to assist you.
        </li>
        <li>
          <strong>Can I pay bills for others?</strong> Yes. Just enter the correct consumer/account number and proceed with the payment.
        </li>
      </ul>
    ),
  },
  {
    title: "Pay Electricity Bills the Smart Way – With ABDKS",
    body: (
      <>
        <p>
          Whether you're in Rajasthan, Delhi, Maharashtra, or Karnataka, ABDKS offers a fast, secure, and commission-free BBPS electricity bill payment solution.
        </p>
        <p>
          Enjoy nationwide service, user-friendly experience, and complete transaction peace of mind.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">
            Pay Your Electricity Bill Now
          </Link>
          <Link  to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">
            Become a BBPS Partner
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

export default FAQElectricityBill;

