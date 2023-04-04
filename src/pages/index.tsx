import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

import styles from "styles/Home.module.scss";
import { useSelector, RootState } from "store";

import Layout from "components/layout";
import ThemeSwitch from "components/ThemeSwitch";

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>Next.js & Tailwind CSS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitch />
      <div className={`${styles.main} dark-text-white`}>
        <ul className="px-20 list-disc">
          <li className="relative">
            <span>Toggle Dark / Light theme with theme toggle button.</span>
            <div className="absolute top-0 left-[370px] ml-3 p-1 w-fit rounded bg-gray-900 text-white dark:hidden">
              <FaSun />
            </div>
            <div className="absolute top-0 left-[370px] ml-3 p-1 w-fit rounded bg-gray-100 text-black hidden dark:block">
              <FaMoon />
            </div>
          </li>
          <li>
            Select Dashboard on the top navbar and select an item you are going
            to navigate to.
          </li>
          <li>
            Enter "/dashboard/
            <span className="text-indigo-600">[item title]</span>" in the
            browser to navigate to the item in the side bar. <br />
            If you enter wrong item title, it will direct to dashboard item.{" "}
            <br />
            Sidebar is implemented by Ant Design Sider and Menu components.
          </li>
          <li>
            Select LogIn to see Login page. <br />{" "}
            <span className="font-bold">Form validation</span> is implemented by{" "}
            <span className="font-bold"> React-Hook-Form</span> and{" "}
            <span className="font-bold"> Yup</span>. <br />
            Password should include one lowercase letter, one uppercase letter,
            one number, one special character, more than 8 characters
          </li>
        </ul>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout layout="home">{page}</Layout>;
};