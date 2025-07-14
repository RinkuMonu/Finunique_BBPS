"use client";

const BillDetailsSection = ({ billDetails, mpin, setMpin, referenceId, processPayment, loading, onBack }) => (
  <div className="container my-5">
    {/* Bill Details Card */}
    <div className="card mb-4 border-0 shadow-sm">
      <div className="card-header bg-primary bg-gradient text-white d-flex align-items-center py-3">
        <svg className="me-2" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h5 className="mb-0 fw-semibold text-white">Bill Details</h5>
      </div>
      <div className="card-body p-4">
  <div className="row g-3">
    {/* Customer Name */}
    <div className="col-md-4">
      <div className="bg-white p-3 rounded-3 h-100 shadow-sm border-0 d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
            <i className="bi bi-person-fill text-primary"></i>
          </div>
          <small className="text-muted text-uppercase fw-medium">Customer Name</small>
        </div>
        <p className="fw-bold mb-0 fs-5 text-truncate">{billDetails.name}</p>
      </div>
    </div>

    {/* Bill Amount */}
    <div className="col-md-4">
      <div className="bg-white p-3 rounded-3 h-100 shadow-sm border-0 d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <div className="bg-success bg-opacity-10 p-2 rounded-circle me-2">
            <i className="bi bi-currency-rupee text-success"></i>
          </div>
          <small className="text-muted text-uppercase fw-medium">Bill Amount</small>
        </div>
        <p className="fw-bold text-success mb-0 fs-5">₹{billDetails.amount}</p>
      </div>
    </div>

    {/* Due Date */}
    <div className="col-md-4">
      <div className="bg-white p-3 rounded-3 h-100 shadow-sm border-0 d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <div className="bg-danger bg-opacity-10 p-2 rounded-circle me-2">
            <i className="bi bi-calendar-check text-danger"></i>
          </div>
          <small className="text-muted text-uppercase fw-medium">Due Date</small>
        </div>
        <p className="fw-bold text-danger mb-0 fs-5">{billDetails.duedate}</p>
      </div>
    </div>

    {/* Additional Info 1 */}
    {billDetails.ad2 && (
      <div className="col-md-4">
        <div className="bg-white p-3 rounded-3 h-100 shadow-sm border-0 d-flex flex-column">
          <div className="d-flex align-items-center mb-2">
            <div className="bg-info bg-opacity-10 p-2 rounded-circle me-2">
              <i className="bi bi-info-circle text-info"></i>
            </div>
            <small className="text-muted text-uppercase fw-medium">Additional Info 1</small>
          </div>
          <p className="fw-bold mb-0 fs-5 text-truncate">{billDetails.ad2}</p>
        </div>
      </div>
    )}

    {/* Additional Info 2 */}
    {billDetails.ad3 && (
      <div className="col-md-4">
        <div className="bg-white p-3 rounded-3 h-100 shadow-sm border-0 d-flex flex-column">
          <div className="d-flex align-items-center mb-2">
            <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-2">
              <i className="bi bi-tag text-warning"></i>
            </div>
            <small className="text-muted text-uppercase fw-medium">Additional Info 2</small>
          </div>
          <p className="fw-bold mb-0 fs-5 text-truncate">{billDetails.ad3}</p>
        </div>
      </div>
    )}
  </div>
</div>
    </div>

    {/* Payment Information Card */}
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-success bg-gradient text-white d-flex align-items-center py-3">
        <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h5 className="mb-0 fw-semibold text-white">Payment Information</h5>
      </div>
      <div className="card-body p-4">
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label fw-medium">Enter MPIN <span className="text-danger">*</span></label>
            <div className="input-group">
              <input
                type="password"
                value={mpin}
                onChange={(e) => setMpin(e.target.value)}
                className="form-control text-center fw-bold py-2"
                placeholder="••••••"
                maxLength="6"
                disabled={loading}
              />
              <span className="input-group-text bg-light">
                <i className="bi bi-lock-fill text-muted"></i>
              </span>
            </div>
            <small className="form-text text-muted">Enter your 6-digit security PIN</small>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">Transaction Reference</label>
            <div className="input-group bg-light bg-opacity-25 rounded-3 px-3 py-2 border">
              <span className="form-control-plaintext text-monospace fw-medium">{referenceId}</span>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary rounded-pill ms-2"
                title="Copy"
                onClick={() => navigator.clipboard.writeText(referenceId)}
              >
                <i className="bi bi-clipboard me-1"></i> Copy
              </button>
            </div>
            <small className="form-text text-muted">Keep this reference for your records</small>
          </div>
        </div>

        <div className="bg-light bg-opacity-25 p-4 rounded-3 border d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "48px", height: "48px" }}>
              <i className="bi bi-credit-card fs-5 text-success"></i>
            </div>
            <div>
              <p className="mb-1 text-muted small">Total Amount to Pay</p>
              <h3 className="mb-0 fw-bold">₹{billDetails.amount}</h3>
            </div>
          </div>
          <div className="text-center text-md-end">
            <p className="mb-1 text-muted small">Payment Method</p>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
              <i className="bi bi-wallet2 me-2 text-success"></i>
              <p className="mb-0 fw-semibold">E-Wallet</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-center mt-4">
          <button 
            onClick={onBack} 
            className="btn btn-outline-secondary d-flex align-items-center px-4 py-2"
            disabled={loading}
          >
            <i className="bi bi-arrow-left me-2"></i> Back to Bill Search
          </button>
          <button
            onClick={processPayment}
            disabled={!mpin || mpin.length !== 6 || loading}
            className="btn btn-success btn-lg d-flex align-items-center px-4 py-2"
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

        <div className="alert alert-info mt-4 d-flex align-items-start rounded-3">
          <i className="bi bi-shield-lock-fill me-3 fs-5 mt-1 text-info"></i>
          <div>
            <strong className="d-block mb-1">Secure Transaction</strong>
            <p className="mb-0 small">Your MPIN is encrypted and never stored. This transaction is processed through secure payment channels.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BillDetailsSection;