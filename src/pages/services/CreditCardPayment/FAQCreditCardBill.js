import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQCreditCardPayment = () => {
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
      title: "About Credit Card Bill Payment",
      body: (
        <>
          <p>
            A credit card allows you to use short-term credit from their banks
            for immediate payments. For credit card users, it is very important
            to remember the credit card bill date. Therefore, the user shall
            clear the dues monthly. If you don't pay the Credit Card Bill on
            time, you are charged with interest. Further, untimely payment of
            the credit card bill also leads to a late fee. To avoid unnecessary
            late fees and interest on credit card processing, you can instantly
            make online credit card payments using ABDKS Solutions Private Limited
          </p>
          <p>
            ABDKS Solutions Private Limited provides a convenient and seamless experience for users to
            pay their credit card bills online, ensuring timely payments and
            savings.
          </p>
        </>
      ),
    },
    {
      title: "How to Make Credit Card Bill Payment on ABDKS Solutions Private Limited",
      body: (
        <>
          <p>
            Follow these simple steps to pay your credit card bill online for
            any bank, including HDFC Bank, SBI, Axis Bank, and more:
          </p>
          <ol>
            <li>
              Download the ABDKS Solutions Private Limited app from the Play Store (Android) or App
              Store (iOS).
            </li>
            <li>Login using your mobile number and OTP.</li>
            <li>
              Navigate to the "Recharge and Bill Pay" section or tap "Credit
              Card Payment."
            </li>
            <li>Enter your credit card number and the billing amount.</li>
            <li>Apply available coupons, if any.</li>
            <li>Click "Proceed" and select your preferred payment mode.</li>
            <li>Enter the required details and tap "Pay Now."</li>
          </ol>
        </>
      ),
    },
    {
      title: "Supported Credit Cards for Payment",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited supports credit card payments for a wide range of banks,
            including:
          </p>
          <ul>
            <li>HDFC Bank</li>
            <li>SBI</li>
            <li>Axis Bank</li>
            <li>ICICI Bank</li>
            <li>American Express</li>
            <li>Canara Bank</li>
            <li>Standard Chartered Bank</li>
            <li>Yes Bank</li>
            <li>And many more...</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions about Credit Card Payment",
      body: (
        <ul>
          <li>
            <strong>Can I only pay the minimum due amount?</strong>
            <br />
            Yes, you can, but regular minimum payments can negatively impact
            your credit score.
          </li>
          <li>
            <strong>When should I pay my credit card bill?</strong>
            <br />
            Always pay before the due date to avoid late fees and interest
            charges.
          </li>
          <li>
            <strong>How much should I pay to avoid interest?</strong>
            <br />
            To avoid interest, pay the total outstanding amount before the grace
            period expires.
          </li>
          <li>
            <strong>Does late payment affect my credit score?</strong>
            <br />
            Yes, late payments can lower your credit score and suggest
            unreliability as a borrower.
          </li>
          <li>
            <strong>How long does it take to process the payment?</strong>
            <br />
            Payments made via ABDKS Solutions Private Limited usually take 2-3 business days to
            process.
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

export default FAQCreditCardPayment;
