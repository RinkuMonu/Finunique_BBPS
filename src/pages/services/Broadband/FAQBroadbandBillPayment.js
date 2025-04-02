import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQBroadbandBillPayment = () => {
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
      title: "About Broadband Bill Payment",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited introduces new service to their consumers
            to pay their broadband bills online. Now there is no need to stand
            in the long queue to pay their broadband bills for hours. ABDKS Solutions Private Limited
            allows their consumers to pay BSNL Broadband, Tikona, Airtel
            Broadband, Act Broadband, Hathway Broadband, MTNL Delhi Broadband,
            MTNL Mumbai Broadband, Tata TeleServices (CDMA), Reliance
            Communications, Connect Broadband bills online. Pay broadband bills
            online using multiple payment options such as your debit cards,
            credit cards, or net banking.
          </p>
        </>
      ),
    },
    {
      title: "How to Recharge Broadband Bill, Instant & Safe!",
      body: (
        <>
          <p>
            A user can easily make his/her broadband bill payment online within
            a few minutes using the ABDKS Solutions Private Limited app or website and avail exciting
            broadband bill payment offers. To make the broadband payment, a user
            must follow these simple steps:
          </p>
          <ol>
            <li>
              Click on ‘Broadband’ in the ‘Recharges & Bill Payments’ section on
              the ABDKS Solutions Private Limited app or website.
            </li>
            <li>
              Select your broadband provider from the ‘Operator’ dropdown menu.
            </li>
            <li>
              Enter your account number/username/landline number (as applicable).
            </li>
            <li>
              Click on ‘Continue’, select a payment mode, and confirm your
              online broadband bill payment.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Why Choose ABDKS Solutions Private Limited for Broadband Bill Payment",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited, the pioneer of online recharges and bill payments, aims
            to offer a seamless and easy payment process that ensures instant
            broadband bill payment and also allows users to save on their
            payments by availing broadband bill payment offers. Following are
            the key benefits of using ABDKS Solutions Private Limited for broadband online payment:
          </p>
          <ul>
            <li>
              <strong>Instant Payment:</strong> Users only need to follow a few
              simple steps to pay broadband bills online using the ABDKS Solutions Private Limited app.
            </li>
            <li>
              <strong>Exciting Offers:</strong> Users can avail huge broadband
              bill payment offers, including cashback and discounts, ensuring
              consistent savings.
            </li>
            <li>
              <strong>Secure Transactions:</strong> Transactions on ABDKS Solutions Private Limited
              are completely secure, and user data is never shared with third
              parties.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions on Broadband Bill Payment",
      body: (
        <ul>
          <li>
            <strong>How do I pay my broadband bill online?</strong>
            <br />
            Users need to follow a few simple steps on the ABDKS Solutions Private Limited app or
            website to complete their broadband bill payment by clicking on
            ‘Broadband’ in the ‘Recharges and Bill Payments’ section and
            populating the necessary details. Various payment modes are
            available.
          </li>
          <li>
            <strong>
              How long does it take to process the Broadband Bill Payment?
            </strong>
            <br />
            Payments on ABDKS Solutions Private Limited are instant and easy. Once a user confirms the
            broadband bill payment, it is instantly reflected in their account.
            Processing times by different broadband operators may vary.
          </li>
          <li>
            <strong>
              Does ABDKS Solutions Private Limited support all operators for Broadband Bill Payment?
            </strong>
            <br />
            ABDKS Solutions Private Limited allows users to make online broadband bill payments across
            a wide range of operators, including ACT Fibernet, Airtel, ASIANET,
            BSNL, Comway, Connect, DEN, ION, and many more.
          </li>
          <li>
            <strong>
              What offers and cashback is ABDKS Solutions Private Limited providing for Broadband Bill
              Payment?
            </strong>
            <br />
            Users can browse through the available broadband bill payment offers
            while making payments or check out the offer section for ongoing
            broadband bill offers.
          </li>
          <li>
            <strong>How can I check my broadband bill?</strong>
            <br />
            By selecting the ‘Broadband Bill Payment’ option on ABDKS Solutions Private Limited and
            providing the necessary details, users can check their broadband
            bills.
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

export default FAQBroadbandBillPayment;
