import React from 'react'
import ServiceItem from "./ServiceItem"
import "./OurService.css"


function OurService() {
  
    const services = [
        {
          imgSrc: "/assets/DTH.png",
          title: "DTH Recharge",
          description:
            "Credit cards offer convenience and a long list of benefits that cash doesn't provide, but we provide instant cash on all credit cards any time and any cities.",
        },
        {
          imgSrc: "/assets/Electricity.png",
          title: "Electricity Bill",
          description:
            "Pay your Electricity bill online using the Pay ABDKS Solutions Private Limited app. We use best in industry technology to make it fast and reliable.",
        },
        {
          imgSrc: "/assets/Utility.png",
          title: "Pay Utility Bill",
          description:
            "How difficult to make payment for your utility bills at marchand outlet that does not accept credit card but we make it easy for you with our credit card payment system.",
        },
        {
          imgSrc: "/assets/Mobile.png",
          title: "Mobile Recharge",
          description:
            "Mobile Recharge Services are the fastest and reliable as everything happen in seconds with ninety nine percent of success ratio in prepaid recharges.",
        },
        {
          imgSrc: "/assets/BBPS.png",
          title: "BBPS",
          description:
            "ABDKS Solutions Private Limited offers its customers to pay their bills with just a click. No need to stand in queue at operator’s office anymore.",
        },
        {
          imgSrc: "/assets/Recharge.png",
          title: "Recharge Services",
          description:
            "ABDKS Solutions Private Limited recharge service covers all major service providers of Mobile, And you can earn best commission on each recharge.",
        },
      ];
    
  return (
    <>
       <section className="page-title ">
      <img src="/assets/our service-01.svg" alt="services" />
    </section>
   

    <section className="page-content text-col marginTop">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-12">
            <div className="theme-title">
              <h2 className='fw-400'>
                Services that we offer to our clients at a glance. We have
                earned 3+ years expertise in fintech services. You just need to
                tell us about your requirements, we will strictly take care of
                that.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default OurService
