import React, { useState } from "react";
import wallet from "../../../Assets/images/wallet-transfer.png";
import "./wallet.css"

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Card,
  Accordion,
} from "react-bootstrap";

const WalletTransfer = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    amount: "",
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const [activeTab, setActiveTab] = useState("wallet");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const isWalletFormValid = formData.mobileNumber && formData.amount;
  const isBankFormValid =
    formData.beneficiaryName &&
    formData.accountNumber &&
    formData.ifscCode &&
    formData.amount;

  // Color palette
  const colors = {
    primary: "orange",
    secondary: "#4f46e5",
    accent: "#22d3ee",
    light: "#f8fafc",
    dark: "#1e293b",
    text: "#334155",
    border: "#e2e8f0",
  };

  return (
    <Container className="py-5 my-lg-5" style={{ maxWidth: "1200px" }}>
      <Row className="g-4">
        <Col lg={6} className="pe-lg-4">
          {/* Left Column - Content */}
          <div className="mb-5">
            <Row className="align-items-center">
              <Col xs={12} md={8}>
                <h1
                  className="display-5 fw-bold mb-3"
                  style={{ color: colors.dark }}
                >
                  Wallet Transfer
                </h1>
                <p className="lead mb-4" style={{ color: colors.primary }}>
                  Instant & Secure Fund Transfers
                </p>
              </Col>
              <Col xs={12} md={4} className="text-md-end">
                <img
                  src={wallet}
                  alt="Wallet Transfer"
                  className="img-fluid mb-4 rounded"
                  style={{ maxWidth: "200px" }}
                />
              </Col>
            </Row>
            <p style={{ color: colors.text }}>
              ABDKS Solutions Private Ltd. empowers users and retailers with a fast
              and secure wallet transfer feature. Whether you're distributing
              commission, transferring balance between sub-users, or managing
              operational funds, our wallet-to-wallet transfer system makes it
              easy.
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h3 className="h4 mb-3" style={{ color: colors.dark }}>
                    <i
                      className="bi bi-lightning-charge-fill me-2"
                      style={{ color: colors.primary }}
                    ></i>
                    Key Features
                  </h3>
                  <ul className="list-check">
                    <li>
                      <strong>Instant Transfers</strong> – Real-time balance updates
                    </li>
                    <li>
                      <strong>24x7 Availability</strong> – No weekend or holiday
                      delays
                    </li>
                    <li>
                      <strong>No Bank Dependency</strong> – Purely internal
                      wallet-based
                    </li>
                    <li>
                      <strong>Zero Transfer Fees</strong> – Completely free
                    </li>
                    <li>
                      <strong>Role-Based Transfers</strong> – Controlled by user
                      level
                    </li>
                    <li>
                      <strong>Transaction Logs</strong> – Fully auditable
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h3 className="h4 mb-3" style={{ color: colors.dark }}>
                    <i
                      className="bi bi-people-fill me-2"
                      style={{ color: colors.primary }}
                    ></i>
                    Who Can Use It?
                  </h3>
                  <ul className="list-icon">
                    <li>
                      <i
                        className="bi bi-person-fill me-2"
                        style={{ color: colors.primary }}
                      ></i>{" "}
                      Super Distributors
                    </li>
                    <li>
                      <i
                        className="bi bi-people-fill me-2"
                        style={{ color: colors.primary }}
                      ></i>{" "}
                      Retailers
                    </li>
                    <li>
                      <i
                        className="bi bi-headset me-2"
                        style={{ color: colors.primary }}
                      ></i>{" "}
                      Support Teams
                    </li>
                    <li>
                      <i
                        className="bi bi-geo-alt-fill me-2"
                        style={{ color: colors.primary }}
                      ></i>{" "}
                      Multi-Location Operators
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Column - Form */}
        <Col lg={6} className="ps-lg-4">
          <Card className="border-0 shadow-sm " style={{ top: "20px" }}>
            <Card.Body className="p-4">
              <Nav variant="tabs" className="mb-4 border-bottom-0">
                <Nav.Item>
                  <Nav.Link
                    eventKey="wallet"
                    active={activeTab === "wallet"}
                    onClick={() => handleTabChange("wallet")}
                    style={{
                      color:
                        activeTab === "wallet" ? colors.primary : colors.text,
                      borderBottom:
                        activeTab === "wallet"
                          ? `2px solid ${colors.primary}`
                          : "none",
                      fontWeight: "500",
                    }}
                  >
                    <i className="bi bi-wallet2 me-2"></i>
                    Send To Wallet
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="bank"
                    active={activeTab === "bank"}
                    onClick={() => handleTabChange("bank")}
                    style={{
                      color:
                        activeTab === "bank" ? colors.primary : colors.text,
                      borderBottom:
                        activeTab === "bank"
                          ? `2px solid ${colors.primary}`
                          : "none",
                      fontWeight: "500",
                    }}
                  >
                    <i className="bi bi-bank me-2"></i>
                    Send To Bank
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {activeTab === "wallet" && (
                <Form>
                  <Form.Group className="mb-3" controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      style={{
                        borderColor: colors.border,
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: colors.light }}
                      >
                        ₹
                      </span>
                      <Form.Control
                        type="number"
                        placeholder="Enter Amount"
                        value={formData.amount}
                        onChange={handleChange}
                        style={{
                          borderColor: colors.border,
                          padding: "10px 15px",
                        }}
                      />
                    </div>
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="w-100 py-2 fw-bold"
                    style={{
                      backgroundColor: colors.primary,
                      border: "none",
                      fontSize: "1rem",
                    }}
                    disabled={!isWalletFormValid}
                  >
                    Transfer to Wallet
                  </Button>
                </Form>
              )}

              {activeTab === "bank" && (
                <Form>
                  <Form.Group className="mb-3" controlId="beneficiaryName">
                    <Form.Label>Beneficiary Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name on Bank Account"
                      value={formData.beneficiaryName}
                      onChange={handleChange}
                      style={{
                        borderColor: colors.border,
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="accountNumber">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Account Number"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      style={{
                        borderColor: colors.border,
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ifscCode">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="IFSC Code"
                      value={formData.ifscCode}
                      onChange={handleChange}
                      style={{
                        borderColor: colors.border,
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: colors.light }}
                      >
                        ₹
                      </span>
                      <Form.Control
                        type="number"
                        placeholder="Enter Amount"
                        value={formData.amount}
                        onChange={handleChange}
                        style={{
                          borderColor: colors.border,
                          padding: "10px 15px",
                        }}
                      />
                    </div>
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="w-100 py-2 fw-bold"
                    style={{
                      backgroundColor: colors.primary,
                      border: "none",
                      fontSize: "1rem",
                    }}
                    disabled={!isBankFormValid}
                  >
                    Transfer to Bank
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Information Section */}
      <Row className="mt-5">
        <Col md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h3 className="h4 mb-3" style={{ color: colors.dark }}>
                <i
                  className="bi bi-list-ol me-2"
                  style={{ color: colors.primary }}
                ></i>
                How Wallet Transfer Works
              </h3>
              <ol className="steps-list">
                <li>Log in to ABDKS dashboard</li>
                <li>Navigate to Wallet Transfer section</li>
                <li>Enter recipient's Wallet/User ID</li>
                <li>Enter the transfer amount</li>
                <li>Authenticate using PIN or OTP</li>
                <li>Transfer happens instantly</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h3 className="h4 mb-3" style={{ color: colors.dark }}>
                <i
                  className="bi bi-award-fill me-2"
                  style={{ color: colors.primary }}
                ></i>
                Benefits
              </h3>
              <ul className="list-icon">
                <li>
                  <i
                    className="bi bi-lightning-fill me-2"
                    style={{ color: colors.primary }}
                  ></i>{" "}
                  Instant & seamless operation
                </li>
                <li>
                  <i
                    className="bi bi-shield-lock-fill me-2"
                    style={{ color: colors.primary }}
                  ></i>{" "}
                  Fully secure inside ABDKS system
                </li>
                <li>
                  <i
                    className="bi bi-briefcase-fill me-2"
                    style={{ color: colors.primary }}
                  ></i>{" "}
                  Ideal for business fund distribution
                </li>
                <li>
                  <i
                    className="bi bi-clipboard2-data-fill me-2"
                    style={{ color: colors.primary }}
                  ></i>{" "}
                  Transparent & traceable logs
                </li>
                <li>
                  <i
                    className="bi bi-person-check-fill me-2"
                    style={{ color: colors.primary }}
                  ></i>{" "}
                  Role-controlled transfers only
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="h4 mb-3" style={{ color: colors.dark }}>
                <i
                  className="bi bi-question-circle-fill me-2"
                  style={{ color: colors.primary }}
                ></i>
                Frequently Asked Questions
              </h3>
              <Accordion flush>
                <Accordion.Item eventKey="0" className="border-bottom mb-2">
                  <Accordion.Header>
                    <strong>Is there a fee?</strong>
                  </Accordion.Header>
                  <Accordion.Body>No, it's completely free.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-bottom mb-2">
                  <Accordion.Header>
                    <strong>Are there limits?</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Limits depend on your role & KYC.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="border-bottom mb-2">
                  <Accordion.Header>
                    <strong>Can transfers be reversed?</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    No. Contact support for issues.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <strong>Both users must be on ABDKS?</strong>
                  </Accordion.Header>
                  <Accordion.Body>Yes, internal transfers only.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CTA Section */}
      <Row className="mt-5 text-center">
        <Col>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Button
              variant="primary"
              size="lg"
              style={{
                backgroundColor: colors.primary,
                border: "none",
                padding: "12px 24px",
              }}
            >
              Login to Transfer Wallet Funds
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              style={{
                borderColor: colors.primary,
                color: colors.primary,
                padding: "12px 24px",
              }}
            >
              Become a Distributor
            </Button>
          </div>
        </Col>
      </Row>

      <style jsx>{`
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
        .list-icon {
          list-style-type: none;
          padding-left: 0;
        }
        .list-icon li {
          margin-bottom: 0.5rem;
        }
        .steps-list {
          counter-reset: step-counter;
          list-style-type: none;
          padding-left: 0;
        }
        .steps-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          counter-increment: step-counter;
        }
        .steps-list li:before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          width: 1.5rem;
          height: 1.5rem;
          background-color: ${colors.primary};
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }
        .nav-tabs .nav-link {
          border: none;
          padding: 12px 16px;
          margin-right: 8px;
          border-radius: 8px 8px 0 0;
        }
        .nav-tabs .nav-link:hover {
          border-bottom: 2px solid ${colors.border};
        }
      `}</style>
    </Container>
  );
};

export default WalletTransfer;