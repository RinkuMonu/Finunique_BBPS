import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQLoanEMIPayments = () => {
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
      title: "Simple & Secure EMI Payments with ABDKS",
      body: (
        <>
          <p>
            ABDKS Solutions Private Ltd. enables you to pay your loan EMIs online from the comfort of your home or through your nearest digital service point. Whether it’s a personal loan, vehicle loan, home loan, or consumer durable loan — ABDKS ensures secure, instant, and reliable EMI transactions for all major NBFCs and banks.
          </p>
          <p>
            No more missed due dates, long queues, or delayed payments. With ABDKS, your EMI payments are just a few clicks away.
          </p>
        </>
      ),
    },
    {
      title: "Supported Loan Types",
      body: (
        <ul>
          <li>Personal Loans</li>
          <li>Business Loans</li>
          <li>Home Loans</li>
          <li>Car or Bike Loans</li>
          <li>Consumer Durable Loans</li>
          <li>Education Loans</li>
          <li>Gold Loans</li>
          <li>Digital Credit Cards (BNPL / Pay Later)</li>
        </ul>
      ),
    },
    {
      title: "Partnered NBFCs & Banks",
      body: (
        <ul>
          <li>Bajaj Finserv</li>
          <li>HDFC Bank</li>
          <li>IDFC First Bank</li>
          <li>Capital Float</li>
          <li>Tata Capital</li>
          <li>Indiabulls</li>
          <li>Home Credit</li>
          <li>Kissht</li>
          <li>FlexPay</li>
          <li>ZestMoney</li>
          <li>Paysense</li>
          <li>And many more</li>
        </ul>
      ),
    },
    {
      title: "How to Pay EMI Online via ABDKS",
      body: (
        <ol>
          <li>Visit the EMI Payment section on the ABDKS website or app</li>
          <li>Select the financial institution or NBFC</li>
          <li>Enter your loan/account number or mobile number</li>
          <li>View the outstanding EMI and due date</li>
          <li>Proceed to pay via UPI, card, wallet, or net banking</li>
          <li>Receive instant confirmation and receipt</li>
        </ol>
      ),
    },
    {
      title: "Features & Benefits",
      body: (
        <ul>
          <li>Instant Payment & Confirmation</li>
          <li>24x7 Access – Pay anytime</li>
          <li>Secure Transactions – Fully encrypted</li>
          <li>Multiple Payment Modes – UPI, cards, net banking</li>
          <li>Supports All Major NBFCs & Lenders</li>
          <li>Mobile-Friendly Interface</li>
        </ul>
      ),
    },
    {
      title: "For Retailers & Agents",
      body: (
        <ul>
          <li>Serve customers who need to pay EMIs</li>
          <li>Earn commissions on every transaction</li>
          <li>Use ABDKS dashboard to manage services</li>
          <li>Access real-time support from our Jaipur-based team</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <ul>
          <li>
            <strong>Can I pay EMI for any NBFC or bank through ABDKS?</strong><br />
            We support most major NBFCs and banks. Check the partner list in the portal.
          </li>
          <li>
            <strong>Do I get a receipt for my EMI payment?</strong><br />
            Yes, a digital receipt is sent via SMS/email immediately after payment.
          </li>
          <li>
            <strong>Can I pay for someone else’s loan EMI?</strong><br />
            Yes. Enter their valid account/loan number or registered mobile number.
          </li>
          <li>
            <strong>Is there any extra charge for using ABDKS?</strong><br />
            No additional service charge is applied for standard EMI payments.
          </li>
        </ul>
      ),
    },
    {
      title: "Stay On Track with Your EMI Payments",
      body: (
        <>
          <p>
            Avoid late fees and maintain a good credit score by paying EMIs on time — powered by ABDKS.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/ContactUs" className="btn btn-primary me-2">Pay EMI Now</Link >
            <Link  to="/createaccount" className="btn btn-outline-secondary">Become a Retail Partner</Link >
          </div>
        </>
      ),
    },
  ];

  return (
    <>
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
        <div className="p-5">
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: "2rem" }}>
              <h3>{item.title}</h3>
              <div>{item.body}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FAQLoanEMIPayments;
