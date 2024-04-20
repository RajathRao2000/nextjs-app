import React from "react";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <div>DetailsPage</div>;
};

export default DetailsPage;
