import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQCableBillPayments = () => {
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
      title: 'Quickly and Conveniently Pay Cable Bill Online using ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <p>
            Most modern homes are equipped with a TV and a cable connection. Cable connections usually require monthly bill payments to ensure seamless connectivity. Companies like Hathway Cable, InCable, Reliance Digital TV, HiFi Vision, and Digi Cable offer services across the country.
          </p>
          <p>
            Traditionally, paying cable bills involved visiting the cable office or waiting for the operator to collect payments. Now, ABDKS Solutions Private Limited small pvt ltd . has integrated multiple cable operators into its payment portal, simplifying online cable bill payments. With ABDKS Solutions Private Limited small pvt ltd ., you can easily and conveniently pay your cable TV bill online using the app or website.
          </p>
        </>
      ),
    },
    {
      title: 'Safe and Secure Cable TV Online Payment',
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . is not only easy to use but also a secure method for online cable bill payments. It offers various payment options such as Credit Card, Debit Card, Internet Banking, and ABDKS Solutions Private Limited small pvt ltd . Secure Digital Wallet. You can choose your preferred method to pay the cable bill online.
          </p>
          <p>
            Transactions are processed through secure bank servers and payment gateways, ensuring the highest level of security. Additionally, ABDKS Solutions Private Limited small pvt ltd . maintains user privacy by safeguarding data like email addresses, phone numbers, customer IDs, and banking information, accessible only to the user.
          </p>
        </>
      ),
    },
    {
      title: 'Explore A Wide Range of Cable TV Packages',
      body: (
        <>
          <p>
            When paying cable bills online, you can explore the cable packages offered by your operator. For operators offering prepaid services, you can also check for recharge offers. Paying your cable bill via ABDKS Solutions Private Limited small pvt ltd . can earn you cashback in the form of SuperCash.
          </p>
          <p>
            SuperCash is credited to your ABDKS Solutions Private Limited small pvt ltd . wallet and can be used for future transactions. Besides paying bills, you can use SuperCash for online purchases on various E-commerce websites.
          </p>
        </>
      ),
    },
    {
      title: 'How to Pay Cable Bills Using ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ol>
            <li>Download & log in to the ABDKS Solutions Private Limited small pvt ltd . app.</li>
            <li>Select the 'Recharge and Bill Pay' option.</li>
            <li>Choose 'Cable TV' as the category.</li>
            <li>Enter your cable operator and account details.</li>
            <li>Verify the bill amount fetched by the system.</li>
            <li>Choose your payment method and complete the transaction.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'FAQs',
      body: (
        <ul>
          <li>
            <strong>Is it safe to pay cable bills online using ABDKS Solutions Private Limited small pvt ltd .?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . ensures secure transactions through encrypted gateways and protects user data.
          </li>
          <li>
            <strong>Can I pay for any cable operator?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . supports payments for major operators like Hathway, InCable, Reliance Digital TV, and more.
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

export default FAQCableBillPayments;
