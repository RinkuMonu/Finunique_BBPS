import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function ContactDetailsForm({ formData, updateFormData }) {
  const [name, setName] = useState(formData.contactDetails.name || "");
  const [phone, setPhone] = useState(formData.contactDetails.phone || "");
  const [email, setEmail] = useState(formData.contactDetails.email || "");
  const [accountType, setAccountType] = useState(
    formData.contactDetails.accountType || ""
  );

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    accountType: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  useEffect(() => {
    const nameValid = name.trim().length > 0;
    const phoneValid = validatePhone(phone);
    const emailValid = validateEmail(email);
    const accountTypeValid = accountType.trim().length > 0;

    const isValid = nameValid && phoneValid && emailValid && accountTypeValid;

    updateFormData("contactDetails", {
      name,
      phone,
      email,
      accountType,
      isValid,
    });

    setErrors({
      name: nameValid ? "" : "Name is required",
      phone: phoneValid ? "" : "Valid 10-digit phone number is required",
      email: emailValid ? "" : "Valid email is required",
      accountType: accountTypeValid ? "" : "Account type is required",
    });
  }, [name, phone, email, accountType]);

  return (
    <div className="row">
      {/* Name */}
      <div className="col-md-6 mb-3">
        <label htmlFor="name" className="form-label">
          Contact Name <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {!errors.name && name && (
            <Check
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
              size={16}
            />
          )}
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
      </div>

      {/* Phone */}
      <div className="col-md-6 mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            id="phone"
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          {!errors.phone && phone && (
            <Check
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
              size={16}
            />
          )}
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="col-6 mb-3">
        <label htmlFor="email" className="form-label">
          Email ID <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {!errors.email && email && (
            <Check
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
              size={16}
            />
          )}
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
      </div>
      {/* Account Type */}
      {/* Account Type */}
      <div className="col-6 mb-3">
        <label htmlFor="accountType" className="form-label">
          Select Account Type <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <select
            id="accountType"
            className={`form-select ${errors.accountType ? "is-invalid" : ""}`}
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="">-- Select Account Type --</option>
            <option value="Retailer">Retailer</option>
            <option value="Distributor">Distributor</option>
            <option value="General User">General User</option>
          </select>
          {!errors.accountType && accountType && (
            <Check
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
              size={16}
            />
          )}
          {errors.accountType && (
            <div className="invalid-feedback">{errors.accountType}</div>
          )}
        </div>
      </div>
    </div>
  );
}
