import React, { useEffect, useState } from "react";
import { Dropdown, Table, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { planFetch, clearPlans } from "../../../Features/Recharge/rechargeSlice";

const categories = [  // 33
  { name: "All Plans", id: "1" },
  { name: "Full Talktime", id: "2" },
  { name: "Topup", id: "3" },
  { name: "Validity Recharge", id: "4" },
  { name: "Local SMS Pack", id: "5" },
  { name: "SMS", id: "6" },
  { name: "General SMS Pack", id: "7" },
  { name: "3G", id: "8" },
  { name: "Data", id: "9" },
  { name: "Lifetime Validity", id: "10" },
  { name: "Night Packs", id: "11" },
  { name: "Unlimited Talktime", id: "12" },
  { name: "Local Call", id: "13" },
  { name: "STD", id: "14" },
  { name: "ISD", id: "15" },
  { name: "Rate Cutter", id: "16" },
  { name: "Special Offer", id: "17" },
  { name: "4G", id: "18" },
  { name: "Monthly", id: "19" },
  { name: "3 Month", id: "20" },
  { name: "6 Month", id: "21" },
  { name: "Annual", id: "22" },
  { name: "Channel", id: "23" },
  { name: "Popular", id: "24" },
  { name: "121 Made For You", id: "30" },
  { name: "Best Offers", id: "31" },
  { name: "Jio Phone", id: "41" },
  { name: "Smart Phone", id: "42" },
  { name: "MNP", id: "43" },
  { name: "Data Addon", id: "45" },
  { name: "International Roaming", id: "46" },
  { name: "JIO CRICKET PLANS", id: "47" },
  { name: "Popular (For JIO)", id: "48" },
];

const MobileBrowsePlans = ({ onPlanSelect }) => {
  const [selectedOperator, setSelectedOperator] = useState("airtel");  // company name
  const [selectedRegion, setSelectedRegion] = useState("1");   // state
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showData, setShowData]= useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

 
  // useEffect(() => {
  //   if (selectedCategory?.id) {
  //     const filteredData = allData.filter(
  //       (data) => data.planType === Number(selectedCategory.id)
  //     );
  //     setShowData(filteredData);
  //   } else {
  //     setShowData(allData);
  //   }
  // }, [selectedCategory, allData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const body = {
  //         op_id:selectedOperator,
  //         cir_id:selectedRegion,
  //         plan_type:Number(selectedCategory?.id)
  //       }
  //       const response = await axios.post('https://finpay-b2c-backend.onrender.com/api/plan/plansAPI', body)
  //       console.log('........... RR', response);
  //       // const filteredCategories = categories.filter(category =>
  //       //   response.data.data.plans.find(item => category.id === item.planType.toString())
  //       // );
  //       // console.log('............... RES', filteredCategories)
  //       // setSelectedCategories(filteredCategories)

  //       // categories.filter((cat) => cat.id)
        
  //       // setData(response.data);
  //       // setLoading(false);
  //     } catch (err) {
  //       // setError('Failed to fetch data');
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  //   // console.log('................. sele', selectedCategory)
  // }, [selectedCategory?.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = {
          op_id:selectedOperator,
          cir_id:selectedRegion
        }
        const response = await axios.post('https://finpay-b2c-backend.onrender.com/api/plan/plansAPI', body)
        console.log('........... LL', response);
        setAllData(response.data.data.plans);
        const filteredCategories = categories.filter(category =>
          response.data.data.plans.find(item => category?.id === item?.planType?.toString())
        );
          setShowData(filteredCategories)

        console.log('............... RES', filteredCategories)
        setSelectedCategories(filteredCategories)
        console.log("filteredCategories....",filteredCategories)

        // categories.filter((cat) => cat.id)
        
        // setData(response.data);
        // setLoading(false);
      } catch (err) {
        // setError('Failed to fetch data');
        // setLoading(false);
      }
    };

    fetchData();
  }, [selectedOperator, selectedRegion]);
  useEffect(() => {
    let filteredData = allData;


    // Filter by Category
    if (selectedCategory?.id) {
      filteredData = allData.filter(
        (data) => data.planType === Number(selectedCategory.id)
      );
    }

    // Filter by Search Query (Amount)
    if (searchQuery) {
      filteredData = filteredData.filter((data) =>
        data.amount.toString().includes(searchQuery)
      );
    }

    setShowData(filteredData);
  }, [selectedCategory, allData, searchQuery]);

     
  
  
  const operators = [
    { name: "Airtel", id: "1" },
    { name: "Jio", id: "140" },
    { name: "Vi", id: "4" },
    { name: "BSNL", id: "5" },
  ];


  const circles = [
    { name: "Andhra Pradesh", id: "1" },
    { name: "Assam", id: "2" },
    { name: "Bihar & Jharkhand", id: "3" },
    { name: "Chennai", id: "4" },
    { name: "Delhi & NCR", id: "5" },
    { name: "Gujarat", id: "6" },
    { name: "Haryana", id: "7" },
    { name: "Himachal Pradesh", id: "8" },
    { name: "Jammu & Kashmir", id: "9" },
    { name: "Karnataka", id: "10" },
    { name: "Kerala", id: "11" },
    { name: "Kolkata", id: "12" },
    { name: "Maharashtra & Goa (except Mumbai)", id: "13" },
    { name: "MP & Chattisgarh", id: "14" },
    { name: "Mumbai", id: "15" },
    { name: "North East", id: "16" },
    { name: "Orissa", id: "17" },
    { name: "Punjab", id: "18" },
    { name: "Rajasthan", id: "19" },
    { name: "Tamilnadu", id: "20" },
    { name: "UP(EAST)", id: "21" },
    { name: "UP(WEST) & Uttarakhand", id: "22" },
    { name: "West Bengal", id: "23" },
    { name: "All India (except Delhi/Mumbai)", id: "51" },
  ];
  

  // const categories = [
  //   "Smart Phone",
  //   "Jio Phone",
  //   "International Roaming",
  //   "Top up",
  //   "Special Offer",
  // ];

