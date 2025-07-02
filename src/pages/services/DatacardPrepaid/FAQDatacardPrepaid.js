import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQDatacardPrepaid = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ color: "#003366", fontWeight: "bold" }}>
        Datacard Prepaid Recharge - Frequently Asked Questions
      </h2>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is a Datacard Prepaid recharge?</Accordion.Header>
          <Accordion.Body>
            A Datacard Prepaid recharge is used to top up your internet balance for wireless data cards like JioFi or other prepaid dongle devices. It allows continued access to internet services based on your plan.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I recharge my Datacard Prepaid online?</Accordion.Header>
          <Accordion.Body>
            Simply select your Datacard operator, enter the datacard/mobile number linked with your device, validate it, and proceed to make the payment. The recharge is usually processed instantly.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What details are required to recharge a datacard?</Accordion.Header>
          <Accordion.Body>
            You typically need to select your operator and enter the mobile number associated with the datacard. Some operators may require additional details such as the device ID or registered number.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I find my Datacard number?</Accordion.Header>
          <Accordion.Body>
            You can find your datacard number by checking your device dashboard, user manual, or the SIM card associated with the datacard. For JioFi and similar devices, the number is usually the mobile number linked to the SIM inside the dongle.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>What if my recharge fails?</Accordion.Header>
          <Accordion.Body>
            If your recharge fails but payment is deducted, the amount is usually refunded automatically within 3–5 business days. You can also contact our support team with your transaction ID for assistance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Which operators are supported?</Accordion.Header>
          <Accordion.Body>
            We support major prepaid datacard operators including JioFi, Airtel, Vi, BSNL, and more. Availability may vary based on your region and the operator's online recharge services.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQDatacardPrepaid;
