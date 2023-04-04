import React, { ReactNode } from "react";
import Layout from "components/layout";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-center text-2xl font-bold dark-text-white">
        This is Dashboard.
      </h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactNode) {
  return <Layout layout="dashboard">{page}</Layout>;
};
