import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQHousingBillPayments = () => {
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
      title: 'Pay Housing Societies\' Bills Online',
      body: (
        <>
          <p>
            Amongst the daily hustle-bustle of life, how often do you forget to pay your housing society's bill? Going to a society office and waiting for your turn to pay the bill is a task. But, ABDKS Solutions Private Limited small pvt ltd . is a platform that offers hassle-free bill payment for a housing society & also provides various offers and discounts to save on every payment. So, gear up & pay your housing bills through ABDKS Solutions Private Limited small pvt ltd . from anywhere. It's quick and secure.
          </p>
        </>
      ),
    },
    {
      title: 'Advantages Of Paying Housing Societies\' Bill Online Via ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ul>
            <li><strong>Easy and convenient:</strong> Be it a phone bill, DTH bill, or apartment maintenance bill payment, online bill payment is a one-time process after which your bank takes over. All your account information is organized in one centralized location, and there is no question of late or missing payments.</li>
            <li><strong>Securing privacy and saving money:</strong> Online apartment maintenance bill payment aids in protecting your privacy and identity by eliminating any risk associated with lost or stolen paperwork. You don't have to pay for cheques, stamps or envelopes and can save on the fuel costs too. By eliminating paper usage, you can contribute to the betterment of the environment as well.</li>
            <li><strong>You get rewarded:</strong> With your bills you can earn free rewards, cashback, discount & SuperCash offers which helps you save.</li>
            <li><strong>No transaction cost:</strong> ABDKS Solutions Private Limited small pvt ltd . does not ask for extra charges to process your payments. In addition, there are no hidden charges or taxes. It ensures you enjoy a free service.</li>
            <li><strong>Select from multiple payment options:</strong> You are free to choose any of the preferred modes available on ABDKS Solutions Private Limited small pvt ltd ., such as UPI, debit card, Credit card, etc., for making your housing bill payments.</li>
            <li><strong>Pay later option:</strong> To make your payments via ABDKS Solutions Private Limited small pvt ltd . later at a specific time, you can opt for the option named 'ZIP', which gives you instant credit to clear dues now & pay back later.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'How To Make Housing Bill Payment Online Via ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ol>
            <li>Open the ABDKS Solutions Private Limited small pvt ltd . app or its official website.</li>
            <li>Go to ’Recharge and pay bills’ option.</li>
            <li>Choose the option of ’Housing Payment’.</li>
            <li>Select your city and then society name.</li>
            <li>Select service type.</li>
            <li>Enter meter number and amount to be paid.</li>
            <li>Make the digital payment either by debit/credit card, UPI, ABDKS Solutions Private Limited small pvt ltd . ZIP or net banking.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'How To Check Housing Bill On ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <p>
            In order to check the housing bill, open the app or the website and check your housing bill by entering your customer ID after selecting the city, society, and service type.
          </p>
        </>
      ),
    },
    {
      title: 'Flexible Payment Methods Available For Housing Bill Payment On ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <ul>
            <li>UPI</li>
            <li>Debit and credit cards</li>
            <li>Netbanking</li>
            <li>Wallet</li>
            <li>ABDKS Solutions Private Limited small pvt ltd . ZIP - Pay Later</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Get Cashback Offers On Housing Bill Payment Through ABDKS Solutions Private Limited small pvt ltd .',
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . offers a plethora of offers and cashback on paying housing bills. You can save money by availing of the cashback offers available on almost all payment methods. Visit the website to make payment for your apartment bill. There you can look for cashback offers and discounts and finally pay the bill after saving some money.
          </p>
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

export default FAQHousingBillPayments;
