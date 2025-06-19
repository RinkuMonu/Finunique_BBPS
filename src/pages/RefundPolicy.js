import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Collapse } from "react-bootstrap";
import {
  FaMoneyBillWave,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaClock,
} from "react-icons/fa";
import privacyImg from "../Assets/images/refund.png";

export default function RefundPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={privacyImg}
              alt="Refund Policy"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">Refund Policy</h1>
            <h5 className="text-muted mb-4">
              Your satisfaction is our priority.
            </h5>
            <p>
              We strive to provide high-quality services and products. If you're
              not completely satisfied, we’re here to help.
            </p>
            <p>
              Refunds are eligible within 2-3 days of purchase under specific
              conditions. Please read our full policy for more details.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-5 mt-5">
        <Row className="mb-5 text-center">
          <Col>
            <div className="d-flex flex-column align-items-center">
              <div
                className="icon-wrapper rounded-circle p-4 mb-3"
                style={{ color: "orange" }}
              >
                <FaMoneyBillWave size={40} />
              </div>
              <h1 className="display-5 fw-bold text-dark">Refund Policy</h1>
              <p className="lead text-muted">
                Our transparent and fair refund process
              </p>
            </div>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 bg-light">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-3 text-dark">Important Notes</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    Refunds are processed only to the original payment method
                  </li>
                  <li className="mb-2">
                    Service charges (if any) are non-refundable
                  </li>
                  <li className="mb-2">
                    Please allow full processing time before contacting support
                  </li>
                  <li>
                    For urgent queries, contact our support team with
                    transaction details
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Expandable Full Policy */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button
              variant="outline-primary"
              onClick={() => setOpen(!open)}
              aria-controls="full-refund-text"
              aria-expanded={open}
            >
              {open
                ? "Hide Full Refund & Cancellation Policy"
                : "Read Full Refund & Cancellation Policy"}
            </Button>
          </Col>
        </Row>

        <Collapse in={open}>
          <div
            id="full-refund-text"
            className="mt-4 bg-light p-4 rounded"
            style={{ whiteSpace: "pre-line" }}
          >
            {`
1. Company Introduction
ABDKS Solutions Private Limited ("ABDKS," "we," "our," or "us") is a fintech enterprise registered under the Companies Act, 2013 in India. We provide digital financial solutions tailored to both B2B and B2C segments, including:
- Payment Gateway Services
- Digital Lending APIs
- KYC/AML Verification Tools
- Wallet and UPI Services
- SaaS-based Financial Dashboards and Analytics
Our platform supports merchants, financial institutions, startups, and individuals in building and scaling secure, compliant, and technology-enabled financial products.

2. Purpose and Scope
2.1 Purpose
This policy outlines the guidelines, procedures, and rights of all stakeholders involved in service cancellation and refund requests. The objective is to ensure legal clarity, protect consumer rights, and define the company's responsibilities in compliance with Indian law.
2.2 Scope
This policy applies to:
- Merchants/Businesses using our APIs or payment services.
- End Users/Consumers transacting via our B2C interfaces.
- Technology/Channel Partners integrating our fintech services.

3. Definitions
Term | Definition
Customer | Any individual or entity availing ABDKS services.
Refund | Return of funds to a Customer due to failed service or billing error.
Cancellation | Termination or revocation of a subscribed service or integration.
Transaction | Any financial or service-related interaction processed via ABDKS.
Service | Any digital feature, product, or offering delivered by ABDKS.
Dispute | A disagreement raised by the customer regarding a transaction or refund.

4. Cancellation Policy
4.1 General Guidelines
- Subscription cancellations must be initiated within 7 days of activation.
- Cancellation requests must be submitted via official support channels.
4.2 Types of Cancellable Services
Service Category | Cancellation Window | Eligibility Conditions
SaaS Subscriptions | Within 7 Days | No usage or API hits post-activation
Custom Integrations | Pre-initiation Only | Work has not commenced
KYC/AML Services | Non-cancellable | Triggered real-time and consumed
Wallet/UPI Setup | Within 24 Hours | Wallet not activated or linked

4.3 Procedure
- Email support@abdks.in with subject "Service Cancellation Request."
- Include registered account details, service ID, and reason.
- Team will validate the request and respond within 3 business days.

5. Refund Policy
5.1 Refund Eligibility
Refunds may be issued under the following circumstances:
A. Failed Transactions
B. Duplicate Payments
C. Unauthorized Transactions
D. Technical Glitches
E. Service Dissatisfaction (Limited Scope)

5.2 Non-Refundable Charges
Fee Type | Reason
Onboarding Charges | One-time and non-reversible administrative cost
Custom Development Fees | Work is labor-intensive and client-specific
KYC/AML API Hits | Real-time and consumption-based
Payment Gateway Setup Fee | Paid to third-party networks and is non-refundable

6. Refund Process and Timeline
6.1 How to Raise a Refund Request
- Email: support@abdks.in
- Subject: "Refund Request - [Transaction ID]"
- Include full details, reason, and proof (screenshots, bank statements).
6.2 Timeline
- Acknowledgment: Within 3 business days
- Investigation: Up to 7 business days
- Refund Credit: Within 14 business days from approval
6.3 Notification
Users will be informed of refund approval or rejection via:
- Registered email ID
- In-app notification (if applicable)

7. Mode of Refund
Approved refunds will be processed via:
- UPI
- Bank Transfer (NEFT/IMPS)
- Wallet Credit
- Credit Note

8. Cancellation Due to Policy Violation or Fraud
ABDKS reserves the right to cancel service(s) under:
- Misuse of platform
- Fraudulent activity
- Breach of contract
No refund will be issued in such cases and legal action may be initiated.

9. Customer Responsibilities
- Ensure accurate account information.
- Monitor transactions regularly.
- Report suspicious activity within 48 hours.

10. Dispute Resolution & Escalation
10.1 Grievance Redressal
- Level 1: support@abdks.in
- Level 2: grievance@abdks.in
10.2 Arbitration Clause
- Arbitration under the Arbitration and Conciliation Act, 1996
- Seat: Jaipur, Rajasthan
10.3 Jurisdiction
- Courts in Jaipur, Rajasthan

11. Policy Updates
- This policy may be revised periodically.
- Material changes will be communicated via email or app banner.

12. Contact Information
- ABDKS Solutions Private Limited
- Email: support@abdks.in | grievance@abdks.in
- Phone: +91-XXXXXXXXXX
- Website: www.abdks.in

13. Compliance Statement
This policy complies with:
- Consumer Protection Act, 2019
- Information Technology Act, 2000
- RBI Guidelines for Payment Aggregators
- Indian Data Protection laws
`}
          </div>
        </Collapse>

        <style jsx>{`
          .icon-wrapper {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bg-light-primary {
            background-color: rgba(13, 110, 253, 0.1);
          }
          .text-primary {
            color: #0d6efd !important;
          }
          .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
          }
        `}</style>
      </Container>
    </>
  );
}
