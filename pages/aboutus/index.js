import React from "react";

const AboutUs = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return <section className="aboutus">
    {details.map(detail=>{
      return <div key={detail.id} className="person-detail">
        <p>id: {detail.id}</p>
        <p>Name: {detail.name}</p>
        <p>Role: {detail.role}</p>
      </div>
    })}
  </section>;
};

export default AboutUs;
