import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import axiosInstance from "../../../components/services/AxiosInstance";

const MobileBrowsePlans1 = ({ operator, circle, onPlanSelect }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axiosInstance.get(`/v1/s3/recharge/browseplan`, {
          params: { circle, op: operator },
        });

        if (res.data?.data?.status) {
          const allPlans = [
            ...(res.data.data.info.TOPUP || []),
            ...(res.data.data.info["3G/4G"] || []),
            ...(res.data.data.info["2G"] || []),
            ...(res.data.data.info.SMS || []),
            ...(res.data.data.info.COMBO || []),
            ...(res.data.data.info.Romaing || []),
          ];
          setPlans(allPlans);
        }
      } catch (err) {
        console.error("Plans API Error:", err);
      }
    };

    if (operator && circle) fetchPlans();
  }, [operator, circle]);

  return (
    <div>
      {plans.map((plan, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>₹{plan.rs}</Card.Title>
            <Card.Text>{plan.desc}</Card.Text>
            <Card.Text>Validity: {plan.validity}</Card.Text>
            <Button
              variant="primary"
              onClick={() => onPlanSelect({
                amount: plan.rs,
                planDescription: plan.desc,
                validity: plan.validity,
              })}
            >
              Select
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MobileBrowsePlans1;
