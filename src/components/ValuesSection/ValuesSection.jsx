import React from "react";
import ValuesCard from "../common/ValuesCard";
import "./ValuesSection.css";
const ValuesSection = () => {
  const topValuesData = [
    {
      src: "/Values/fast delivery.png",
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      src: "/Values/money.png",
      title: "Money-back",
      description: "30 days guarantee",
    },
  ];
  const bottomValuesData = [
    {
      src: "/Values/lock 01.png",
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      src: "/Values/call.png",
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];
  return (
    <section className="valuesSection-container container">
      {/* Value left Side */}
      <div className="topValues">
        {topValuesData.map((item, i) => (
          <ValuesCard key={i} data={item} />
        ))}
      </div>
      {/* Value Right Side */}
      <div className="bottomValues">
        {bottomValuesData.map((item, i) => (
          <ValuesCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
