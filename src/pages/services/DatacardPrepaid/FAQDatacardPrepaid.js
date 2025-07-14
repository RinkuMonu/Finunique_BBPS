import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const FAQDatacardPrepaid = () => {
  const content = [
    {
      title: "What is a Datacard Prepaid recharge?",
      body: (
        <>
          A Datacard Prepaid recharge is used to top up your internet balance for wireless data cards like JioFi or other prepaid dongle devices. It allows continued access to internet services based on your plan.
        </>
      ),
    },
    {
      title: "How do I recharge my Datacard Prepaid online?",
      body: (
        <>
          Simply select your Datacard operator, enter the datacard/mobile number linked with your device, validate it, and proceed to make the payment. The recharge is usually processed instantly.
        </>
      ),
    },
    {
      title: "What details are required to recharge a datacard?",
      body: (
        <>
          You typically need to select your operator and enter the mobile number associated with the datacard. Some operators may require additional details such as the device ID or registered number.
        </>
      ),
    },
    {
      title: "How do I find my Datacard number?",
      body: (
        <>
          You can find your datacard number by checking your device dashboard, user manual, or the SIM card associated with the datacard. For JioFi and similar devices, the number is usually the mobile number linked to the SIM inside the dongle.
        </>
      ),
    },
    {
      title: "What if my recharge fails?",
      body: (
        <>
          If your recharge fails but payment is deducted, the amount is usually refunded automatically within 3–5 business days. You can also contact our support team with your transaction ID for assistance.
        </>
      ),
    },
    {
      title: "Which operators are supported?",
      body: (
        <>
          We support major prepaid datacard operators including JioFi, Airtel, Vi, BSNL, and more. Availability may vary based on your region and the operator's online recharge services.
        </>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ color: "#003366", fontWeight: "bold" }}>
        Datacard Prepaid Recharge - Frequently Asked Questions
      </h2>

      <div className="timeline">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content glassy-bg p-4 shadow-sm rounded">
              <h4 className="fw-bold mb-3 text-gradient">{item.title}</h4>
              <div>{item.body}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          margin-left: 20px;
        }
        .timeline-card {
          position: relative;
          margin-bottom: 50px;
        }
        .timeline-marker {
          position: absolute;
          left: -27px;
          top: 20px;
          width: 12px;
          height: 12px;
          background: #fcbf49;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 0 4px rgba(252, 191, 73, 0.3);
        }
        .glassy-bg {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Container>
  );
};

export default FAQDatacardPrepaid;
