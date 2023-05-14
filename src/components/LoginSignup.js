"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const LoginSignup = () => {
  const [isLoggin, setIsLoggin] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  console.log(isMobile);
  const color = useMotionValue(100);
  const colorInput = [-100, 100];
  const background = useTransform(color, colorInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
  ]);

  return (
    <div className="w-4/6 h-3/4 overflow-hidden m-auto rounded-lg shadow-[0px_0px_60px_rgba(0,0,0,0.3)] relative bg-white  flex flex-col sm:flex-row px-5 py-10">
      <motion.div
        style={{ background }}
        initial={{
          left: "auto",
          right: 0,
          zIndex: 10,
          backgroundColor: [
            " linear-gradient(45deg, rgba(210,47,47,1) 0%, rgba(253,29,29,1) 33%, rgba(252,176,69,1) 100%)",
          ],
        }}
        animate={{
          left: !isMobile ? (isLoggin ? "auto" : 0) : 0,
          right: !isMobile ? (isLoggin ? 0 : "auto") : 0,
          top: !isMobile ? 0 : !isLoggin ? "auto" : 0,
          bottom: !isMobile ? 0 : !isLoggin ? 0 : "auto",

          backgroundColor: [
            "linear-gradient(45deg, rgba(210,47,47,1) 0%, rgba(253,29,29,1) 33%, rgba(252,176,69,1) 100%)",
          ],
        }}
        transition={{ duration: 1 }}
        className="absolute rounded-lg sm:w-1/2 sm:h-full w-full h-1/2 top-0 left-0"
      ></motion.div>

      <motion.div className="h-full w-full relative flex flex-col sm:flex-row-reverse justify-around items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: isLoggin ? [0, 0, 1] : [1, 0, 0],
            zIndex: 10,
            y: !isMobile
              ? isLoggin
                ? [500, 50, 0]
                : [0, 50, 500]
              : isLoggin
              ? [-500, -50, -20]
              : [-20, -50, -500],
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className=" text-white sm:w-1/2 text-center"
        >
          <h1 className="sm:my-1 font-semibold text-lg sm:font-bold sm:text-2xl py-5">
            Welcome Again!
          </h1>
          <p className="sm:my-1">
            To keep connected with us please login with your personal info
          </p>
          <button
            className="my-5 uppercase border-2 rounded-full border-white px-10 py-2"
            onClick={() => (setIsLoggin(false), color.set(-100))}
          >
            Signup
          </button>
        </motion.div>
        <motion.div
          style={{ color }}
          initial={{
            opacity: 0,
            zIndex: 10,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: !isLoggin ? [0, 0, 1] : [1, 0, 0],
            y: !isMobile
              ? isLoggin
                ? [0, -50, -500]
                : [-500, -50, 0]
              : isLoggin
              ? [10, 70, 500]
              : [500, 70, 20],
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className=" sm:w-1/2  text-white text-center sm:pr-8"
        >
          <p className="text-lg font-medium sm:text-xl sm:font-semibold my-2">
            To create a new account, please fill out the following form
          </p>
          <h1 className="sm:my-2">
            Already have an account? Click on the Log In button to access your
            account.
          </h1>
          <button
            className="my-2 uppercase border-2 rounded-full border-white px-10 py-2"
            onClick={() => (setIsLoggin(true), color.set(100))}
          >
            Login
          </button>
        </motion.div>
      </motion.div>

      <motion.div className="flex z-5 flex-col-reverse sm:flex-row-reverse w-full justify-evenly absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center px-4">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isLoggin ? [1, 0, 0] : [0, 0, 1],
            x: !isMobile ? (isLoggin ? [0, -100, -1000] : [-1000, -100, 0]) : 0,
            y: isMobile
              ? isLoggin
                ? [-230, -180, 340]
                : [340, -180, -230]
              : 0,
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className="text-black sm:w-1/2 sm:mr-8 "
        >
          <form className="flex flex-col gap-4 sm:gap-8 ">
            <h1 className="mx-auto sm:font-extrabold sm:text-4xl font-medium text-lg">
              Creat an account
            </h1>

            <input
              id="fullname"
              className=" placeholder:text-slate-400 bg-slate-200 sm:p-2 p-1 rounded-sm "
              placeholder="Full Name"
              type="text"
            />

            <input
              id="email"
              className=" placeholder:text-slate-400 bg-slate-200 sm:p-2 p-1 rounded-sm "
              placeholder="Email"
              type="email"
            />

            <input
              id="password"
              className=" placeholder:text-slate-400 bg-slate-200 sm:p-2 p-1 rounded-sm  "
              placeholder="Password"
              type="password"
            />
            <motion.button
              style={{ background }}
              type="submit"
              className=" text-white hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)]  uppercase rounded-full px-5 sm:p-2 p-1 ease-in-out duration-300 transition-all"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: isLoggin ? [0, 0, 1] : [1, 0, 0],
            x: !isMobile ? (isLoggin ? [1000, 100, 0] : [0, 100, 1000]) : 0,
            y: isMobile ? (isLoggin ? [-100, 200, 240] : [240, 200, -100]) : 0,
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className="sm:w-1/2 text-black sm:mx-8 relative sm:pr-4"
        >
          <form className="flex flex-col gap-4 sm:gap-8">
            <h1 className="mx-auto font-extrabold text-4xl sm:py-5">Login</h1>
            <input
              id="email"
              placeholder="Email"
              className=" placeholder:text-slate-400 bg-slate-200 sm:p-2 p-1 rounded-sm "
              type="email"
            />
            <input
              id="password"
              placeholder="Password"
              type="password"
              className=" placeholder:text-slate-400 bg-slate-200 sm:p-2 p-1 rounded-sm "
            />
            <motion.button
              style={{ background }}
              type="submit"
              className="  uppercase hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] text-white  rounded-full  px-5 sm:p-2 p-1 ease-in-out duration-300 transition-all"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
