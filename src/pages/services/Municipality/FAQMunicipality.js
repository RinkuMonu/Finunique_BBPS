import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQMunicipality = () => {
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
      title: 'Pay Your Municipal Property Tax Online',
      body: (
        <>
          <p>
            Gone are the days when you had to stand in a queue for making your Municipal Property Tax payments. ABDKS Solutions Private Limited small pvt ltd . now brings house tax payment facilities for you at your fingertips. You can now make your property tax payment at any time and any place.
          </p>
          <p>
            You also have the added benefit of using secure payment options for municipal property tax payment online through debit/credit card or through net banking.
          </p>
        </>
      ),
    },
    {
      title: 'Safe and Secure Property Tax Payment',
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . ensures secure and hassle-free transactions for municipal property tax payments. All payment options such as debit cards, credit cards, and net banking are routed through secure servers, providing the highest level of data protection.
          </p>
          <p>
            Your personal information, including email addresses, phone numbers, and banking details, is encrypted and accessible only by you, ensuring maximum privacy.
          </p>
        </>
      ),
    },
    {
      title: 'Steps to Pay Property Tax Using ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ol>
            <li>Download & log in to the ABDKS Solutions Private Limited small pvt ltd . app.</li>
            <li>Select the 'Recharge and Bill Pay' option.</li>
            <li>Choose 'Property Tax' as the category.</li>
            <li>Enter your municipal corporation and property details.</li>
            <li>Verify the tax amount fetched by the system.</li>
            <li>Choose your preferred payment method and complete the transaction.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'FAQs',
      body: (
        <ul>
          <li>
            <strong>Is it safe to pay property taxes online using ABDKS Solutions Private Limited small pvt ltd .?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . offers encrypted payment gateways and keeps all user data secure.
          </li>
          <li>
            <strong>Can I pay property taxes for any municipal corporation?</strong><br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . supports property tax payments for multiple municipal corporations across the country.
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

export default FAQMunicipality;
