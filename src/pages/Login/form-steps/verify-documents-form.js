import { useState, useEffect } from "react";

const documents = [
  { id: "pan-card", label: "PAN Card", required: true },
  { id: "aadhaar-card", label: "Aadhaar Card", required: true },
  { id: "shop-photo", label: "Shop Photo", required: true },
  { id: "passport-photo", label: "Passport Size Photo", required: true },
  // { id: "bank-passbook", label: "Bank Passbook Photo", required: true },
];

export default function VerifyDocumentsForm({ formData, updateFormData }) {
  const [activeDocument, setActiveDocument] = useState("pan-card");
  const [uploadedFiles, setUploadedFiles] = useState(
    formData.verifyDocuments.uploadedFiles || {
      "pan-card": null,
      "aadhaar-card": null,
      "shop-photo": null,
      "passport-photo": null,
      // "bank-passbook": null,
    }
  );

  const [verificationData, setVerificationData] = useState({
    "pan-card": { value: "", verified: false, loading: false, error: "" },
    "aadhaar-card": { value: "", verified: false, loading: false, error: "" },
  });

  const handleFileChange = (e, docId) => {
    const file = e.target.files[0];
    if (file && isValidFileType(file) && isValidFileSize(file)) {
      setUploadedFiles((prev) => ({ ...prev, [docId]: file }));
    }
  };

  const removeFile = (docId) => {
    setUploadedFiles((prev) => ({ ...prev, [docId]: null }));
  };

  const isValidFileType = (file) =>
    ["image/jpeg", "image/jpg", "image/png"].includes(file.type);

  const isValidFileSize = (file) => file.size <= 2 * 1024 * 1024;

  const handleVerify = async (docId) => {
    const number = verificationData[docId].value.trim();
    if (!number) {
      setVerificationData((prev) => ({
        ...prev,
        [docId]: { ...prev[docId], error: "Please enter a valid number" },
      }));
      return;
    }

    setVerificationData((prev) => ({
      ...prev,
      [docId]: { ...prev[docId], loading: true, error: "" },
    }));

    try {
      const res = await fetch(`/api/verify/${docId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: number }),
      });

      const result = await res.json();

      if (result.success) {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: { ...prev[docId], verified: true, loading: false },
        }));
      } else {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: {
            ...prev[docId],
            loading: false,
            error: result.message || "Verification failed",
          },
        }));
      }
    } catch (err) {
      setVerificationData((prev) => ({
        ...prev,
        [docId]: { ...prev[docId], loading: false, error: "Network error" },
      }));
    }
  };

  useEffect(() => {
    const requiredUploaded = documents
      .filter((doc) => doc.required)
      .every((doc) => uploadedFiles[doc.id]);

    const isValid = requiredUploaded;

    updateFormData("verifyDocuments", {
      uploadedFiles,
      isValid,
    });
  }, [uploadedFiles]);

  return (
    <div className="row">
      {/* Sidebar (Desktop) */}
      <div className="col-md-4 d-none d-md-block">
        <div className="list-group">
          {documents.map((doc) => (
            <button
              key={doc.id}
              className={`list-group-item list-group-item-action ${
                activeDocument === doc.id ? "active" : ""
              }`}
              onClick={() => setActiveDocument(doc.id)}
            >
              {doc.label} <span className="text-danger">*</span>
              {uploadedFiles[doc.id] && (
                <span className="badge bg-success float-end">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className="col-12 d-md-none mb-3">
        <select
          className="form-select"
          value={activeDocument}
          onChange={(e) => setActiveDocument(e.target.value)}
        >
          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.label} *{uploadedFiles[doc.id] ? " (Uploaded)" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Active document content */}
      <div className="col-md-8">
        {documents.map(
          (doc) =>
            activeDocument === doc.id && (
              <div key={doc.id} className="mb-4">
                <h5>
                  {doc.label} <span className="text-danger">*</span>
                </h5>

                {/* Verification section for PAN & Aadhaar */}
                {["pan-card", "aadhaar-card"].includes(doc.id) &&
                  !verificationData[doc.id].verified && (
                    <div className="mb-3">
                      <label className="form-label">
                        Enter {doc.label} Number
                      </label>
                      <div className="d-flex gap-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={`Enter ${doc.label}`}
                          value={verificationData[doc.id].value}
                          onChange={(e) =>
                            setVerificationData((prev) => ({
                              ...prev,
                              [doc.id]: {
                                ...prev[doc.id],
                                value: e.target.value.toUpperCase(),
                                error: "",
                              },
                            }))
                          }
                        />
                        <button
                          className="btn btn-primary"
                          disabled={verificationData[doc.id].loading}
                          onClick={() => handleVerify(doc.id)}
                        >
                          {verificationData[doc.id].loading
                            ? "Verifying..."
                            : "Verify"}
                        </button>
                      </div>
                      {verificationData[doc.id].error && (
                        <div className="text-danger small mt-1">
                          {verificationData[doc.id].error}
                        </div>
                      )}
                    </div>
                  )}

                {/* Upload File */}
                {uploadedFiles[doc.id] ? (
                  <div className="border p-3 mb-3 bg-light d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{uploadedFiles[doc.id].name}</strong>
                      <div className="text-muted small">
                        {(uploadedFiles[doc.id].size / 1024 / 1024).toFixed(2)}{" "}
                        MB
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFile(doc.id)}
                    >
                      Remove
                    </button>
                  </div>
                ) : ["pan-card", "aadhaar-card"].includes(doc.id) &&
                  !verificationData[doc.id].verified ? (
                  <div className="text-muted">
                    Please verify {doc.label} to upload the file.
                  </div>
                ) : (
                  <div className="mb-3">
                    <label className="form-label">Upload file</label>
                    <input
                      type="file"
                      className="form-control"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, doc.id)}
                    />
                    <div className="form-text">
                      Allowed Format - JPG, JPEG, PNG | Max Size 2MB
                    </div>
                  </div>
                )}

                <div className="text-muted small mb-3">
                  Upload a clear and valid {doc.label.toLowerCase()} image{" "}
                  <span className="text-danger">*</span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
