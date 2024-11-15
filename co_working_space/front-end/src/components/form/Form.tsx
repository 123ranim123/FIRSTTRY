"use client";
import React, { useState } from "react";
import GoogleSigninButton from "../GoogleSigninButton";
import "../../style/style.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormInputs {
  username?: string;
  companyName?: string;
  email: string;
  password: string;
  numero: string;
}
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    if (isSignUp && isBusiness) {
      data.username = data.companyName;
    }
    try {
      const url = isSignUp
        ? "http://localhost:8000/api/auth/signup"
        : "http://localhost:8000/api/auth/signin";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(
          isSignUp ? "Signup successful!" : "Signin successful!",
          result
        );

        // Redirection après une connexion réussie
        if (!isSignUp) {
          if (result.role === "admin") {
            window.location.href = "/adminDashboard/admin";
          } else {
            window.location.href = "/clientsSide/clientsHome";
          }
        } 
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  };
  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
      {isSignUp && !isBusiness ? (
        <div
          className={`form-container sign-up-container ${
            isSignUp ? "active" : ""
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 w-full">
              <h5 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
                Sign Up to our platform
              </h5>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username{" "}
                </label>
                <input
                  type="text"
                  id="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="text-red-500">Username is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@gmail.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Numero{" "}
                </label>
                <input
                  type="text"
                  id="numero"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Numero"
                  {...register("numero", { required: true })}
                />
                {errors.numero && (
                  <p className="text-red-500">Numero is required</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create account{" "}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <p className="text-center text-sm text-gray-600 mt-2">
                  If you already have an account, please&nbsp;
                  <Link className="text-blue-500 hover:underline" href="/">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                or
              </div>
              <GoogleSigninButton>Sign Up With Google</GoogleSigninButton>
            </div>
          </form>
        </div>
      ) : isSignUp && isBusiness ? (
        <div
          className={`form-container sign-up-container ${
            isSignUp ? "active" : ""
          }`}
        >
          <form className="space-y-6">
            <div className="space-y-4 w-full">
              <h5 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
                Sign Up to our platform
              </h5>
              <div>
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name{" "}
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="company name"
                  {...register("companyName", { required: true })}
                />
                {errors.companyName && (
                  <p className="text-red-500">Company Name is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@gmail.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Numero{" "}
                </label>
                <input
                  type="text"
                  id="numero"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Numero"
                  {...register("numero", { required: true })}
                />
                {errors.numero && (
                  <p className="text-red-500">Numero is required</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create account{" "}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <p className="text-center text-sm text-gray-600 mt-2">
                  If you already have an account, please&nbsp;
                  <Link className="text-blue-500 hover:underline" href="/">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                or
              </div>
              <GoogleSigninButton>Sign Up With Google</GoogleSigninButton>
            </div>
          </form>
        </div>
      ) : (
        <div
          className={`form-container sign-in-container ${
            !isSignUp ? "active" : ""
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 w-full  mb-[10px]">
              <h5 className="text-3xl  text-center font-bold  text-gray-900 dark:text-white">
                Sign In to our platform
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In{" "}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>

              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                or
              </div>
              <GoogleSigninButton>Sign In With Google</GoogleSigninButton>
              <p className="text-center text-sm text-gray-600 mt-2">
                If you already have an account, please&nbsp;
                <Link className="text-blue-500 hover:underline" href="/">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost m-2  hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => {
                setIsSignUp(false);
                setIsBusiness(false);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost m-2  hover:bg-white hover:text-black transition-colors duration-300 "
              onClick={() => {
                setIsSignUp(true);
                setIsBusiness(false);
              }}
            >
              Sign Up as Individual{" "}
            </button>
            <button
              className="ghost  hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => {
                setIsSignUp(true);
                setIsBusiness(true);
              }}
            >
              Sign Up as Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
