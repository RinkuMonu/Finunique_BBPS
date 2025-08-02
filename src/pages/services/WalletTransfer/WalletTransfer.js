import React, { useState } from "react";
import wallet from "../../../Assets/images/wallet-transfer.png";
import "./wallet.css";

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
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import { useUser } from "../../../context/UserContext";

const WalletTransfer = () => {
  const { seo } = useUser()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    amount: "",
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const [activeTab, setActiveTab] = useState("wallet");
  const [ifscCodeError, setIfscCodeError] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    let validatedValue = value;

    switch (id) {
      case "beneficiaryName":
        validatedValue = value.replace(/[^a-zA-Z\s]/g, "");
        break;
      case "accountNumber":
        validatedValue = value.replace(/\D/g, "");
        break;
      case "amount":
        validatedValue = value.replace(/\D/g, "");
        break;
      case "mobileNumber":
        validatedValue = value.replace(/\D/g, "").slice(0, 10);
        break;
      case "ifscCode":
        validatedValue = value.toUpperCase();
        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        if (validatedValue.length > 0 && !ifscRegex.test(validatedValue)) {
          setIfscCodeError("Invalid IFSC Code format");
        } else {
          setIfscCodeError("");
        }
        break;
      default:
        break;
    }

    setFormData({ ...formData, [id]: validatedValue });
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
    <>
      <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />
      <div className=" my-lg-5" >
        <Row className="g-4  hero-section p-5">
          <Col lg={6} className="pe-lg-4">
            <img
              src={wallet}
              alt="Wallet Transfer"
              className="img-fluid rounded mt-5"
            />
          </Col>

          <Col lg={6} className="ps-lg-4">
            <Card className="border-0 shadow-sm" style={{ top: "20px" }}>
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
                          type="text"
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
                          textTransform: "uppercase",
                        }}
                        isInvalid={!!ifscCodeError}
                      />
                      <Form.Control.Feedback type="invalid">
                        {ifscCodeError}
                      </Form.Control.Feedback>
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
                          type="text"
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
        <Container>
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
          <Row className="my-5 text-center">
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
                  onClick={() => navigate("/login")}
                >
                  Login to Transfer Wallet Funds
                </Button>
              <button
                  className="btn btn-outline-warning btn-lg mt-auto fw-semibold border-radius"
                  onClick={() => navigate("/createaccount?role=Distributor")}
                >
                  Become a Distributor
                </button>
              </div>
            </Col>
          </Row>

        </Container>

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
      </div>
    </>
  );
};

export default WalletTransfer;
