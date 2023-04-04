import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between px-12 w-full bg-gray-200 dark:bg-gray-800">
      <div className="flex-none flex gap-4">
        <Link
          href="/"
          className="h-16 px-2 flex items-center justify-center border-y-2 hover:border-b-blue-600 dark:border-y-gray-800 dark:hover:border-b-blue-600"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="h-16 px-2 flex items-center justify-center border-y-2 hover:border-b-blue-600 dark:border-y-gray-800 dark:hover:border-b-blue-600"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex-auto flex justify-end">
        <Link
          href="/login"
          className="h-16 px-2 flex items-center justify-center border-y-2 hover:border-b-blue-600 dark:border-y-gray-800 dark:hover:border-b-blue-600"
        >
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
