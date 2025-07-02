import React from 'react';

const getStatusInfo = (statusCode, refunded) => {
  if (refunded === "1") return { text: "Refunded", color: "text-purple" };
  switch (statusCode) {
    case "0": return { text: "Success", color: "text-success" };
    case "1": return { text: "Pending", color: "text-warning" };
    case "2": return { text: "Failed", color: "text-danger" };
    case "3": return { text: "Processing", color: "text-primary" };
    default: return { text: "Unknown", color: "text-muted" };
  }
};

const PaymentStatusSection = ({
  paymentStatus,
  referenceId,
  checkPaymentStatus,
  statusCheckLoading,
  onBack
}) => {
  const paymentData = paymentStatus?.data?.data;

  if (!paymentData) {
    return (
      <div className="mt-4 p-3 bg-light rounded border">
        <h2 className="h5 mb-3">Payment Status Details</h2>
        <p className="text-danger">Payment data not available</p>
        <button
          onClick={onBack}
          className="mt-3 btn btn-secondary"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-3 p-4 border rounded shadow-sm bg-white">
      <h2 className="h5 mb-4 fw-semibold">Payment Status Details</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <small className="text-muted">Transaction ID</small>
          <p className="mb-0 fw-medium">{paymentData.txnid || 'N/A'}</p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Operator</small>
          <p className="mb-0 fw-medium">{paymentData.operatorname || 'N/A'}</p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Account Number</small>
          <p className="mb-0 fw-medium">{paymentData.canumber || 'N/A'}</p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Amount</small>
          <p className="mb-0 fw-medium">₹{paymentData.amount || '0'}</p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Status</small>
          <p className={`mb-0 fw-medium ${getStatusInfo(paymentData.status, paymentData.refunded).color}`}>
            {getStatusInfo(paymentData.status, paymentData.refunded).text}
          </p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Reference ID</small>
          <p className="mb-0 fw-medium">{paymentData.refid || referenceId || 'N/A'}</p>
        </div>
        <div className="col-md-6">
          <small className="text-muted">Date</small>
          <p className="mb-0 fw-medium">
            {paymentData.dateadded ? new Date(paymentData.dateadded).toLocaleString() : 'N/A'}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={onBack}
          className="btn btn-secondary"
        >
          Back
        </button>
        <button
          onClick={() => checkPaymentStatus(paymentData.refid || referenceId)}
          disabled={statusCheckLoading}
          className="btn btn-primary"
        >
          {statusCheckLoading ? 'Checking...' : 'Refresh Status'}
        </button>
      </div>
    </div>
  );
};

export default PaymentStatusSection;
