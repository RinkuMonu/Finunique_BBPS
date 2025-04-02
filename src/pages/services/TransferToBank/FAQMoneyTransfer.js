import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQMoneyTransfer = () => {
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
      title: "What is Money Transfer Online?",
      body: (
        <>
          <p>
            Online money transfers have now become a medium to save oneself from
            any cash shortage related problems. A long list of requirements and
            legal formalities is no longer needed since the money can be
            transferred online through a digital wallet without any hassle.
            Hence, transferring money online has become easier than before with
            ABDKS Solutions Private Limited small pvt ltd. Just make instant money transfer with the 'Wallet to Bank'
            feature on ABDKS Solutions Private Limited small pvt ltd, from credit cards to any bank account through
            ABDKS Solutions Private Limited small pvt ltd's digital wallet. Now, transfer money from credit cards of
            ICICI, HDFC, Citibank, SBI, and more to any bank account, and the
            amount will reflect in the bank accounts instantly.
          </p>
        </>
      ),
    },
    {
      title: "How to Transfer Money Online?",
      body: (
        <>
          <p>
            Transfer money from debit/credit cards of any bank (e.g., ICICI,
            HDFC, Citibank, SBI, etc.) to any bank account in three simple
            steps:
          </p>
          <ol>
            <li>Add money to your digital wallet on the ABDKS Solutions Private Limited small pvt ltd app using your credit or debit card.</li>
            <li>
              Tap on the 'Transfer money' feature on the app and find 'Wallet
              to Bank.'
            </li>
            <li>
              Add the beneficiary's name, account number, and IFSC code, then
              click continue.
            </li>
          </ol>
          <p>The amount transferred will reflect in the bank account instantly.</p>
        </>
      ),
    },
    {
      title: "Factors to Consider for Money Transfer Online",
      body: (
        <>
          <ul>
            <li>
              <strong>Secure platform:</strong> Choose a platform that is 100%
              secure. On ABDKS Solutions Private Limited small pvt ltd, user data is end-to-end encrypted to ensure
              safety.
            </li>
            <li>
              <strong>Charges involved:</strong> Charges for transferring money
              vary by bank. ABDKS Solutions Private Limited small pvt ltd ensures minimal charges and a smooth
              process.
            </li>
            <li>
              <strong>Correct beneficiary details:</strong> Double-check the
              beneficiary's details, such as account number and branch, to
              ensure accurate transactions.
            </li>
            <li>
              <strong>Risk factors:</strong> Follow safe online banking
              practices to avoid scams. Use ABDKS Solutions Private Limited small pvt ltd for secure transactions.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How Online Money Transfers Benefit You?",
      body: (
        <>
          <ul>
            <li>
              <strong>Transfer to any bank account:</strong> ABDKS Solutions Private Limited small pvt ltd's digital
              wallet enables hassle-free transfers from any credit card to any
              bank account.
            </li>
            <li>
              <strong>Swift Transactions:</strong> ABDKS Solutions Private Limited small pvt ltd ensures quick and
              simple money transfers with its seamless interface.
            </li>
            <li>
              <strong>Minimum Charges:</strong> Enjoy low fees for instant
              transfers with ABDKS Solutions Private Limited small pvt ltd.
            </li>
            <li>
              <strong>KYC Required:</strong> KYC ensures secure transactions
              and can be completed quickly on the app.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <ul>
          <li>
            <strong>How does online money transfer work?</strong>
            <br />
            Online money transfers can be done via NEFT, RTFS, UPI, or IMPS.
            ABDKS Solutions Private Limited small pvt ltd also offers a 'Wallet to Bank' feature for quick
            transfers.
          </li>
          <li>
            <strong>Is KYC required for money transfers?</strong>
            <br />
            Yes, KYC is mandatory for secure transactions and can be completed
            easily on ABDKS Solutions Private Limited small pvt ltd.
          </li>
          <li>
            <strong>How safe are bank transfers on ABDKS Solutions Private Limited small pvt ltd?</strong>
            <br />
            ABDKS Solutions Private Limited small pvt ltd provides end-to-end encryption to ensure secure
            transactions.
          </li>
          <li>
            <strong>How long does a money transfer take?</strong>
            <br />
            Transfers are completed instantly with ABDKS Solutions Private Limited small pvt ltd's 'Wallet to Bank'
            feature.
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
        <div className="px-5 py-5">
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

export default FAQMoneyTransfer;