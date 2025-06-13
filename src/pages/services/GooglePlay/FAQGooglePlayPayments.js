import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const FAQGooglePlayRecharge = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = [
    {
      title: 'Google Play Recharge Made Simple with ABDKS',
      body: (
        <>
          <p>
            With ABDKS Solutions Private Ltd., buying Google Play recharge codes is quick, secure, and available round the clock. Whether you're purchasing apps, games, in-game currency, or subscriptions, our platform allows you to instantly top-up your Google Play account without the need for a debit/credit card.
            Perfect for personal use or for retailers serving walk-in customers.
          </p>
        </>
      ),
    },
    {
      title: 'Why Use Google Play Recharge?',
      body: (
        <ul>
          <li>Purchase paid apps & games</li>
          <li>Subscribe to YouTube Premium, Google One, and other services</li>
          <li>Buy in-app items, coins, gems, or game passes</li>
          <li>Rent or buy movies and books from the Play Store</li>
          <li>Send a gift code to someone</li>
        </ul>
      ),
    },
    {
      title: 'How to Buy Google Play Recharge via ABDKS',
      body: (
        <ol>
          <li>Visit the Recharge Section on the ABDKS website or app</li>
          <li>Select Google Play Recharge</li>
          <li>Choose the recharge amount (e.g., ₹100, ₹200, ₹500, ₹1000)</li>
          <li>Complete payment using UPI, card, net banking, or wallet</li>
          <li>Receive your Google Play gift code instantly on screen and via SMS/email</li>
          <li>Redeem it on the Play Store using your Google account</li>
        </ol>
      ),
    },
    {
      title: 'Key Features',
      body: (
        <ul>
          <li>Instant Delivery – No delays, code received in seconds</li>
          <li>Multiple Payment Options – UPI, wallet, credit/debit cards, and more</li>
          <li>Safe & Secure – Payments processed over encrypted RBI-compliant channels</li>
          <li>Works for Any Android Device – Redeem on smartphones, tablets, or web</li>
          <li>Retailer Access – Resell codes to customers and earn commission</li>
        </ul>
      ),
    },
    {
      title: 'For Retailers & Agents',
      body: (
        <ul>
          <li>Offer a high-demand digital product</li>
          <li>Sell Google Play codes and boost walk-ins</li>
          <li>Earn profit margin per code sold</li>
          <li>Simple dashboard access to recharge orders and history</li>
          <li>No technical setup required</li>
        </ul>
      ),
    },
    {
      title: 'Frequently Asked Questions',
      body: (
        <ul>
          <li><strong>What is the validity of Google Play recharge codes?</strong><br />Codes typically do not expire once generated.</li>
          <li><strong>Can I use this for YouTube Premium or in-game purchases?</strong><br />Yes. Play Store balance works across all Google Play services.</li>
          <li><strong>What denominations are available?</strong><br />Common options include ₹100, ₹200, ₹500, ₹1000 and may vary by availability.</li>
          <li><strong>Can I send the code as a gift?</strong><br />Yes, just share the code via SMS, WhatsApp, or email.</li>
        </ul>
      ),
    },
    {
      title: 'Recharge Google Play Instantly with ABDKS',
      body: (
        <>
          <p>Whether for your own use or as a retailer service, Google Play recharge through ABDKS is fast, reliable, and always available.</p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Button variant="success" size="lg">Buy Now</Button>
            <Button variant="outline-success" size="lg">Register as a Retailer</Button>
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

export default FAQGooglePlayRecharge;
