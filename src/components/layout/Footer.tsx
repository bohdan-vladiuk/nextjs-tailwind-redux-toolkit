import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800">
      <div className="container flex items-center px-6 h-12 bg:text-white">
        © 2023 Next.js/Typescript/Tailwind CSS website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
