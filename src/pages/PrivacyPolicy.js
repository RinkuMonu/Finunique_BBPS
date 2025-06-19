import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Nav,
  Tab,
} from "react-bootstrap";
import privacyImg from "../Assets/images/policy.png"; 
const PRIVACY_SECTIONS = [
  {
    key: "1",
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to ABDKS Solutions Private Limited ("ABDKS," "we," "our," or
          "us"). We are committed to respecting and protecting the privacy of
          our users, clients, merchants, distributors, and partners. This
          Privacy Policy outlines how we collect, use, disclose, store, and
          protect your personal and business information when you interact with
          our services via our website, mobile apps, APIs, and associated
          digital platforms (collectively, the "Services").
        </p>
        <p className="mb-0">
          By using our Services, you consent to the terms outlined in this
          Privacy Policy. If you do not agree with any part of this policy,
          please refrain from accessing or using our Services.
        </p>
      </>
    ),
  },
  {
    key: "2",
    title: "Scope",
    content: (
      <p className="mb-0">
        This policy applies to all users of our services including mobile apps,
        APIs, retailers, distributors, and website visitors. It does not apply
        to third-party platforms linked from ABDKS services.
      </p>
    ),
  },
  {
    key: "3",
    title: "Information We Collect",
    content: (
      <ul className="list-unstyled">
        <li className="mb-2">
          <strong className="text-primary">Personal Info:</strong> Name, email,
          phone, Aadhaar, PAN, bank details, etc.
        </li>
        <li className="mb-2">
          <strong className="text-primary">Business Info:</strong> Retailer ID,
          shop details, commissions.
        </li>
        <li className="mb-2">
          <strong className="text-primary">KYC:</strong> Government ID scans,
          photos, biometrics.
        </li>
        <li className="mb-2">
          <strong className="text-primary">Transactions:</strong> Payments,
          recharges, DMT logs, etc.
        </li>
        <li className="mb-2">
          <strong className="text-primary">Device Data:</strong> OS, IP,
          browser, device ID.
        </li>
        <li className="mb-2">
          <strong className="text-primary">Location:</strong> GPS and IP-based
          geo-data.
        </li>
        <li className="mb-0">
          <strong className="text-primary">Cookies:</strong> Session, analytics,
          tracking.
        </li>
      </ul>
    ),
  },
  {
    key: "4",
    title: "Purpose of Collection",
    content: (
      <ul className="list-check">
        <li>To deliver and improve our services</li>
        <li>Account/KYC verification</li>
        <li>Promotional and transactional communication</li>
        <li>Legal and regulatory compliance</li>
        <li>Fraud detection and personalization</li>
      </ul>
    ),
  },
  {
    key: "5",
    title: "Sharing of Information",
    content: (
      <ul className="list-check">
        <li>With banks, APIs, BBPS/NPCI partners</li>
        <li>Government bodies (as per law)</li>
        <li>Authorized distributors and group companies</li>
        <li>In cases of merger, acquisition, legal notice</li>
      </ul>
    ),
  },
  {
    key: "6",
    title: "User Responsibilities",
    content: (
      <p className="mb-0">
        You are responsible for safeguarding your credentials and ensuring your
        data is accurate. Report any unauthorized use immediately. We are not
        liable for misuse due to negligence.
      </p>
    ),
  },
  {
    key: "7",
    title: "AI-Based Fraud Detection",
    content: (
      <p className="mb-0">
        We use AI to monitor transactions, flag anomalies, and reduce fraud
        risks. These tools do not make decisions without human oversight.
      </p>
    ),
  },
  {
    key: "8",
    title: "Data Portability",
    content: (
      <p className="mb-0">
        Users may request export or deletion of their data. Processing time: up
        to 7 working days after verification.
      </p>
    ),
  },
  {
    key: "9",
    title: "Retailer & Distributor Data",
    content: (
      <p className="mb-0">
        Commission and activity reports are shared with authorized mapped users
        only under strict confidentiality.
      </p>
    ),
  },
  {
    key: "10",
    title: "International Compliance",
    content: (
      <p className="mb-0">
        We align with GDPR and India's DPDP Act. Users may access, correct, or
        request deletion of their data per law.
      </p>
    ),
  },
  {
    key: "11",
    title: "Legal Jurisdiction",
    content: (
      <p className="mb-0">
        All disputes will be governed by Indian law, under courts in Jaipur,
        Rajasthan.
      </p>
    ),
  },
  {
    key: "12",
    title: "Updates to Policy",
    content: (
      <p className="mb-0">
        We may revise this policy from time to time. Updates will be posted via
        email or platform banners. Last reviewed: June 2, 2025.
      </p>
    ),
  },
  {
    key: "13",
    title: "Contact Information",
    content: (
      <div className="contact-info">
        <p>
          <strong>Grievance Officer:</strong> Mr. Dinesh Kumar
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:grievance@abdks.com">grievance@abdks.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
        <p>
          <strong>Address:</strong> Plot No 97, Dakshinpuri-I, Shrikishanpura,
          Sanganer, Jagatpura, Jaipur, Rajasthan, 302017
        </p>
        <p>
          <strong>Support:</strong>{" "}
          <a href="mailto:support@abdks.com">support@abdks.com</a>
        </p>
        <p className="mb-0">
          <strong>Website:</strong>{" "}
          <a
            href="https://www.abdks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.abdks.com
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Color palette
  const colors = {
    primary: "orange",
    secondary: "#4f46e5",
    accent: "#22d3ee",
    light: "#dce8fc",
    dark: "#1e293b",
    text: "#334155",
    border: "#e2e8f0",
  };

  return (
    <div
      className="privacy-policy-page mt-4"
      style={{ backgroundColor: colors.light }}
    >
      <div className="container pt-5">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={privacyImg}
              alt="Privacy Policy"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                borderradius: "8px",
                boxshadow: " 0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <h1 className="mb-3">Privacy Policy</h1>
            <h5 className="text-muted mb-4">Your data, our responsibility.</h5>
            <p>
              We respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data when you use our application.
            </p>
            <p>
              By using our services, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={10} className="text-center">
            <div className="icon-wrapper my-5">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1
              className="display-5 fw-bold mb-3"
              style={{ color: colors.dark }}
            >
              Privacy Policy
            </h1>
            <p className="lead" style={{ color: colors.text }}>
              Last updated: June 2, 2025 | Effective from: June 2, 2025
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Card
              className="shadow-sm overflow-hidden"
              style={{
                border: "none",
                borderRadius: "12px",
                backgroundColor: "white",
              }}
            >
              <Card.Body className="p-4 p-lg-5">
                <section className="mb-5">
                  <h2 className="h4 mb-4" style={{ color: colors.primary }}>
                    ABDKS Solutions Private Limited
                  </h2>
                  <p style={{ color: colors.text }}>
                    This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you use our services.
                  </p>
                </section>

                {isMobile ? (
                  <Accordion defaultActiveKey={activeKey} flush>
                    {PRIVACY_SECTIONS.map((item, index) => (
                      <Accordion.Item
                        key={item.key}
                        eventKey={index.toString()}
                        style={{
                          borderBottom: `1px solid ${colors.border}`,
                          marginBottom: "1rem",
                        }}
                      >
                        <Accordion.Header
                          style={{
                            fontWeight: "600",
                            color: colors.dark,
                            backgroundColor: "transparent",
                          }}
                        >
                          <span
                            style={{
                              color: colors.primary,
                              marginRight: "8px",
                            }}
                          >
                            {index + 1}.
                          </span>
                          {item.title}
                        </Accordion.Header>
                        <Accordion.Body style={{ color: colors.text }}>
                          {item.content}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                ) : (
                  <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                    <Row>
                      <Col md={4}>
                        <Nav
                          variant="pills"
                          className="flex-column sticky-top"
                          style={{ top: "20px" }}
                        >
                          {PRIVACY_SECTIONS.map((item, index) => (
                            <Nav.Item key={item.key} className="mb-2">
                              <Nav.Link
                                eventKey={index.toString()}
                                style={{
                                  color:
                                    activeKey === index.toString()
                                      ? "white"
                                      : colors.text,
                                  backgroundColor:
                                    activeKey === index.toString()
                                      ? colors.primary
                                      : "transparent",
                                  border: `1px solid ${colors.border}`,
                                  borderRadius: "8px",
                                  padding: "12px 16px",
                                  fontWeight: "500",
                                  transition: "all 0.2s ease",
                                  marginBottom: "4px",
                                }}
                                className="hover-effect"
                              >
                                <span
                                  style={{
                                    color:
                                      activeKey === index.toString()
                                        ? "white"
                                        : colors.primary,
                                    fontWeight: "600",
                                    marginRight: "8px",
                                  }}
                                >
                                  {index + 1}.
                                </span>
                                {item.title}
                              </Nav.Link>
                            </Nav.Item>
                          ))}
                        </Nav>
                      </Col>
                      <Col md={8}>
                        <Tab.Content>
                          {PRIVACY_SECTIONS.map((item, index) => (
                            <Tab.Pane
                              key={item.key}
                              eventKey={index.toString()}
                            >
                              <div
                                style={{
                                  padding: "24px",
                                  backgroundColor: "lightblue",
                                  borderRadius: "8px",
                                  border: `1px solid ${colors.border}`,
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                }}
                              >
                                <h5
                                  style={{
                                    color: colors.primary,
                                    fontWeight: "600",
                                    marginBottom: "16px",
                                    fontSize: "1.25rem",
                                  }}
                                >
                                  {index + 1}. {item.title}
                                </h5>
                                <div style={{ color: colors.text }}>
                                  {item.content}
                                </div>
                              </div>
                            </Tab.Pane>
                          ))}
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                )}

                <div
                  className="disclaimer mt-5 p-3 rounded"
                  style={{
                    backgroundColor: colors.light,
                    borderLeft: `4px solid ${colors.accent}`,
                  }}
                >
                  <p className="small mb-0" style={{ color: colors.text }}>
                    <strong style={{ color: colors.primary }}>
                      Disclaimer:
                    </strong>{" "}
                    This document ensures transparency and user rights. It
                    supersedes all previous versions.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .privacy-policy-page {
          min-height: 100vh;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .list-check {
          list-style-type: none;
          padding-left: 0;
        }
        .list-check li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .list-check li:before {
          content: "✓";
          color: ${colors.primary};
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .contact-info a {
          color: ${colors.primary};
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-info a:hover {
          color: ${colors.secondary};
          text-decoration: underline;
        }
        .hover-effect:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .icon-wrapper {
          background: ${colors.light};
          width: 100px;
          height: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid ${colors.border};
        }
      `}</style>
    </div>
  );
}
