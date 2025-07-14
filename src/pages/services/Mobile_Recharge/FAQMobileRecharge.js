import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const FAQMobileRecharge = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = [
    {
      title: "Quick, Safe, and Real-Time Recharge with ABDKS",
      body: "Experience uninterrupted recharge on India's most reliable BBPS system. ABDKS offers secure, real-time recharges to support all major networks, anytime, anywhere.",
    },
    {
      title: "Operators Supported Across India",
      body: "Recharge Jio, Airtel, VI, and BSNL — both prepaid and postpaid — all through one powerful BBPS interface.",
    },
    {
      title: "How to Recharge with ABDKS",
      body: "Choose operator → Enter number → Pick plan or amount → Pay → Receive instant confirmation & receipt. Super easy!",
    },
    {
      title: "Why Choose Our Platform",
      body: "Zero downtime, instant settlements, all payment modes, and mobile-friendly interface make ABDKS the perfect choice for retailers.",
    },
    {
      title: "Grow Your Business as a Retailer",
      body: "Earn commissions, serve more customers, and become part of India’s fast-growing BBPS retail network.",
    },
    {
      title: "Start Your BBPS Journey",
      body: (
        <>
          <p>Expand your business with ABDKS BBPS today. No hidden costs. High margins. Complete support.</p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="#" className="btn px-4 btn-warning text-dark fw-semibold shadow-sm">
              Start Recharging
            </Link>
            <Link to="/createaccount" className="btn btn-outline-secondary px-4 fw-semibold">
              Become a Partner
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
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
              {typeof item.body === "string" ? (
                <p className="text-muted">{item.body}</p>
              ) : (
                item.body
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQMobileRecharge;
