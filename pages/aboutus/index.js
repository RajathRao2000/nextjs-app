import React from "react";
import Link from "next/link";
const AboutUs = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <section className="aboutus">
      {details.map((detail) => {
        return (
          <div key={detail.id} className="person-detail">
            Name: <Link href={`aboutus/${detail.id}`}>{detail.name}</Link>
          </div>
        );
      })}
    </section>
  );
};

export default AboutUs;
