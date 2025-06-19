import { useState, useEffect } from "react"

const documents = [
  { id: "business-pan", label: "Business PAN", required: true },
  { id: "certificate-of-incorporation", label: "Certificate of Incorporation", required: true },
  { id: "gst-certificate", label: "GST Certificate", required: true },
  { id: "moa-aoa", label: "MOA/AOA", required: false },
  { id: "board-resolution", label: "Board Resolution for Authorised Person", required: true },
  { id: "kyc-authorised-signatory", label: "KYC for Authorised Signatory", required: true },
]

const cipherOptions = [
  { id: "cipher-connect", label: "1. Cipher Connect" },
  { id: "cipher-payout", label: "2. Cipher Payout" },
  { id: "cipher-reseller", label: "4. Cipher Reseller" },
  { id: "cipher-aggregator", label: "5. Cipher Aggregator" },
]

export default function VerifyDocumentsForm({ formData, updateFormData }) {
  const [activeDocument, setActiveDocument] = useState("business-pan")
  const [uploadedFiles, setUploadedFiles] = useState(
    formData.verifyDocuments.uploadedFiles || {
      "business-pan": null,
      "certificate-of-incorporation": null,
      "gst-certificate": null,
      "moa-aoa": null,
      "board-resolution": null,
      "kyc-authorised-signatory": null,
    }
  )
  const [consensus, setConsensus] = useState(formData.verifyDocuments.consensus || [])

  const handleFileChange = (e, docId) => {
    const file = e.target.files[0]
    if (file && isValidFileType(file) && isValidFileSize(file)) {
      setUploadedFiles((prev) => ({ ...prev, [docId]: file }))
    }
  }

  const removeFile = (docId) => {
    setUploadedFiles((prev) => ({ ...prev, [docId]: null }))
  }

  const toggleConsensus = (id) => {
    setConsensus((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const isValidFileType = (file) =>
    ["image/jpeg", "image/jpg", "image/png"].includes(file.type)

  const isValidFileSize = (file) => file.size <= 2 * 1024 * 1024

  useEffect(() => {
    const requiredUploaded = documents
      .filter((doc) => doc.required)
      .every((doc) => uploadedFiles[doc.id])

    const isValid = requiredUploaded && consensus.length > 0

    updateFormData("verifyDocuments", {
      uploadedFiles,
      consensus,
      isValid,
    })
  }, [uploadedFiles, consensus])

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
              {doc.label} {doc.required && <span className="text-danger">*</span>}
              {uploadedFiles[doc.id] && <span className="badge bg-success float-end">✓</span>}
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
              {doc.label} {doc.required ? "*" : ""}
              {uploadedFiles[doc.id] ? " (Uploaded)" : ""}
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
                  {doc.label} {doc.required && <span className="text-danger">*</span>}
                </h5>

                {uploadedFiles[doc.id] ? (
                  <div className="border p-3 mb-3 bg-light d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{uploadedFiles[doc.id].name}</strong>
                      <div className="text-muted small">
                        {(uploadedFiles[doc.id].size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFile(doc.id)}
                    >
                      Remove
                    </button>
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
                  Details should be of the mentioned business only{" "}
                  <span className="text-danger">*</span>
                </div>

                {/* Consensus Section */}
                {doc.id === "business-pan" && (
                  <div className="mt-4">
                    <h6>Please give consensus for:</h6>
                    {cipherOptions.map((option) => (
                      <div className="form-check" key={option.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={option.id}
                          checked={consensus.includes(option.id)}
                          onChange={() => toggleConsensus(option.id)}
                        />
                        <label className="form-check-label" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  )
}
