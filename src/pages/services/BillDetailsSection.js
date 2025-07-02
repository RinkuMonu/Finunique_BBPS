"use client";

const BillDetailsSection = ({ billDetails, mpin, setMpin, referenceId, processPayment, loading, onBack }) => (
  <div className="container my-4">
    {/* Bill Details Card */}
    <div className="card mb-4">
      <div className="card-header bg-primary text-white d-flex align-items-center">
        <svg className="me-2" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h5 className="mb-0">Bill Details</h5>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-lg-4">
            <div className="border-start border-4 border-primary bg-light p-3 rounded">
              <small className="text-muted text-uppercase">Customer Name</small>
              <p className="fw-bold mb-0">{billDetails.name}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-start border-4 border-success bg-light p-3 rounded">
              <small className="text-muted text-uppercase">Bill Amount</small>
              <p className="fw-bold text-success mb-0">₹{billDetails.amount}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-start border-4 border-danger bg-light p-3 rounded">
              <small className="text-muted text-uppercase">Due Date</small>
              <p className="fw-bold text-danger mb-0">{billDetails.duedate}</p>
            </div>
          </div>
          {billDetails.ad2 && (
            <div className="col-lg-4">
              <div className="border-start border-4 border-purple bg-light p-3 rounded">
                <small className="text-muted text-uppercase">Additional Info 1</small>
                <p className="fw-bold mb-0">{billDetails.ad2}</p>
              </div>
            </div>
          )}
          {billDetails.ad3 && (
            <div className="col-lg-4">
              <div className="border-start border-4 border-warning bg-light p-3 rounded">
                <small className="text-muted text-uppercase">Additional Info 2</small>
                <p className="fw-bold mb-0">{billDetails.ad3}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Payment Information Card */}
    <div className="card mb-4">
      <div className="card-header bg-success text-white d-flex align-items-center">
        <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h5 className="mb-0">Payment Information</h5>
      </div>
      <div className="card-body">
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Enter MPIN <span className="text-danger">*</span></label>
            <input
              type="password"
              value={mpin}
              onChange={(e) => setMpin(e.target.value)}
              className="form-control text-center fw-bold"
              placeholder="Enter your 6-digit MPIN"
              maxLength="6"
              disabled={loading}
            />
            <small className="form-text text-muted">Enter your 6-digit PIN</small>
          </div>
          <div className="col-md-6">
            <label className="form-label">Transaction Reference</label>
            <div className="input-group bg-light rounded px-3 py-2 border">
              <span className="form-control-plaintext text-monospace">{referenceId}</span>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                title="Copy"
                onClick={() => navigator.clipboard.writeText(referenceId)}
              >
                <i className="bi bi-clipboard"></i>
              </button>
            </div>
            <small className="form-text text-muted">Keep this reference for your records</small>
          </div>
        </div>

        <div className="bg-light p-3 rounded border d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-wallet2 text-success"></i>
            </div>
            <div>
              <p className="mb-1 text-muted">Total Amount to Pay</p>
              <h4 className="mb-0">₹{billDetails.amount}</h4>
            </div>
          </div>
          <div className="text-end">
            <p className="mb-1 text-muted">Payment Method</p>
            <p className="mb-0 fw-medium">E-Wallet</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between">
          <button onClick={onBack} className="btn btn-light d-flex align-items-center">
            <i className="bi bi-arrow-left me-2"></i> Back to Bill Search
          </button>
          <button
            onClick={processPayment}
            disabled={!mpin || mpin.length !== 4 || loading}
            className="btn btn-success d-flex align-items-center"
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Processing Payment...
              </>
            ) : (
              <>
                <i className="bi bi-credit-card me-2"></i> Pay Now - ₹{billDetails.amount}
              </>
            )}
          </button>
        </div>

        <div className="alert alert-info mt-4 d-flex">
          <i className="bi bi-shield-lock-fill me-3 fs-5 text-info"></i>
          <div>
            <strong>Security Notice</strong>
            <p className="mb-0">Your MPIN is encrypted and secure. Never share it. This transaction is processed securely.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BillDetailsSection;
