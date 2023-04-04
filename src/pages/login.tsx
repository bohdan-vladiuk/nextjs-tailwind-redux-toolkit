import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Layout from "components/layout";

type LoginForm = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must contain more than 8 characters.")
    .matches(/^(?=.*\d)/, "Password must contain number.")
    .matches(/^(?=.*[@$!%*?&])/, "Password must contain special character.")
    .matches(/^(?=.*[A-Z])/, "Password must contain UPPERCASE letter.")
    .matches(/^(?=.*[a-z])/, "Password must contain lowercase letter."),
});

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white shadow-md p-8 rounded-xl dark:bg-slate-900">
        <h2 className="text-center text-xl font-bold">
          Sign in to your account
        </h2>
        <p className="mt-4 text-sm">
          <span className="text-gray-500">Don't have an account?</span>
          <Link
            href="#"
            className="ml-2 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign up
          </Link>
        </p>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-4 mt-6">
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-200"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-200"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="text-sm flex justify-between">
            <Link
              href="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Forgot your password?
            </Link>
            <Link
              className="block text-right text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="/"
            >
              Back to Home
            </Link>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="text-center py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactNode) {
  return <Layout layout="blank">{page}</Layout>;
};
