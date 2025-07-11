/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import SEO from "../components/SEO/SEO";
import { useUser } from "../context/UserContext";
import { FiArrowRight } from "react-icons/fi";
import privacyImg from "../Assets/images/refund.png";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  const { seo } = useUser();
  const [open, setOpen] = useState(false);

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

      <section className="hero-section heroaabout overflow-hidden">
        <div className="container-fluid p-0 d-flex flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper">
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5">
              <h1 className="hero-headline">
                Refund & <span className="highlight">Cancellation</span> Policy
              </h1>
              <p className="hero-subheadline">
                Your satisfaction is our top priority
              </p>
              <p className="hero-subheadline">
                We ensure high-quality services and fair resolution. Please review our detailed policy below.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 image-content hero-image-container">
              <img
                src={privacyImg}
                alt="Refund Policy"
                className="img-fluid hero-image"
                style={{
                  maxHeight: "380px",
                  borderRadius: "8px",
                  // boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="pb-lg-0 z-index-1 pt-0">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="theme-title text-center mb-5">
                  <h2>Important Highlights</h2>
                  <p>Understand our transparent and fair refund & cancellation process</p>
                </div>
                <ul className="list-unstyled bg-light p-4 rounded shadow-sm">
                  <li className="mb-2">✅ Refunds are processed only to the original payment method</li>
                  <li className="mb-2">✅ Service charges (if any) are non-refundable</li>
                  <li className="mb-2">✅ Please allow full processing time before contacting support</li>
                  <li>✅ For urgent queries, contact our support team with transaction details</li>
                </ul>
              </div>
            </div>

            <div className="row mt-5 text-center">
              <div className="col">
                <button
                  className="btn btn-warning text-dark fw-semibold px-4 py-2 shadow-sm"
                  onClick={() => setOpen(!open)}
                >
                  {open ? "Hide Full Refund & Cancellation Policy" : "Read Full Refund & Cancellation Policy"}
                  <FiArrowRight className="ms-2" size={18} />
                </button>
              </div>
            </div>

            {open && (
              <div className="row mt-4">
                <div className="col">
                  <div
                    className="bg-light p-4 rounded shadow-sm"
                    style={{ whiteSpace: "pre-line" }}
                  >
{`
Refund and Cancellation Policy
ABDKS Solutions Private Limited
Effective Date: 12 June 2025

1. Company Introduction
ABDKS Solutions Private Limited ("ABDKS," "we," "our," or "us") is a fintech enterprise registered under the Companies Act, 2013 in India. We provide digital financial solutions tailored to both B2B and B2C segments, including:
Payment Gateway Services
Digital Lending APIs
KYC/AML Verification Tools
Wallet and UPI Services
SaaS-based Financial Dashboards and Analytics
Our platform supports merchants, financial institutions, startups, and individuals in building and scaling secure, compliant, and technology-enabled financial products.

2. Purpose and Scope
2.1 Purpose
This policy outlines the guidelines, procedures, and rights of all stakeholders involved in service cancellation and refund requests. The objective is to ensure legal clarity, protect consumer rights, and define the company's responsibilities in compliance with Indian law.
2.2 Scope
This policy applies to:
Merchants/Businesses using our APIs or payment services.
End Users/Consumers transacting via our B2C interfaces.
Technology/Channel Partners integrating our fintech services.

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
Customers may cancel services subject to specific conditions:
- Subscription cancellations must be initiated within 7 days of activation.
- Cancellation requests must be submitted via official support channels.

4.2 Types of Cancellable Services
Service Category | Cancellation Window | Eligibility Conditions
SaaS Subscriptions | Within 7 Days | No usage or API hits post-activation
Custom Integrations | Pre-initiation Only | Work has not commenced
KYC/AML Services | Non-cancellable | Triggered real-time and consumed
Wallet/UPI Setup | Within 24 Hours | Wallet not activated or linked

4.3 Procedure
Email support@abdks.in with subject "Service Cancellation Request."
Include registered account details, service ID, and reason.
Team will validate the request and respond within 3 business days.

5. Refund Policy
5.1 Refund Eligibility
Refunds may be issued under the following circumstances:
A. Failed Transactions
Funds deducted, but service not delivered.
Verified through backend logs or payment gateway APIs.
B. Duplicate Payments
Same transaction processed more than once.
Supporting evidence required (bank statements, receipts).
C. Unauthorized Transactions
Transaction initiated without customer consent.
Subject to internal verification and legal protocols.
D. Technical Glitches
Platform failure causing loss of service value.
Applicable only if validated through internal system logs.
E. Service Dissatisfaction (Limited Scope)
Only accepted for SaaS dashboards, within 3 days of first use.
Reason and screenshots must be provided.

5.2 Non-Refundable Charges
Fee Type | Reason
Onboarding Charges | One-time and non-reversible administrative cost
Custom Development Fees | Work is labor-intensive and client-specific
KYC/AML API Hits | Real-time and consumption-based
Payment Gateway Setup Fee | Paid to third-party networks and is non-refundable

6. Refund Process and Timeline
6.1 How to Raise a Refund Request
Email: support@abdks.in
Subject: "Refund Request - [Transaction ID]"
Include full details, reason, and proof (screenshots, bank statements).
6.2 Timeline
Acknowledgment: Within 3 business days
Investigation: Up to 7 business days
Refund Credit: Within 14 business days from approval
6.3 Notification
Users will be informed of refund approval or rejection via:
Registered email ID
In-app notification (if applicable)

7. Mode of Refund
Approved refunds will be processed via:
UPI – Reversed to original UPI ID
Bank Transfer (NEFT/IMPS) – To the source bank account
Wallet Credit – If transaction was wallet-based
Credit Note – For business accounts (redeemable against future services)

8. Cancellation Due to Policy Violation or Fraud
ABDKS reserves the right to cancel service(s) immediately under the following:
- Misuse of platform or API abuse
- Fraudulent activity or chargeback misuse
- Breach of contract or data policies
Such cancellations will result in no refund and may attract legal action under Indian cyber and financial laws.

9. Customer Responsibilities
Ensure accurate account information.
Monitor transactions regularly.
Avoid sharing login or access credentials.
Inform support of suspicious activity within 48 hours.
Failure to meet these responsibilities may delay or invalidate refunds/cancellations.

10. Dispute Resolution & Escalation

10.1 Grievance Redressal
Level 1: Write to support@abdks.in
Level 2: Escalate to grievance@abdks.in within 7 days of unsatisfactory resolution

10.2 Arbitration Clause
All disputes shall be resolved via binding arbitration under the Arbitration and Conciliation Act, 1996.
Seat of arbitration: Jaipur, Rajasthan, India

10.3 Jurisdiction
All legal proceedings are subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan, India.

11. Policy Updates
ABDKS reserves the right to update this policy periodically.
Material changes will be communicated via email or platform banner.
Continued use post-update implies acceptance of revised terms.

12. Contact Information
For refund and cancellation queries, reach us at:
ABDKS Solutions Private Limited
Email: support@abdks.in
Grievance Cell: grievance@abdks.in
Phone: 0141-4511098
Website: www.abdks.in

13. Compliance Statement
This policy is in alignment with the following Indian regulatory frameworks:
- Consumer Protection Act, 2019
- Information Technology Act, 2000
- Reserve Bank of India (RBI) Guidelines for Payment Aggregators and Prepaid Instruments
- Data Protection Regulations under Indian law
All stakeholders are advised to review this policy regularly. By availing any service of ABDKS, you agree to the terms mentioned herein.
`}
                  </div>
                </div>
              </div>
            )}

            <div className="row my-5">
              <div className="col-lg-12 text-center">
                <div className="partner-box p-5 rounded shadow-sm">
                  <h2 className="fw-bold mb-3 text-gradient">Partner With Us</h2>
                  <p className="lead text-muted mb-4">
                    Interested in becoming a BBPS retailer, distributor, or service partner with ABDKS? Let’s shape India’s digital payment future together.
                  </p>
                  <Link
                    to={"/createaccount?role=Retailer"}
                    className="btn btn-warning text-dark fw-semibold d-inline-flex align-items-center px-4 py-2 shadow-sm"
                  >
                    Be a Partner <FiArrowRight className="ms-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
