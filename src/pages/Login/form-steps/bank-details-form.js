import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function BankDetailsForm({ formData, updateFormData }) {
  const [accountHolderName, setAccountHolderName] = useState(formData.bankDetails.accountHolderName || "");
  const [accountNumber, setAccountNumber] = useState(formData.bankDetails.accountNumber || "");
  const [ifscCode, setIfscCode] = useState(formData.bankDetails.ifscCode || "");

  const [errors, setErrors] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const validateIfsc = (ifsc) => {
    const re = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return re.test(ifsc);
  };

  useEffect(() => {
    const nameValid = accountHolderName.trim().length > 0;
    const accountNumberValid = accountNumber.trim().length >= 9 && accountNumber.trim().length <= 18;
    const ifscValid = validateIfsc(ifscCode);

    const isValid = nameValid && accountNumberValid && ifscValid;

    updateFormData("bankDetails", {
      accountHolderName,
      accountNumber,
      ifscCode,
      isValid,
    });

    setErrors({
      accountHolderName: nameValid ? "" : "Account holder name is required",
      accountNumber: accountNumberValid ? "" : "Valid account number is required (9-18 digits)",
      ifscCode: ifscValid ? "" : "Valid IFSC code is required (format: ABCD0123456)",
    });
  }, [accountHolderName, accountNumber, ifscCode]);

  return (
    <div className="row">
      {/* Account Holder Name */}
      <div className="col-md-6 mb-3">
        <label htmlFor="accountHolderName" className="form-label">
          Account Holder Name <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="text"
            id="accountHolderName"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            className={`form-control ${errors.accountHolderName ? "is-invalid" : ""}`}
            placeholder="Enter account holder name"
          />
          {!errors.accountHolderName && accountHolderName && (
            <Check className="position-absolute top-50 end-0 translate-middle-y me-2 text-success" size={16} />
          )}
          {errors.accountHolderName && <div className="invalid-feedback">{errors.accountHolderName}</div>}
        </div>
      </div>

      {/* Account Number */}
      <div className="col-md-6 mb-3">
        <label htmlFor="accountNumber" className="form-label">
          Account Number <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className={`form-control ${errors.accountNumber ? "is-invalid" : ""}`}
            placeholder="Enter account number"
          />
          {!errors.accountNumber && accountNumber && (
            <Check className="position-absolute top-50 end-0 translate-middle-y me-2 text-success" size={16} />
          )}
          {errors.accountNumber && <div className="invalid-feedback">{errors.accountNumber}</div>}
        </div>
      </div>

      {/* IFSC Code */}
      <div className="col-md-12 mb-3">
        <label htmlFor="ifscCode" className="form-label">
          IFSC Code <span className="text-danger">*</span>
        </label>
        <div className="position-relative">
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
            className={`form-control ${errors.ifscCode ? "is-invalid" : ""}`}
            placeholder="Enter IFSC code"
          />
          {!errors.ifscCode && ifscCode && (
            <Check className="position-absolute top-50 end-0 translate-middle-y me-2 text-success" size={16} />
          )}
          {errors.ifscCode && <div className="invalid-feedback">{errors.ifscCode}</div>}
        </div>
      </div>
    </div>
  );
}
