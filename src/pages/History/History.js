import React, { useEffect, useState } from 'react';
import './History.css';
import axios from 'axios';
import axiosInstance from '../../axiosinstanse/axiosInstance';

function History() {
  const [payins, setPayins] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const payinRes = await axiosInstance.get('v1/payment/payin?page=1&limit=10');
      const payoutRes = await axiosInstance.get('v1/payment/payout?page=1&limit=10');

      setPayins(payinRes.data.data || []);
      setPayouts(payoutRes.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const formatDate = (dateStr) => {
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', hour12: true,
    };
    return new Date(dateStr).toLocaleString('en-US', options);
  };

  return (
    <>
      <section className='history-section'>
        <div className='container'>
          <div className='row'>
            <div className="main-content">
              <div className="top-area hero-section-content text-center">
                <h5 className="sub-heading animBottomIn fw-semibold">
                  Payments History
                </h5>
                <h1 className="top-section-heading ft55 animBottomIn AO3 Blue_Heading">
                  View all Financial History
                </h1>
                <p className="cmnFtLh animBottomIn text-black">
                  Track all your expenses at one place
                </p>
                <ul className="nolisttype px-md-0">
                  <li className="d-md-flex px-3">
                    <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
                    <div className='text-black fs-6 align-self-center'> Save time</div>
                  </li>
                  <li className="d-md-flex px-3">
                    <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
                    <div className='text-black fs-6 align-self-center'>Save money</div>
                  </li>
                  <li className="d-md-flex px-3">
                    <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
                    <div className='text-black fs-6 align-self-center'>Helps you grow</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='table-responsive'>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <table className="table tb-plain borderless">
                    <thead>
                      <tr>
                        <th className="fw-bold">Date</th>
                        <th className="fw-bold">Description</th>
                        <th className="fw-bold">Reference</th>
                        <th className="fw-bold">Amount</th>
                        <th className="fw-bold">Status</th>
                        <th className="fw-bold">Type</th>
                        <th className="fw-bold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payins.map((item) => (
                        <tr key={item._id}>
                          <td className="fs-6">{formatDate(item.createdAt)}</td>
                          <td className="fs-6 fund-td">
                            Credit from {item.name}</td>
                          <td className="fs-6"> {item.reference}</td>
                          <td className="fs-6">₹ {item.amount}</td>
                          <td className="fs-6">{item.status}</td>
                          <td className="fs-6">Credit</td>
                          <td>
                            <button type="button" className="btn InvoiceBtn">Invoice</button>
                          </td>
                        </tr>
                      ))}
                      {payouts.map((item) => (
                        <tr key={item._id}>
                          <td className="fs-6">{formatDate(item.createdAt)}</td>
                          <td className="fs-6 fund-td">
                            Debit to {item.name}
                          
                          </td>
                               <td className="fs-6"> {item.reference}</td>
                          <td className="fs-6">₹ {item.amount}</td>
                          <td className="fs-6">{item.status}</td>
                          <td className="fs-6">Debit</td>
                          <td>
                            <button type="button" className="btn InvoiceBtn">Invoice</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
