import React from "react";
import {
  FaGavel,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import privacyImg from "../Assets/images/terms.png";
import SEO from "../components/SEO/SEO";
import { useUser } from "../context/UserContext";

export default function ContentPolicy() {
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
              alt="Content Policy"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <h1 className="mb-3">Content Policy</h1>
            <h5 className="text-muted mb-4">
              Guidelines for content submission and usage on our platforms.
            </h5>
            <p>
              This Content Policy governs the nature, usage, and moderation of
              content transmitted through ABDKS platforms and services. Please
              read carefully before using our services.
            </p>
            <p>
              All users, partners, and integrators must comply with these
              guidelines when submitting or processing content through our
              systems.
            </p>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light mt-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h1 className="display-5 fw-bold text-warning-emphasis mb-3">
                <FaGavel className="me-2" /> Content Policy
              </h1>
              <p className="lead text-muted">
                Guidelines for content submission and usage on ABDKS platforms
              </p>
              <div className="border-top border-bottom py-3 my-4 bg-white shadow-sm">
                <h5 className="text-warning mb-2">
                  ABDKS Solutions Private Limited
                </h5>
                <p className="text-muted mb-0">
                  <strong>Effective Date:</strong> 12 June 2025
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
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      1. Introduction
                    </h3>
                    <p className="mb-4">
                      This Content Policy ("Policy") governs the nature, usage,
                      and moderation of content transmitted, uploaded,
                      submitted, or integrated through the platforms and
                      services operated by ABDKS Solutions Private Limited
                      ("ABDKS," "we," "our," or "us").
                    </p>
                    <p>
                      ABDKS is a licensed digital service provider offering
                      fintech solutions such as BBPS, AEPS, PAN verification,
                      mobile recharge, utility bill payment, EMI collection, and
                      API-based integrations. This Policy is developed to ensure
                      that all content circulated through ABDKS systems adheres
                      to applicable law, respects platform integrity, and aligns
                      with the digital and regulatory standards defined by
                      authorities including RBI, UIDAI, TRAI, and under the IT
                      Act 2000.
                    </p>
                  </div>

                  {/* 2. Scope */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      2. Scope
                    </h3>
                    <p className="mb-4">
                      This Policy applies to all:
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item bg-light">
                        Registered users, including individuals and business
                        entities
                      </li>
                      <li className="list-group-item bg-light">
                        Retailers, distributors, agents, and channel partners
                      </li>
                      <li className="list-group-item bg-light">
                        White-label partners and API integrators
                      </li>
                      <li className="list-group-item bg-light">
                        Platform interfaces including web portals, mobile apps,
                        APIs, admin dashboards, and payment modules
                      </li>
                    </ul>
                    <p>
                      All participants are bound by this Policy when interacting
                      with or submitting content to any ABDKS-controlled
                      interface or system.
                    </p>
                  </div>

                  {/* 3. Definitions */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      3. Definitions
                    </h3>
                    <p className="mb-3 fw-bold">Content:</p>
                    <p className="mb-4">
                      Any data, information, message, text, form input, file,
                      comment, document, API field, image, or metadata submitted,
                      processed, transmitted, or hosted via ABDKS platforms.
                    </p>

                    <p className="mb-3 fw-bold">User Content:</p>
                    <p className="mb-4">
                      Any content submitted directly by end-users, retailers,
                      partners, or agents through portals, apps, APIs, or upload
                      systems.
                    </p>

                    <p className="mb-3 fw-bold">Prohibited Content:</p>
                    <p className="mb-4">
                      Content that violates law, ABDKS service terms, or
                      applicable regulatory norms, including but not limited to
                      misinformation, abuse, fraud, hate speech, or privacy
                      breaches.
                    </p>

                    <p className="mb-3 fw-bold">Distributors:</p>
                    <p>
                      Entities managing a network of retailers or agents
                      transacting on behalf of ABDKS under a commercial
                      agreement.
                    </p>
                  </div>

                  {/* 4. Acceptable Content Guidelines */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      4. Acceptable Content Guidelines
                    </h3>
                    <p className="mb-4">
                      All submitted content must be:
                    </p>
                    <div className="card bg-light mb-4">
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>
                            <strong>Factual and Accurate:</strong> Information
                            must be current, true, and verifiable.
                          </li>
                          <li>
                            <strong>Service-Relevant:</strong> Content must
                            relate strictly to BBPS payments, AEPS transactions,
                            KYC processes, or other approved digital services.
                          </li>
                          <li>
                            <strong>Lawful and Non-abusive:</strong> Submissions
                            must comply with Indian laws, not promote violence,
                            defamation, or discrimination.
                          </li>
                          <li>
                            <strong>Compliant with Format Standards:</strong> API
                            payloads, uploaded documents, and form entries must
                            align with ABDKS technical protocols and KYC norms.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 className="fw-bold mt-4">
                      Examples of Acceptable Content
                    </h5>
                    <ul className="mb-4">
                      <li>PAN card number and name in correct KYC request format</li>
                      <li>Recharge amount and mobile number in BBPS or UPI APIs</li>
                      <li>
                        Uploaded image of Aadhaar card with masked number (if
                        required by flow)
                      </li>
                    </ul>
                  </div>

                  {/* 5. Prohibited Content */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      5. Prohibited Content
                    </h3>
                    <p className="mb-4">
                      The following are strictly prohibited across all ABDKS
                      platforms:
                    </p>
                    <div className="card border-danger mb-4">
                      <div className="card-body text-danger">
                        <ul className="mb-0">
                          <li>
                            Financial misinformation or unauthorized billing
                            content
                          </li>
                          <li>
                            False KYC details or manipulated documents (e.g.,
                            PAN, Aadhaar)
                          </li>
                          <li>
                            Promotion of illegal, unlicensed, or non-regulated
                            services
                          </li>
                          <li>
                            Abuse, hate speech, religious or caste-based comments
                          </li>
                          <li>
                            Sharing of confidential user data (e.g., Aadhaar
                            screenshots in chat or dashboard)
                          </li>
                          <li>
                            Malware, executable code, or any script intended to
                            bypass system controls
                          </li>
                          <li>
                            Mass spam or auto-generated API submissions for
                            fraudulent intent
                          </li>
                          <li>
                            Screenshots or content that violate confidentiality
                            or display sensitive user/account information
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 6. Content Submission Responsibilities */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      6. Content Submission Responsibilities
                    </h3>
                    <p className="mb-4">
                      All users and partners are responsible for:
                    </p>
                    <div className="card bg-light mb-4">
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>
                            Ensuring that submitted content is accurate,
                            traceable, and verifiable
                          </li>
                          <li>
                            Uploading only original, unaltered documents for
                            KYC/verification
                          </li>
                          <li>
                            Ensuring API submissions contain real data
                            consistent with user or transaction activity
                          </li>
                          <li>
                            Avoiding uploads that infringe on copyright,
                            trademark, or intellectual property rights
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Misrepresentation or deliberate tampering may lead to
                      permanent platform bans and legal action.
                    </p>
                  </div>

                  {/* 7. Moderation and Monitoring */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      7. Moderation and Monitoring
                    </h3>
                    <p className="mb-4">
                      ABDKS actively monitors content using:
                    </p>
                    <ul className="mb-4">
                      <li>
                        Automated AI-based fraud detection systems for anomaly
                        detection
                      </li>
                      <li>Manual moderation by compliance officers</li>
                      <li>Flagging systems for community and internal team alerts</li>
                    </ul>
                    <p className="mb-4 fw-bold">
                      We reserve the right to:
                    </p>
                    <ul className="mb-4">
                      <li>Remove, mask, or quarantine any submitted or integrated content</li>
                      <li>Review API logs and form data for compliance breaches</li>
                      <li>Block abusive or high-risk users from system access</li>
                    </ul>
                  </div>

                  {/* 8. Use of Submitted Content */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      8. Use of Submitted Content
                    </h3>
                    <p className="mb-4">
                      By submitting or uploading any content, users and partners
                      grant ABDKS:
                    </p>
                    <ul className="mb-4">
                      <li>
                        A limited, non-exclusive, royalty-free license to use,
                        store, and process such content solely for service
                        delivery
                      </li>
                      <li>
                        Rights to retain and archive content for regulatory
                        audits and compliance purposes
                      </li>
                    </ul>
                    <p className="mb-4">
                      Content will not be shared with third parties except:
                    </p>
                    <ul className="mb-4">
                      <li>As required by law</li>
                      <li>For transaction settlement (e.g., BBPS/NPCI)</li>
                      <li>With partner banks or government regulators</li>
                    </ul>
                  </div>

                  {/* 9. Legal & Regulatory Compliance */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      9. Legal & Regulatory Compliance
                    </h3>
                    <p className="mb-4">
                      All content handled through ABDKS must comply with:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="mb-4">
                          <li>Information Technology Act, 2000</li>
                          <li>RBI Master Directions on Digital Payment Security</li>
                          <li>UIDAI norms on Aadhaar-based KYC</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="mb-4">
                          <li>TRAI and DoT guidelines for telecom-based services</li>
                          <li>
                            Consumer Protection Act, 2019 (where applicable)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Violation of these obligations may result in regulatory
                      reporting and platform delisting.
                    </p>
                  </div>

                  {/* 10. Enforcement Actions */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      10. Enforcement Actions
                    </h3>
                    <p className="mb-4">
                      ABDKS reserves the right to take one or more of the
                      following actions upon any policy breach:
                    </p>
                    <div className="card border-warning mb-4">
                      <div className="card-body">
                        <ul className="mb-0">
                          <li>Issue written or system-generated warnings</li>
                          <li>Suspend access to APIs or user dashboards</li>
                          <li>
                            Permanently terminate the user's account or agency
                            relationship
                          </li>
                          <li>
                            Withhold or reverse transaction settlements linked to
                            the violation
                          </li>
                          <li>
                            Report to law enforcement, CERT-In, UIDAI, RBI, or
                            NPCI as appropriate
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 11. Grievance Redressal */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      11. Grievance Redressal
                    </h3>
                    <p className="mb-4">
                      All grievances related to content removal, moderation, or
                      wrongful blocking can be directed to our Grievance Officer:
                    </p>
                    <div className="card bg-light mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Mr. Dinesh Kumar</strong>
                        </p>
                        <p className="mb-2">
                          Grievance Officer – ABDKS Solutions Private Limited
                        </p>
                        <p className="mb-2">
                          <FaEnvelope className="me-2" />
                          Email: grievance@abdks.in
                        </p>
                        <p className="mb-0">
                          <FaPhone className="me-2" />
                          Phone: +91-XXXXXXXXXX
                        </p>
                        <p className="mt-2">
                          <strong>Response Time:</strong> Within 10 working days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 12. Policy Updates and Notifications */}
                  <div className="mb-5">
                    <h3 className="fw-bold text-warning-emphasis mb-4">
                      12. Policy Updates and Notifications
                    </h3>
                    <ul className="mb-4">
                      <li>
                        This policy is reviewed annually and may be updated as
                        per changes in legal, technical, or operational
                        mandates.
                      </li>
                      <li>
                        All changes will be communicated via email or system
                        alerts with at least 7-day notice.
                      </li>
                      <li>
                        Continued platform use post-update implies acceptance of
                        the revised policy.
                      </li>
                    </ul>
                    <div className="alert alert-warning">
                      <p className="mb-0 fw-bold">
                        By using any ABDKS platform, service, or API, you
                        acknowledge and agree to this Content Policy.
                      </p>
                    </div>
                    <div className="text-center mt-4">
                      <h5>ABDKS Solutions Private Limited</h5>
                      <p>Website: www.abdks.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
        .list-group-item {
          padding: 0.75rem 1.25rem;
        }
      `}</style>
    </>
  );
}