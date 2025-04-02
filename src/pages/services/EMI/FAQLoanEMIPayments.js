import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQLoanEMIPayments = () => {
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
      title: "Pay Your Loan EMI Online Through ABDKS Solutions Private Limited small pvt ltd .",
      body: (
        <>
          <p>
            With us, your loan EMI payment online can be really convenient. Yes,
            we, ABDKS Solutions Private Limited – the leading digital wallet and provider of online
            payment services in India – have tied up with a number of companies
            such as Bajaj Finserv and so many others of its ilk to bring to you
            a portal that you can use to pay your estimated monthly installments
            (EMIs).
          </p>
        </>
      ),
    },
    {
      title: "More on What We Can Do for You",
      body: (
        <>
          <p>
            We can help make any and every personal loan EMI payment easier for
            you. You can do it from just about any device that you please. If
            you are a tech-savvy person and own a Smartphone or tablet phone,
            then you can make the payment from that device itself. In case you
            have a laptop with a killer internet connection, then you can use
            that as well. Even if it is just a rudimentary desktop that you
            have, you should not worry as we will help you pay from that as
            well.
          </p>
        </>
      ),
    },
    {
      title: "The Various Benefits That We Offer for You",
      body: (
        <>
          <p>
            We have assisted a lot of people in making their loan EMI payment
            online. When you try and make the payment from our interface, you
            would see to your utter delight that we have made it very easy and
            simple for you. You would now be able to make the payments quite
            easily in just a few steps.
          </p>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . offers instant personal loans with minimum documentation
            and a hassle-free experience.
          </p>
        </>
      ),
    },
    {
      title: "Supported Financial Units for EMI Payments",
      body: (
        <>
          <p>
            You can also make the loan EMI payment for other financial units
            such as L&T Finance, IDFC, Bajaj Finserv, Bajaj Auto Finance, Hero
            Fincorp, Indiabulls Finance, Aditya Birla Capital, and many more.
          </p>
        </>
      ),
    },
    {
      title: "FAQs",
      body: (
        <ul>
          <li>
            <strong>Can I pay my EMIs using any device?</strong>
            <br />
            Yes, ABDKS Solutions Private Limited small pvt ltd . allows you to pay EMIs from a smartphone, tablet,
            laptop, or desktop with an internet connection.
          </li>
          <li>
            <strong>Are my transactions secure on ABDKS Solutions Private Limited small pvt ltd .?</strong>
            <br />
            Absolutely. ABDKS Solutions Private Limited small pvt ltd . ensures all transactions are routed through
            secure gateways, protecting your personal and financial data.
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

export default FAQLoanEMIPayments;
