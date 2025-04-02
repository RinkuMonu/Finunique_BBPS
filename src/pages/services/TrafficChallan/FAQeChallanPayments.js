import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQeChallanPayments = () => {
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
      title: 'How To Do eChallan Payment Online From ABDKS Solutions Private Limited small pvt ltd .?',
      body: (
        <>
          <p>
            Following traffic rules is each and everyone’s duty to ensure not only one’s safety but of other people as well. However, one may need to pay for a traffic challan issued to them for violating traffic rules of the Motor Vehicles Act, 1988, or for not following them at all. Some of the violations typically include not wearing a helmet, driving without a valid license, over speeding the vehicle, not following signal lights, etc.
          </p>
        </>
      ),
    },
    {
      title: 'What is eChallan Payment?',
      body: (
        <>
          <p>
            The introduction of eChallan online payment is an initiative taken by the Government of India to ensure the transparency of records and enhance its traffic services. Nowadays, almost every procedure is being digitized, so traffic rules violators can also use the online service to pay for the penalties.
          </p>
          <p>
            The government’s main aim to introduce eChallan payment is to negate the bribing process by eliminating cash transactions and making every record maintained online.
          </p>
        </>
      ),
    },
    {
      title: 'How is eChallan Generated?',
      body: (
        <>
          <p>
            The traffic police have the swiping machine that enables them to create a printed eChallan in no time. So, in a situation where they spot a traffic violator, they can make a real-time entry and print the challan against the traffic rule violator’s name.
          </p>
          <p>
            Using these machines makes it easy for the traffic police to collect the fine on the spot. Once the payment is received, the police issue the traffic violator a formal receipt stating the fine payment has been received successfully.
          </p>
        </>
      ),
    },
    {
      title: 'How to Make eChallan Payment Online Using ABDKS Solutions Private Limited small pvt ltd .?',
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . has introduced its new service for its users to pay challan online in a hassle-free manner. Without worrying about the security and authenticity of the payment, you can easily opt for eChallan Online Payment using ABDKS Solutions Private Limited small pvt ltd . in just a few simple steps.
          </p>
          <ol>
            <li>Login to your ABDKS Solutions Private Limited small pvt ltd . user account.</li>
            <li>Look for the 'Recharge and Bill Pay' option.</li>
            <li>Select “Traffic Challan" out of the various services offered.</li>
            <li>Submit details such as the Traffic police authority of your locality, Challan number, RC number, DL number, etc.</li>
            <li>The system will automatically fetch your challan amount.</li>
            <li>Pay using any preferred payment options available at ABDKS Solutions Private Limited small pvt ltd ., such as Debit Card, Credit Card, UPI, Wallet, Net Banking, or ABDKS Solutions Private Limited small pvt ltd . ZIP - Pay Later.</li>
          </ol>
          <p>
            Online challan payment can be done from anywhere: home, office, college, etc., avoiding all the paperwork and formalities with ABDKS Solutions Private Limited small pvt ltd .’s eChallan pay online service.
          </p>
        </>
      ),
    },
    {
      title: 'FAQs',
      body: (
        <ul>
          <li>
            <strong>What can be the challan amount for driving without a valid driving license?</strong><br />
            The challan amount will depend upon one traffic authority to another. According to the new Motor Vehicle Bill, 2019, you may get a penalty of up to 5000 INR for driving without a valid DL.
          </li>
          <li>
            <strong>By what time do I need to make my traffic challan payment from the date of issue?</strong><br />
            You must pay for your challan within 15 days after the issue. In case you fail to pay within due time, a late payment fee of INR 10 will be imposed.
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

export default FAQeChallanPayments;