//   const dispatch = useDispatch();
// const { plans} = useSelector((state) => state.plans);

// useEffect(() => {
//   dispatch(planFetch({ op_id: selectedOperator, cir_id: selectedRegion }));

//   return () => {
//     dispatch(clearPlans()); // Clear data on unmount
//   };
// }, [selectedOperator, selectedRegion, dispatch]);

// useEffect(() => {

// }, [planType])



  

  return (
    <div className="container">
      {/* Filters Section */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
      <Dropdown className="mb-2 mb-md-0">
          <Dropdown.Toggle
            id="dropdown-operator"
            style={{ backgroundColor: "var(--themeht-primary-color)" }}
          >
            {operators.find((op) => op.id === selectedOperator)?.name || "Select Operator"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {operators.map((op) => (
              <Dropdown.Item key={op.id} onClick={() => setSelectedOperator(op.id)}>
                {op.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

         {/* Circle Dropdown */}
         <Dropdown className="mb-2 mb-md-0">
          <Dropdown.Toggle
            id="dropdown-region"
            style={{ backgroundColor: "var(--themeht-primary-color)" }}
          >
            {circles.find((circle) => circle.id === selectedRegion)?.name || "Select Region"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {circles.map((circle) => (
              <Dropdown.Item key={circle.id} onClick={() => setSelectedRegion(circle.id)}>
                {circle.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

   
        <div className="align-items-center">
          <input
            type="text"
            className="form-control  mb-2 mb-md-0 mt-2 align-items-center"
            placeholder="Search by Amount"
             value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-3" style={{ maxHeight: "50vh", overflowY: "auto" }}>
          <Nav className="flex-column p-2 ">
            {selectedCategories?.map((category, index) => (
              <Nav.Link
                key={category?.id}
                href="#"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory?.id === category?.id
                    ? "active text-white"
                    : "text-dark"
                }`}
                style={{
                  fontSize: "16px",
                  padding: "10px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  backgroundColor:
                    selectedCategory?.id === category?.id
                      ? "var(--themeht-primary-color)"
                      : "#fff",
                }}
              >
                {category?.name}
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div style={{ maxHeight: "50vh", overflowY: "auto" }}>
            <Table bordered hover responsive className="bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Talktime</th>
                  <th>Validity</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>

                {showData.map((plan, index) => (
                  <tr key={index}>
                    <td>{plan.talktime}</td>
                    <td>{plan.validity}</td>
                    <td style={{ whiteSpace: "pre-wrap" }}>
                      {plan.planDescription}
                    </td>
                   
                    <td>
                      <button
                        className=" align-items-center p-2 "
                        style={{
                          color: "white",
                          backgroundColor: "#001e50",
                          borderRadius: "8px",
                          outline: "none",
                          
                        }}
                        onClick={()=> onPlanSelect(plan)}
                        
                      >
                        ₹{plan.amount}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBrowsePlans;