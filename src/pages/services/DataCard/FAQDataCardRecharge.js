import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQDataCardRecharge = () => {
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
      title: "About Data Card Recharge",
      body: (
        <>
          <p>
            In today’s time, wherever you may go, the internet must follow.
            Online data card recharge allows a user to enjoy uninterrupted
            internet service on their smartphone. With monthly, quarterly or
            annual data card recharge plans, users can avail seamless browsing,
            online streaming and downloading services. The data card recharge
            plans vary for each network operator and time period. ABDKS Solutions Private Limited
            ensures an instant and simple process of online data card recharge,
            dongle recharge, modem recharge, dongle recharge plans, wifi dongle
            recharge plans and more. Instant data card recharge ensures internet
            access to all the users.
          </p>
        </>
      ),
    },
    {
      title: "How to Recharge Data Card Online Instantly",
      body: (
        <>
          <p>
            Online data card recharge via ABDKS Solutions Private Limited is a simple and a quick
            process. In order to avail the data card recharge plans online and
            enjoy huge data card recharge offers at the same time, a user must
            only follow the following simple steps.
          </p>
          <ol>
            <li>
              Select ‘Data Card’ from ‘Recharge and Bill Payments’ section on
              the ABDKS Solutions Private Limited app/ website
            </li>
            <li>
              Enter your Data card number, choose the operator and add the
              amount for Prepaid/Postpaid connection
            </li>
            <li>Click ‘Continue’ and proceed to pay</li>
            <li>
              Select a suitable payment mode and complete your online data card
              recharge
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Why Choose ABDKS Solutions Private Limited for Data Card Recharge",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited ensures ease and convenience to all its users. It is the
            only Truly Indian payments app which allows one-tap data card
            recharge. In addition to ensuring an easy way of online data card
            recharge, ABDKS Solutions Private Limited also ensures exciting online data card recharge
            offers including huge Cashback and SuperCash offers. Following are
            the key benefits of making online data card recharge using ABDKS Solutions Private Limited.
          </p>
          <ul>
            <li>
              <strong>Instant Payment:</strong> On ABDKS Solutions Private Limited all internet service
              recharges including data card recharge plans, dongle recharge
              plans, modem recharge plans and wifi dongle recharge plans are
              just a click away. ABDKS Solutions Private Limited ensures a seamless process of making
              the online data card recharge
            </li>
            <li>
              <strong>Data card recharge offers:</strong> With the ABDKS Solutions Private Limited app,
              users can earn and save big on every payment with Cashback and
              SuperCash offers
            </li>
            <li>
              <strong>Secured Transactions:</strong> Every transaction you make
              using the ABDKS Solutions Private Limited app or website is highly secured. The app
              assures the utmost safety and confidentiality as you pay for your
              online data card recharge
            </li>
            <li>
              <strong>Data Card Recharge Offers:</strong> On ABDKS Solutions Private Limited, a user
              gets huge variety of offers. A user may earn or use his/her
              SuperCash balance on the online data card recharge payment. A user
              may also get a huge Cashback depending on the ongoing data card
              recharge offer.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Question on Data Card Recharge",
      body: (
        <ul>
          <li>
            <strong>How do I recharge my dongle?</strong>
            <br />A user can easily avail dongle recharge plans on ABDKS Solutions Private Limited
            under ‘Recharges and bill payment’ section by providing the operator
            name and making the payment
          </li>
          <li>
            <strong>What is a data card for Internet access?</strong>
            <br />A data card is a removable electronic card that allows data
            storage and internet access in a particular device.
          </li>
          <li>
            <strong>What is difference between data card and dongle?</strong>
            <br />A data card is a removable electronic card which allows data
            storage or is used to carry out data operations. A dongle, on the
            other hand, is used for enabling services like software protection,
            audio-video, etc. A dongle used for connection to mobile broadband
            is also referred to as a data card
          </li>
          <li>
            <strong>Is dongle faster than mobile Internet?</strong>
            <br />
            Both dongle and mobile internet are offered by a wide range of
            operators and the quality of service varies. While a dongle is used
            for internet access in laptop/ computer devices, mobile internet is
            needed for continuous internet access throughout the day. Hence, a
            user must opt for either based on his/her need or requirement.
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

export default FAQDataCardRecharge;
