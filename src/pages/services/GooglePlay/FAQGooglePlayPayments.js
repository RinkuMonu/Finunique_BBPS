import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQGooglePlayPayments = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = [
    {
      title: 'Google Play Payments Made Easier',
      body: (
        <>
          <p>
            Today, smartphones have replaced many devices that once had individual significance. Tasks like sending emails, taking photos, and much more can now be handled directly on your smartphone. Apps play a critical role in this functionality, available primarily on platforms like the Google Play Store for Android devices.
          </p>
          <p>
            The Play Store offers a range of apps, music, books, and movies. To purchase premium content, you need to recharge your Google Play account. With ABDKS Solutions Private Limited small pvt ltd ., you can easily recharge your account anywhere between INR 100-1500. Plus, you get access to exciting Google Play recharge coupons.
          </p>
        </>
      ),
    },
    {
      title: 'Safe and Secure Google Play Online Recharge',
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . ensures that your Google Play online recharge is fast, safe, and secure. We adhere to the highest safety standards, protecting your transactions and personal data. 
          </p>
          <p>
            You can recharge your Google Play account via the ABDKS Solutions Private Limited small pvt ltd . wallet, saving time and providing a hassle-free experience. Other payment options, such as credit cards, debit cards, and net banking, are also available for your convenience.
          </p>
        </>
      ),
    },
    {
      title: 'Google Play Recharge Offers and Deals',
      body: (
        <>
          <p>
            By recharging your Google Play account via ABDKS Solutions Private Limited small pvt ltd ., you can avail exciting deals and cashback offers. Some highlights include:
          </p>
          <ul>
            <li>Discounts on movie tickets and bus tickets.</li>
            <li>Coupons for restaurants and travel-related vouchers.</li>
            <li>Special deals on online shopping platforms.</li>
          </ul>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . provides a seamless payment experience, making it one of the most trusted names for online transactions.
          </p>
        </>
      ),
    },
    {
      title: 'How to Recharge Google Play Using ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ol>
            <li>Download & log in to the ABDKS Solutions Private Limited small pvt ltd . app.</li>
            <li>Select the 'Recharge and Bill Pay' option.</li>
            <li>Choose 'Google Play' as the category.</li>
            <li>Enter the recharge amount (between INR 100-1500).</li>
            <li>Choose your preferred payment method and proceed.</li>
            <li>Enjoy your recharged account and avail exciting offers.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'FAQs',
      body: (
        <ul>
          <li>
            <strong>Is it safe to recharge Google Play via ABDKS Solutions Private Limited small pvt ltd .?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . adheres to the highest safety standards to protect your data and transactions.
          </li>
          <li>
            <strong>Can I use any bank for payment?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . supports payments from all major banks.
          </li>
        </ul>
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
        <div className='p-5'>
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FAQGooglePlayPayments;
    