import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function BusinessDetailsForm({ formData, updateFormData }) {
  const [businessName, setBusinessName] = useState(formData.businessDetails.businessName || "");
  const [businessType, setBusinessType] = useState(formData.businessDetails.businessType || "");
  const [address, setAddress] = useState(formData.businessDetails.address || "");

  const [errors, setErrors] = useState({
    businessName: "",
    businessType: "",
    address: "",
  });

  useEffect(() => {
    const businessNameValid = businessName.trim().length > 0;
    const businessTypeValid = businessType.trim().length > 0;
    const addressValid = address.trim().length > 0;

    const isValid = businessNameValid && businessTypeValid && addressValid;

    updateFormData("businessDetails", {
      businessName,
      businessType,
      address,
      isValid,
    });

    setErrors({
      businessName: businessNameValid ? "" : "Business name is required",
      businessType: businessTypeValid ? "" : "Business type is required",
      address: addressValid ? "" : "Address is required",
    });
  }, [businessName, businessType, address]);

  return (
    <div className="row">
      {/* Business Name */}
      <div className="col-md-6 mb-3">
        <label htmlFor="businessName" className="form-label">
          Business Name <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="text"
            id="businessName"
            className={`form-control ${errors.businessName ? "is-invalid" : ""}`}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter business name"
          />
          {!errors.businessName && businessName && (
            <Check className="position-absolute top-50 end-0 translate-middle-y me-2 text-success" size={16} />
          )}
          {errors.businessName && <div className="invalid-feedback">{errors.businessName}</div>}
        </div>
      </div>

      {/* Business Type */}
      <div className="col-md-6 mb-3">
        <label htmlFor="businessType" className="form-label">
          Business Type <span className="text-danger">*</span>
        </label>
        <select
          id="businessType"
          className={`form-select ${errors.businessType ? "is-invalid" : ""}`}
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        >
          <option value="">Select business type</option>
          <option value="sole-proprietorship">Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="llp">Limited Liability Partnership</option>
          <option value="private-limited">Private Limited Company</option>
          <option value="public-limited">Public Limited Company</option>
        </select>
        {errors.businessType && <div className="invalid-feedback">{errors.businessType}</div>}
      </div>

      {/* Business Address */}
      <div className="col-12 mb-3">
        <label htmlFor="address" className="form-label">
          Business Address <span className="text-danger">*</span>
        </label>
        <textarea
          id="address"
          className={`form-control ${errors.address ? "is-invalid" : ""}`}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          placeholder="Enter business address"
        />
        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
      </div>
    </div>
  );
}
