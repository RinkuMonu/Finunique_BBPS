import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQWaterBillPayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = [
    {
      title: "Water Bill Payment",
      body: (
        <>
          <p>
            Water is a necessity of life, and it is critical to pay your water
            bill on time. In this era, everyone is too busy to stand in long
            queues for water bill payments at the centers. The good news is that
            your water bills can now be paid from the comfort of your own home
            in a few simple clicks with a fast and secure payments Website like
            ABDKS Solutions Private Limited .
          </p>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . is India’s No. 1 site for Online water bill payments like
            BWSSB, Delhi Jal Board, Kerala water Authority.
          </p>
        </>
      ),
    },
    {
      title: "What is the Advantage of Water Bill Payment Online?",
      body: (
        <>
          <ul>
            <li>
              Online bill payment allows you to tidy up your funds all at once.
            </li>
            <li>
              Getting rid of paper bills is one of the most significant benefits
              of paying online.
            </li>
            <li>
              By paying online, you can avail discounts and apply promo codes.
            </li>
            <li>
              You can pay bills for your relatives and family in other cities.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What are the Available Options to Make Payment for Water Bill?",
      body: (
        <>
          <p>
            With multiple payment options, ABDKS Solutions Private Limited small pvt ltd . has become a popular choice
            for bill payments. The following methods are available:
          </p>
          <ul>
            <li>Debit Card</li>
            <li>Credit Card</li>
            <li>UPI Payment</li>
            <li>Net Banking</li>
            <li>ABDKS Solutions Private Limited small pvt ltd . ZIP - Pay Later</li>
          </ul>
        </>
      ),
    },
    {
      title: "Is it Safe to Pay Water Bills Online?",
      body: (
        <>
          <p>
            Water bill online payment is safe when using the right bill payment
            service. Digital payment apps like ABDKS Solutions Private Limited small pvt ltd . are 100% trustworthy and
            dependable, using encryption and multistep identity verification to
            keep your data secure.
          </p>
        </>
      ),
    },
    {
      title: "Steps to Pay Water Bills Online Through ABDKS Solutions Private Limited small pvt ltd .",
      body: (
        <>
          <ol>
            <li>Download & login on the ABDKS Solutions Private Limited small pvt ltd . UPI Payment app.</li>
            <li>Click on the 'Recharge and Bill Pay' option.</li>
            <li>Select 'Water' as a category.</li>
            <li>Select your operator & enter your Consumer Number.</li>
            <li>
              Once you enter the details, the system will automatically fetch
              your due amount.
            </li>
            <li>Click on 'Pay Now'.</li>
          </ol>
        </>
      ),
    },
    {
      title: "FAQs",
      body: (
        <ul>
          <li>
            <strong>
              Is it Safe to Pay Water Bills Online Through ABDKS Solutions Private Limited small pvt ltd .?
            </strong>
            <br />
            ABDKS Solutions Private Limited small pvt ltd . offers a safe and secured payment platform where you can
            make payments.
          </li>
          <li>
            <strong>Can we make payment from any bank?</strong>
            <br />
            Yes, you can pay your water bills from any bank listed on the
            ABDKS Solutions Private Limited small pvt ltd . app.
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
        <div className="p-5">
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FAQWaterBillPayment;
