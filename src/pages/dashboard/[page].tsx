import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import Layout from "components/layout";

const Dashboard = () => {
  const router = useRouter();
  const path = router?.query.path;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-center text-2xl font-bold dark-text-white">
        This is Dashboard Page.
      </h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout layout="dashboard" router={useRouter()}>
      {page}
    </Layout>
  );
};
