import { useRouter } from "next/router";
import React from "react";

const Developer = () => {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const devDetail = details.find((detail) => {
    return detail.id === Number(router.query.devid);
  });
  return (
    <div>
      {devDetail ? (
        <>
          <p>{devDetail.id}</p>
          <p>{devDetail.name}</p>
          <p>{devDetail.role}</p>
        </>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default Developer;
