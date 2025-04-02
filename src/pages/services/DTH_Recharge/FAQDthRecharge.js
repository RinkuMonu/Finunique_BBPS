import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQDthRecharge = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = [
    {
      title: "How to Make DTH Recharge Online",
      body: (
        <>
          <p>
            DTH is one good source of entertainment for the audiences & timely
            recharge for the same is vital for the constant grasp of content.
            There are many options online for instant recharge but ABDKS Solutions Private Limited is
            a leading payment wallet that allows users to make recharges and
            bill payments with a button click. On the ABDKS Solutions Private Limited platform, the
            users can get their DTH recharge done and enjoy uninterrupted DTH
            services. Online DTH recharge via ABDKS Solutions Private Limited is a simple process, and
            the users can avail a variety of the best DTH recharge offers.
            Online DTH recharge can be done via ABDKS Solutions Private Limited
          </p>
          <ol>
            <li>
              Go to the recharge and bill payment section on the ABDKS Solutions Private Limited
              website or app.
            </li>
            <li>Select ‘DTH’ as a category.</li>
            <li>
              Select the operator, e.g., Airtel DTH recharge, Dish TV recharge,
              etc.
            </li>
            <li>Enter your customer ID.</li>
            <li>
              Check for available DTH recharge plans for the selected operator
              or enter the amount manually.
            </li>
          </ol>
          <p>
            With this, your DTH recharge will be done within minutes. ABDKS Solutions Private Limited
            provides multiple payment modes like UPI, wallet, credit card, debit
            card, Pay Later (ZIP), and net banking.
          </p>
        </>
      ),
    },
    {
      title: "Why Choose ABDKS Solutions Private Limited for DTH Recharge Online",
      body: (
        <>
          <p>
            If you seek to make DTH recharge online while enjoying exciting DTH
            recharge offers, discounts, and cashback, then ABDKS Solutions Private Limited is the right
            platform. Benefits include:
          </p>
          <ul>
            <li>
              <strong>Free online DTH recharge:</strong> No transaction fee is
              chargeable.
            </li>
            <li>
              <strong>Exciting deals and offers:</strong> Discounts, cashback,
              and coupons to maximize savings.
            </li>
            <li>
              <strong>Safe and secure:</strong> Payment details are encrypted
              and not shared with third parties.
            </li>
            <li>
              <strong>Available across all operators:</strong> Airtel DTH, Dish
              TV, Tata Sky, etc.
            </li>
            <li>
              <strong>Simple and seamless:</strong> Recharge within minutes by
              providing basic details.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions about DTH Recharge",
      body: (
        <ul>
          <li>
            <strong>
              How long does it take to process DTH Recharge Online?
            </strong>
            <br />
            Transactions are completed within minutes. Depending on the
            operator, the balance reflects shortly after.
          </li>
          <li>
            <strong>
              Does ABDKS Solutions Private Limited support all operators for DTH recharge?
            </strong>
            <br />
            Yes, it supports Airtel DTH, Dish TV, Tata Sky, Videocon D2H, and
            Sun Direct.
          </li>
          <li>
            <strong>How to check DTH balance online?</strong>
            <br />
            The process varies by operator. Check the balance via the operator’s
            website, app, or customer support.
          </li>
          <li>
            <strong>What payment options are available on ABDKS Solutions Private Limited?</strong>
            <br />
            Payment options include UPI, credit/debit cards, internet banking,
            and wallet balance.
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

export default FAQDthRecharge;