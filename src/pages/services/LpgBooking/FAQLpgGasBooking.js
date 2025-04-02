import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQLpgGasBooking = () => {
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
      title: "Why to Choose Online Gas Booking",
      body: (
        <>
          <p>
            No LPG to cook? No worries, you can book cylinder online instantly
            and easily using the ABDKS Solutions Private Limited app or webpage. ABDKS Solutions Private Limited allows its
            users to make LPG bookings online and offers exciting deals for LPG
            gas bookings and enables users to make their gas bill payments
            online without any hassle. Making online gas booking through
            ABDKS Solutions Private Limited  is easy and instant and offers great
            savings. Thus, ABDKS Solutions Private Limited is the best platform for online gas payment
          </p>
        </>
      ),
    },
    {
      title: "How to Book LPG Gas Online",
      body: (
        <>
          <ol>
            <li>
              In Recharge and Bill Payments section, click on LPG Booking.
            </li>
            <li>Select your gas booking operator.</li>
            <li>Select the state you belong to.</li>
            <li>Now select your district.</li>
            <li>Choose your distributor from the dropdown.</li>
            <li>Enter your gas booking no or your Consumer Number.</li>
            <li>
              Make the payment using a preferred method like UPI, Credit Card,
              Debit Card, Wallet, or Net Banking.
            </li>
          </ol>
          <p>
            You can also opt for the pay later option, 'Zip', to make your
            payment now and pay back later.
          </p>
        </>
      ),
    },
    {
      title: "Benefits of Online Gas Booking",
      body: (
        <>
          <ul>
            <li>No additional fees/ charges are levied on gas bill online.</li>
            <li>One of the easiest methods for LPG gas booking.</li>
            <li>
              Helps avoid traveling to the gas agency or taking constant
              follow-ups with the distributor.
            </li>
            <li>
              Can be booked anytime, anywhere, ensuring great convenience.
            </li>
            <li>Easy and instant payment for online LPG cylinder booking.</li>
            <li>
              Various payment options like Debit/Credit Card, UPI, or Net
              Banking, eliminating the need for cash.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Use ABDKS Solutions Private Limited small pvt ltd . for LPG Booking?",
      body: (
        <>
          <ul>
            <li>
              <strong>Free of cost online LPG gas connection:</strong> ABDKS Solutions Private Limited small pvt ltd .
              does not charge any amount for online LPG gas booking.
            </li>
            <li>
              <strong>Safe and secure transactions:</strong> All payments are
              secure and reflect instantly in your transaction history.
            </li>
            <li>
              <strong>Multiple payment options:</strong> Choose from Credit
              Card, Debit Card, UPI, and more.
            </li>
            <li>
              <strong>Quick and simple process:</strong> Provide basic details,
              and your booking is completed instantly.
            </li>
            <li>
              <strong>Discounts and Cashback offers:</strong> Enjoy lucrative
              deals and offers, making your booking more affordable.
            </li>
            <li>
              <strong>Pay Later option:</strong> Use 'Zip' to book now and pay
              later, enhancing your payment experience.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "ABDKS Solutions Private Limited small pvt ltd . Provides Irresistible Deals on LPG Gas Booking",
      body: (
        <>
          <p>
            ABDKS Solutions Private Limited small pvt ltd . offers SuperCash and Cashback on LPG gas booking online
            payments. These deals make it an ideal platform for users to book
            gas cylinders conveniently while saving time and money. Make your
            booking today and avail the best offers on Bharat Gas, HP Gas, and
            Indane Gas bookings.
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

export default FAQLpgGasBooking;
