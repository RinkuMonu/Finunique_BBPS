import React from "react";
import {
  FaGavel,
  FaCheckCircle,
  FaUserShield,
  FaFileSignature,
  FaMoneyBillWave,
  FaBan,
  FaLock,
  FaBalanceScale,
  FaHandshake,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
 
} from "react-icons/fa";
import privacyImg from "../Assets/images/terms.png";
import SEO from "../components/SEO/SEO";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Term() {
  const {seo} = useUser()
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
      <div className="container pt-5 mt-5">
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
            <h1 className="mb-3">Terms and Conditions</h1>
            <h5 className="text-muted mb-4">
              Know your rights and responsibilities.
            </h5>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms and Conditions. Please read them carefully before using our
              application or website.
            </p>
            <p>
              These terms apply to all visitors, users, and others who access or
              use the service. Violations may result in restricted access.
            </p>
          </div>
        </div>
      </div>
      <section className="py-5 bg-light mt-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h1 className="display-5 fw-bold text-warning-emphasis mb-3">
                {/* <FaGavel className="me-2" />  */}
                Terms & Conditions
              </h1>
              <p className="lead text-muted">
                Please read these terms carefully before using our services
              </p>
              <div className="border-top border-bottom py-3 my-4 bg-white shadow-sm">
                <h5 className="text-warning mb-2">
                  Finunique Small Private Limited
                </h5>
                <p className="text-muted mb-0">
                  <strong>Effective Date:</strong> 12 June 2025 |{" "}
                  <strong>Last updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-lg-5">
                  {/* 1. Introduction */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      <FaFileSignature className="me-3 " /> 1. Introduction
                    </h3>
                    <p className="mb-4">
                      Finunique Small Private Limited ("Finunique," "we," "our," or
                      "us") is a registered fintech company in India under the
                      Companies Act, 2013. We specialize in providing Bharat
                      Bill Payment System (BBPS) services and utility payment
                      solutions under RBI and NPCI compliance.
                    </p>
                    <p className="mb-4">
                      Our services enable both B2B and B2C users to access
                      real-time, secure, and authorized bill payment features
                      for a range of categories, including:
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item bg-light">
                        Mobile Recharge (Prepaid/Postpaid)
                      </li>
                      <li className="list-group-item bg-light">DTH Recharge</li>
                      <li className="list-group-item bg-light">
                        Electricity Bill Payment
                      </li>
                      <li className="list-group-item bg-light">
                        Water Bill Payment
                      </li>
                      <li className="list-group-item bg-light">
                        Gas Bill Payment
                      </li>
                      <li className="list-group-item bg-light">
                        Broadband and Landline
                      </li>
                      <li className="list-group-item bg-light">
                        Credit Card Bill Payment
                      </li>
                      <li className="list-group-item bg-light">
                        Insurance Premiums
                      </li>
                    </ul>
                    <p>
                      We serve retailers, agents, partners, and businesses
                      offering bill payment services to end consumers. These
                      Terms and Conditions form a legally binding agreement
                      governing the use of Finunique's BBPS and utility services.
                    </p>
                  </div>

                  {/* 2. Acceptance of Terms */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      <FaCheckCircle className="me-3" /> 2. Acceptance of Terms
                    </h3>
                    <p className="mb-3">
                      By using any of Finunique's BBPS or utility payment services,
                      whether through our dashboard, partner portal, or
                      integrated API, you agree to be legally bound by these
                      Terms and Conditions. This acceptance occurs when:
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        You sign up for or access any Finunique-powered bill payment
                        interface.
                      </li>
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        You begin transacting through our BBPS APIs or retailer
                        portal.
                      </li>
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        You accept terms electronically during registration or
                        partner onboarding.
                      </li>
                    </ul>
                    <p className="mb-3">You agree that:</p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        You are authorized to represent yourself or the business
                        you are acting on behalf of.
                      </li>
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        You shall comply with these Terms and related policies.
                      </li>
                      <li className="mb-2">
                        <span className="badge bg-warning text-dark me-2">
                          •
                        </span>{" "}
                        Continued use constitutes acceptance of any future
                        updates.
                      </li>
                    </ul>
                  </div>

                  {/* 3. Eligibility */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      <FaUserShield className="me-3" /> 3. Eligibility
                    </h3>
                    <p className="mb-3">
                      To use Finunique BBPS and utility services, users must:
                    </p>
                    <div className="alert alert-warning mb-4">
                      <ul className="mb-0">
                        <li>
                          Be at least 18 years of age (for individuals) or a
                          registered business (for merchants/retailers).
                        </li>
                        <li>
                          Submit valid KYC documentation including Aadhaar, PAN,
                          and proof of address.
                        </li>
                        <li>
                          Not be blacklisted under NPCI, RBI, or any financial
                          regulatory body.
                        </li>
                        <li>
                          Have a valid mobile number and active bank account for
                          fund settlements.
                        </li>
                      </ul>
                    </div>
                    <p>
                      Failure to meet eligibility or submitting false data will
                      result in permanent account deactivation.
                    </p>
                  </div>

                  {/* 4. User Obligations and Responsibilities */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      <FaBalanceScale className="me-3" /> 4. User Obligations
                      and Responsibilities
                    </h3>
                    <p className="mb-3">
                      All users, whether end consumers, agents, or retailers,
                      must:
                    </p>
                    <div className="card bg-light mb-4">
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>
                            Use services solely for legitimate bill payments or
                            digital utility services.
                          </li>
                          <li>
                            Maintain accurate records of all customer payments.
                          </li>
                          <li>
                            Display receipts and transaction IDs when requested
                            by the customer.
                          </li>
                          <li>
                            Immediately report any suspected fraud, failed
                            transactions, or technical issues.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-3 fw-bold">
                      Users are strictly prohibited from:
                    </p>
                    <div className="card border-danger mb-4">
                      <div className="card-body text-danger">
                        <ul className="mb-0">
                          <li>Processing fake bill payment transactions.</li>
                          <li>
                            Charging unauthorized service fees beyond allowed
                            commissions.
                          </li>
                          <li>
                            Reselling or white-labeling Finunique services without
                            prior agreement.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 5. Account Registration and Access */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaLock className="me-3" />  */}
                      5. Account Registration and
                      Access
                    </h3>
                    <p className="mb-3">
                      To offer or use bill payment services via Finunique:
                    </p>
                    <div className="steps">
                      <div className="step mb-3">
                        <div className="step-number   rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                          1
                        </div>
                        <span>
                          Register via the official partner portal or B2B
                          onboarding form.
                        </span>
                      </div>
                      <div className="step mb-3">
                        <div className="step-number   rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                          2
                        </div>
                        <span>
                          Submit required KYC documents including PAN, Aadhaar,
                          bank passbook, and GST (if applicable).
                        </span>
                      </div>
                      <div className="step mb-3">
                        <div className="step-number   rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                          3
                        </div>
                        <span>
                          Await activation confirmation post-verification by
                          Finunique team.
                        </span>
                      </div>
                    </div>
                    <p className="mt-3">
                      API partners will receive test credentials, sandbox
                      access, and production keys post-approval. Credentials
                      must be kept secure.
                    </p>
                  </div>

                  {/* 6. Service Usage Terms */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaHandshake className="me-3" /> */}
                       6. Service Usage Terms
                    </h3>
                    <p className="mb-4">
                      Our BBPS utility services are governed by RBI, NPCI, and
                      industry-wide guidelines. By using these services, you
                      agree to:
                    </p>

                    <h5 className="fw-bold mt-4">6.1 Permitted Use</h5>
                    <ul className="mb-4">
                      <li>
                        Only initiate real, customer-authorized bill payments.
                      </li>
                      <li>Use BBPS categories as approved for your account.</li>
                      <li>
                        Ensure that payments are not duplicated, manipulated, or
                        simulated.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">6.2 Platform Access</h5>
                    <ul className="mb-4">
                      <li>
                        Use only authorized devices or networks for API usage.
                      </li>
                      <li>
                        Respect transaction volume limits and reconciliation
                        policies.
                      </li>
                      <li>
                        Follow brand guidelines if you are a white-label
                        reseller.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">
                      6.3 BBPS-Specific Conditions
                    </h5>
                    <ul className="mb-4">
                      <li>
                        Billers are auto-fetched via BBPS API from NPCI's live
                        registry.
                      </li>
                      <li>No manual modifications to bill data are allowed.</li>
                      <li>
                        All payments must be routed through NPCI's BBPS switch
                        using our interface.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">6.4 Service Disruption</h5>
                    <ul>
                      <li>
                        NPCI/Biller outages may temporarily halt certain
                        categories.
                      </li>
                      <li>
                        You will be informed via email or dashboard
                        notification.
                      </li>
                      <li>
                        Refunds for failed transactions will be governed under
                        the Refund Policy.
                      </li>
                    </ul>
                  </div>

                  {/* 7. Fees, Payments, and Billing */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaMoneyBillWave className="me-3" /> */}
                       7. Fees, Payments,
                      and Billing
                    </h3>

                    <h5 className="fw-bold mt-4">7.1 Fee Structure</h5>
                    <p className="mb-3">
                      Finunique operates on a transparent commission-based model.
                      Retailers and partners may be charged service fees or
                      receive commissions based on:
                    </p>
                    <ul className="mb-4">
                      <li>
                        Type of bill payment category (e.g., electricity, gas,
                        DTH)
                      </li>
                      <li>Volume of transactions per month</li>
                      <li>API access (if using integrated service)</li>
                    </ul>
                    <p className="mb-4">
                      A detailed fee sheet is shared during onboarding and is
                      subject to periodic updates based on NPCI fee circulars
                      and our commercial terms.
                    </p>

                    <h5 className="fw-bold mt-4">7.2 Payment Terms</h5>
                    <ul className="mb-4">
                      <li>
                        Retailers must maintain a wallet balance or pre-funded
                        amount with Finunique to initiate transactions.
                      </li>
                      <li>
                        BBPS charges are automatically deducted at the time of
                        transaction initiation.
                      </li>
                      <li>
                        Failed transactions are refunded automatically, as per
                        our Refund Policy.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">7.3 Invoices & Statements</h5>
                    <ul className="mb-4">
                      <li>
                        Partners will receive downloadable transaction
                        statements and tax invoices monthly.
                      </li>
                      <li>
                        All GST and applicable government taxes are levied as
                        per Indian tax norms.
                      </li>
                      <li>
                        Partners are responsible for maintaining their own
                        ledgers and GST returns.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">7.4 Pricing Changes</h5>
                    <ul>
                      <li>
                        Finunique may revise pricing with at least 7-day prior
                        notice via email or portal alert.
                      </li>
                      <li>
                        Continued use of the service after notification implies
                        acceptance of the new pricing.
                      </li>
                    </ul>
                  </div>

                  {/* 8. Refund and Cancellation Reference */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaBan className="me-3" />  */}
                      8. Refund and Cancellation
                      Reference
                    </h3>
                    <p className="mb-4">
                      Finunique follows a customer-friendly and compliant refund and
                      cancellation process aligned with NPCI and RBI regulations
                      for BBPS operations.
                    </p>

                    <h5 className="fw-bold mt-4">
                      8.1 Eligible Refund Scenarios
                    </h5>
                    <p className="mb-2">Refunds may be issued for:</p>
                    <ul className="mb-4">
                      <li>
                        <strong>Failed Transactions:</strong> Where payment is
                        deducted but not confirmed by the biller.
                      </li>
                      <li>
                        <strong>Duplicate Payments:</strong> Two or more
                        payments for the same bill ID within a short window.
                      </li>
                      <li>
                        <strong>Technical Errors:</strong> System failures
                        resulting in incomplete transactions.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">8.2 Ineligible Scenarios</h5>
                    <p className="mb-2">Refunds will not be issued for:</p>
                    <ul className="mb-4">
                      <li>
                        Successful transactions (even if the user claims they
                        were unintended).
                      </li>
                      <li>
                        Service charges and platform commissions once deducted.
                      </li>
                      <li>
                        Transactions older than 7 days without a formal
                        complaint raised.
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">8.3 Refund Process</h5>
                    <ul className="mb-4">
                      <li>
                        Users must raise refund requests via support@finuniques.in                        with transaction ID and supporting details.
                      </li>
                      <li>
                        Refunds will be reviewed and resolved within 7 business
                        days.
                      </li>
                      <li>
                        Approved refunds are credited to the source account
                        (wallet, UPI, or bank).
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">8.4 Cancellation</h5>
                    <ul>
                      <li>
                        Bill payment transactions are irreversible once
                        submitted to the BBPS switch.
                      </li>
                      <li>
                        Users must verify bill details carefully before
                        initiating payment.
                      </li>
                      <li>
                        For more information, refer to the full Refund Policy
                        available on our website or request it via email.
                      </li>
                    </ul>
                  </div>

                  {/* 9. Intellectual Property Rights */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaExclamationTriangle className="me-3" />  */}
                      9. Intellectual
                      Property Rights
                    </h3>

                    <h5 className="fw-bold mt-4">9.1 Ownership</h5>
                    <p className="mb-3">
                      All content, design elements, service architecture, APIs,
                      databases, software code, logos, trademarks, business
                      methods, and intellectual materials associated with the
                      Finunique platform (whether used on the web, mobile app, or
                      partner portals) are the exclusive property of Finunique
                      Small Private Limited. This includes:
                    </p>
                    <ul className="mb-4">
                      <li>
                        The software powering the BBPS and utility dashboard
                      </li>
                      <li>API documentation and integration libraries</li>
                      <li>Training and onboarding manuals</li>
                      <li>
                        Visuals, brand elements, and user interface designs
                      </li>
                    </ul>
                    <p className="mb-4">
                      Any unauthorized reproduction, distribution, public
                      display, or misuse of these materials, whether for
                      commercial or non-commercial purposes, is strictly
                      prohibited without prior written consent.
                    </p>

                    <h5 className="fw-bold mt-4">9.2 User License</h5>
                    <p className="mb-3">
                      Upon successful registration and onboarding, Finunique grants
                      users a limited, non-exclusive, non-transferable,
                      revocable license to use its services solely for bill
                      payment facilitation and utility transaction processing
                      under the BBPS framework. This license:
                    </p>
                    <ul className="mb-4">
                      <li>
                        Does not include any ownership transfer of our
                        technology or IP
                      </li>
                      <li>
                        Is strictly for the duration of the user's active
                        relationship with Finunique
                      </li>
                      <li>
                        Is subject to termination upon policy violation or
                        misuse
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">9.3 Restrictions</h5>
                    <p className="mb-2">Users shall not:</p>
                    <ul className="mb-4">
                      <li>
                        Copy, modify, decompile, or reverse-engineer any part of
                        the Finunique software or APIs
                      </li>
                      <li>
                        Use the brand name, trade names, or visual assets of
                        Finunique without authorization
                      </li>
                      <li>
                        Claim ownership or authorship of any Finunique service,
                        module, or data flow
                      </li>
                      <li>
                        Distribute our service logic, API flows, or fee
                        structures to competitors or third parties
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">9.4 Third-Party Rights</h5>
                    <p className="mb-3">
                      Where BBPS service access involves integration with NPCI,
                      RBI, or third-party billers:
                    </p>
                    <ul className="mb-4">
                      <li>
                        The intellectual property associated with NPCI (e.g.,
                        BBPS switch, verification protocols) remains with NPCI
                      </li>
                      <li>
                        Finunique does not assert ownership over third-party brand
                        logos or trademarks displayed for billers, which are
                        used strictly under fair usage for informational and
                        processing purposes
                      </li>
                    </ul>

                    <h5 className="fw-bold mt-4">9.5 Infringement Reporting</h5>
                    <p className="mb-3">
                      If you believe that any content, code, or interface on the
                      Finunique platform violates your intellectual property rights
                      or has been copied without authorization, you may report
                      it in writing to legal@finuniques.in with supporting documents.
                      We will investigate and respond within 14 business days.
                    </p>
                    <p>
                      Violation of this section may result in legal action under
                      the Indian Copyright Act, 1957, the Trademarks Act, 1999,
                      and relevant provisions of the Information Technology Act,
                      2000.
                    </p>
                  </div>

                  {/* 10-20 sections would follow the same pattern */}
                  {/* For brevity, I'm showing the structure for one more section */}

                  {/* 10. Privacy Policy Reference */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4 d-flex align-items-center">
                      {/* <FaLock className="me-3" /> */}
                       10. Privacy Policy Reference
                    </h3>
                    <p className="mb-3">
                      Finunique is committed to protecting user data in compliance
                      with the Information Technology Act, 2000, Indian data
                      protection laws, and (where applicable) GDPR standards.
                    </p>
                    <ul className="mb-4">
                      <li>
                        Our Privacy Policy outlines how we collect, use, store,
                        and secure your personal and transactional data.
                      </li>
                      <li>
                        Data shared during registration (e.g., Aadhaar, PAN,
                        email, bank details) is encrypted, stored securely, and
                        never sold.
                      </li>
                      <li>
                        BBPS transactions are routed through secure NPCI
                        channels and are logged for regulatory compliance only.
                      </li>
                      <li>
                        We use cookies and analytics for performance monitoring
                        and fraud prevention only with consent.
                      </li>
                    </ul>
                    <p>
                      View the full Privacy Policy at:{" "}
                      <a
                        href="https://www.finuniques.in/privacy-policy"
                        className="text-decoration-none"
                      >
                        www.finuniques.in/privacy-policy
                      </a>
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-5 pt-4 border-top">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      11. Contact Information
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card mb-3 h-100 border-0 shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title d-flex align-items-center">
                              <FaEnvelope className="me-2 text-primary" /> Email
                              Contacts
                            </h5>
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <strong>Support:</strong> support@finuniques.in                              </li>
                              <li className="mb-2">
                                <strong>Grievance:</strong> grievance@finuniques.in                              </li>
                              <li>
                                <strong>Legal:</strong> legal@finuniques.in                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card mb-3 h-100 border-0 shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title d-flex align-items-center">
                              <FaPhone className="me-2 text-primary" /> Phone &
                              Address
                            </h5>
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <strong>Phone:</strong> 0141-4511098
                              </li>
                              <li className="mb-2">
                                <strong>Registered Office:</strong> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                              </li>
                              <li>
                                <strong>Website:</strong>  <Link to="https://www.finuniques.in/">www.finuniques.in</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-5 pt-3">
                    <p className="lead text-muted">
                      Thank you for choosing Finunique for your BBPS and utility
                      payment needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .steps {
          background-color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        .step {
          display: flex;
          align-items: center;
        }
        .step-number {
          width: 30px;
          height: 30px;
          font-weight: bold;
        }
        h3 {
          border-bottom: 2px solid #f0ad4e;
          padding-bottom: 0.5rem;
        }
        h5 {
          color: #495057;
        }
        .card {
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
