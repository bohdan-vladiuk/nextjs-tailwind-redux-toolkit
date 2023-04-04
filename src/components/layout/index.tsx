import React, { ReactNode } from "react";
import styles from "styles/Home.module.scss";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  layout?: string;
  children: ReactNode;
  router?: any;
};

const Layout: React.FC<Props> = ({ layout = "blank", children, router }) => {
  if (layout === "dashboard") {
    return (
      <>
        <Navbar />
        <div className="flex">
          <div className="flex-none">
            <Sidebar path={router?.query.page} />
          </div>
          <div className="flex-auto">{children}</div>
        </div>
        <Footer />
      </>
    );
  }

  if (layout === "home") {
    return (
      <>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </>
    );
  }

  return <>{children}</>;
};

export default Layout;
