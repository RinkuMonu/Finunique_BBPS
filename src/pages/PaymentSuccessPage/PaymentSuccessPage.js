import React from 'react';

const PaymentConfirmation = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow border rounded p-3" style={{ width: '32rem', fontSize: '14px' }}>
                {/* Header with Logos */}
                <div className="d-flex justify-content-between align-items-center px-2">
                    <h6 className="text-danger fw-bold m-0">NetBanking</h6>
                    <img src="./assets/Home/bbps_assured.png" alt="Assured" width={50} />
                </div>

                {/* Title */}
                <h6 className="text-center text-primary mt-2">Bharat Connect - Payment Confirmation</h6>
                <p className="text-center text-muted mb-2" style={{ fontSize: '13px' }}>
                    <strong>Thank You.</strong> We have received your payment request.  
                    Please quote your Transaction Reference ID for any queries.
                </p>

                {/* Table */}
                <table className="" style={{ fontSize: '12px' }}>
                    <tbody>
                        <tr><th className="w-50">Name of the Biller</th><td>PostPaid</td></tr>
                        <tr><th>Mobile Number</th><td>XXXXXXXXXX</td></tr>
                        <tr><th>Bill Number</th><td>XXXXXXX</td></tr>
                        <tr><th>Bill Date</th><td>29/06/2017</td></tr>
                        <tr><th>Due Date</th><td>29/06/2017</td></tr>
                        <tr><th>B-Connect Txn ID</th><td>XXXXXXX</td></tr>
                        <tr><th>Registered Mobile</th><td>XXXXXXXXXX</td></tr>
                        <tr><th>Payment Mode</th><td>Internet Banking</td></tr>
                        <tr><th>Payment Channel</th><td>Internet Banking (Logged In)</td></tr>
                        <tr><th>Bill Amount</th><td>₹10.00</td></tr>
                        <tr><th>Convenience Fee</th><td>₹0.00</td></tr>
                        <tr><th>Total Amount</th><td>₹10.00</td></tr>
                        <tr><th>Transaction Time</th><td>29/06/2017 23:17:03</td></tr>
                        <tr>
                            <th>Status</th>
                            <td className="text-success fw-bold">PAID</td>
                        </tr>
                    </tbody>
                </table>

                {/* Links */}
                <div className="d-flex justify-content-between mt-2">
                    <a href="#" className="text-primary small">Print This Page</a>
                    <a href="#" className="text-primary small">Make Another Payment</a>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
