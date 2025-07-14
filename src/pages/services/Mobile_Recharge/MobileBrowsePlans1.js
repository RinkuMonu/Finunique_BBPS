import React, { useState, useEffect } from "react";
import { Tab, Tabs, Table, Spinner, Alert } from "react-bootstrap";
import axiosInstance from "../../../components/services/AxiosInstance";

const MobileBrowsePlans1 = ({ operator, circle, onPlanSelect }) => {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("3G/4G");

  useEffect(() => {
    if (operator && circle) {
      fetchPlans();
    }
  }, [operator, circle]);

  const fetchPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/v1/s3/recharge/browseplan?circle=${encodeURIComponent(
          circle
        )}&op=${encodeURIComponent(operator)}`
      );

      if (response.data?.data?.status) {
        setPlans(response.data.data.info);
      } else {
        setError("Failed to fetch plans. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching plans:", err);
      setError("An error occurred while fetching plans.");
    } finally {
      setLoading(false);
    }
  };

  const handlePlanSelect = (plan) => {
    onPlanSelect({
      amount: plan.rs,
      planDescription: plan.desc,
      validity: plan.validity,
    });
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading plans...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-3">
        {error}
      </Alert>
    );
  }

  if (!plans) {
    return (
      <div className="text-center py-4">
        <p>No plans available for the selected operator and circle.</p>
      </div>
    );
  }

  const planCategories = Object.keys(plans).filter(
    (category) => plans[category] && plans[category].length > 0
  );

  return (
    <div>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
         style={{ color: "#efb33b" }}
      >
        {planCategories.map((category) => (
        <Tab
          key={category}
          eventKey={category}
          title={
            <span
              style={{
                color: "#efb33b",
                fontWeight: activeTab === category ? "bold" : "normal",
              }}
            >
              {category}
            </span>
          }
        >
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Amount (₹)</th>
                    <th>Description</th>
                    <th>Validity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {plans[category].map((plan, index) => (
                    <tr key={`${category}-${index}`}>
                      <td>{plan.rs}</td>
                      <td
                        dangerouslySetInnerHTML={{ __html: plan.desc }}
                        style={{ textAlign: "left" }}
                      />
                      <td>{plan.validity === "N/A" ? "-" : plan.validity}</td>
                      <td>
                        <button
                          className="btn btn-sm text-white"
                          style={{
                            backgroundColor: "#efb33b",
                            borderColor: "#efb33b",
                          }}
                          onClick={() => handlePlanSelect(plan)}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default MobileBrowsePlans1;
