import React, { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface ForgotPasswordForm {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ForgotPasswordForm) => {
    setMessage("Message has been sent.");
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full">
        {message ? (
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <p className="text-green-500">{message}</p>
            <Link
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              href="/login"
            >
              Back
            </Link>
          </div>
        ) : (
          <form
            className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-900"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            <label className="block my-8" htmlFor="email">
              Email Address
              <input
                {...register("email")}
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-200"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </label>
            <div className="flex justify-between items-center">
              <button
                className="text-center py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                type="submit"
              >
                Reset Password
              </button>
              <Link
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                href="/login"
              >
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
