import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQGasBillPayment = () => {
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
      title: "About Online Gas Bill Payment",
      body: (
        <>
          <p>
            With the increased use of smartphones and one click payment
            services, online gas bill payments are now easier than ever. Paying
            gas bills online is fast, easy and highly secured. There are
            multiple options available to make gas bill payment online through
            website . No need to spend hours in long queues, ABDKS Solutions Private Limited is one of
            the best ways to complete online gas bill payment in less than a
            minute.
          </p>
        </>
      ),
    },
    {
      title: "How to Make Gas Bill Payment Online at ABDKS Solutions Private Limited?",
      body: (
        <>
          <p>
            Timely gas bill payment is very important to ensure uninterrupted
            services. To avoid delays, paying gas bills online is the best way
            out. A user can make the online gas payment using the ABDKS Solutions Private Limited app
            or by visiting the website. ABDKS Solutions Private Limited completes the gas bill payment
            cycle in minimal steps. Below are the mentioned steps to pay gas
            bill online using the app:
          </p>
          <ol>
            <li>
              Go to the ‘Recharges & Bill payment’ section and select ‘Piped
              Gas’ on the ABDKS Solutions Private Limited app.
            </li>
            <li>Choose your operator and enter the Customer ID.</li>
            <li>
              The user will get the bill details online, press ‘Continue’ to
              proceed.
            </li>
            <li>
              Complete the online bill payment using one of the payment methods
              like wallet, UPI, Debit/Credit.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Benefits of Gas Bill Payment Online",
      body: (
        <>
          <p>
            The benefits of gas bill payment online are hard to ignore. In the
            busy life, paying gas bills online is the best and fastest way. With
            instant online payment platforms like ABDKS Solutions Private Limited, online gas payment
            is now easier than ever.
          </p>
          <ul>
            <li>
              <strong>Secured payments:</strong> Gone are the days when online
              transactions were the reason to be worried. With payment methods
              like ABDKS Solutions Private Limited, user’s money, data, and transactions are highly
              protected.
            </li>
            <li>
              <strong>One tap away:</strong> All a user needs to do is open the
              app or website and make one click to complete the online gas
              payment. It is that fast and quick.
            </li>
            <li>
              <strong>Easy to pay:</strong> The account setup to make the online
              gas payment is very simple. No paperwork or formalities are
              required, a user just needs to add the payment details and the gas
              bill payment is done.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Use ABDKS Solutions Private Limited for Gas Bill Payment?",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited, one of India’s largest digital payment apps, offers you
            fast, smooth, and hassle-free transactions. It not just saves time
            but also excites you with many gas bill payment offers. Gas payment
            was never this easy before; using the ABDKS Solutions Private Limited app it is a few-step
            process. Here are the few listed benefits of using the ABDKS Solutions Private Limited app
            to pay gas bills:
          </p>
          <ul>
            <li>
              <strong>Instant Payments:</strong> Pay gas bills quickly in almost
              less than a minute using the ABDKS Solutions Private Limited app. It’s easy and with
              multiple payment modes becomes convenient for a user.
            </li>
            <li>
              <strong>More discounts:</strong> Using the ABDKS Solutions Private Limited app, a user
              can get unlimited offers and discounts on every gas payment. One
              can avail of gas bill offers and save more on every checkout.
            </li>
            <li>
              <strong>Secured Transactions:</strong> While paying the gas bill
              using ABDKS Solutions Private Limited, safety is guaranteed to the user. The user data
              and account details are highly protected.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions on Gas Bill Payment Online",
      body: (
        <ul>
          <li>
            <strong>How do I pay my gas bill online?</strong>
            <br />
            To pay the gas bill, a user can simply visit the ABDKS Solutions Private Limited website or
            open the app. In the ‘Recharge and bill payments’ section, one has
            to select the option ‘Piped gas’. Select the operator name and add
            the customer id. The user will get the bill details automatically.
            By clicking on ‘Continue’ one can make the gas bill payment choosing
            their desired payment mode.
          </li>
          <li>
            <strong>Can I pay my gas bill with a credit card?</strong>
            <br />
            Yes. To make a gas bill payment using a credit card, a user has to
            select the mode of payment as ‘Credit card’ and enter their details.
            The gas bill payment through the ABDKS Solutions Private Limited app will be successful.
          </li>
          <li>
            <strong>How do I calculate my gas bill?</strong>
            <br />
            In order to know your gas bill, a user can note the meter reading
            and simply send it to their respective operator. The gas bill will
            be received via registered contact details.
          </li>
          <li>
            <strong>How much is your average gas bill?</strong>
            <br />
            The average gas bill of a user depends on the usage and the
            frequency. To know about the gas bill, one can contact their
            respective operator for the details.
          </li>
          <li>
            <strong>Can a gas leak cause a high gas bill?</strong>
            <br />
            There are possibilities that a gas leak may result in a high gas
            bill. The bill raised to the end user is as per the usage, if the
            usage is more, the gas bill will be higher.
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

export default FAQGasBillPayment;
