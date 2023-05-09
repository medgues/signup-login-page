"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const LoginSignup = () => {
  const [isLoggin, setIsLoggin] = useState(true);
  const color = useMotionValue(100);
  const colorInput = [-100, 100];
  const background = useTransform(color, colorInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
  ]);

  return (
    <div className="w-4/6 h-3/4 m-auto rounded-lg shadow-[0px_0px_60px_rgba(0,0,0,0.3)] relative bg-white  flex flex-col sm:flex-row px-5 py-10">
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
          left: isLoggin ? "auto" : 0,
          right: isLoggin ? 0 : "auto",

          backgroundColor: [
            "linear-gradient(45deg, rgba(210,47,47,1) 0%, rgba(253,29,29,1) 33%, rgba(252,176,69,1) 100%)",
          ],
        }}
        transition={{ duration: 1 }}
        className="absolute rounded-lg sm:w-1/2 sm:h-full w-full h-1/2 top-0 left-0"
      ></motion.div>

      <div className="h-1/2 w-full relative">
        <motion.div
          style={{ color }}
          initial={{
            opacity: 0,
            zIndex: 10,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: !isLoggin ? 1 : 0,
            zIndex: !isLoggin ? 10 : 0,
            x: isLoggin ? 0 : 20,
            y: isLoggin ? -50 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute w-4/5 h-4/5 text-white text-center my-auto top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <p className="text-xl font-semibold my-2">
            To create a new account, please fill out the following form
          </p>
          <h1 className="my-2">
            Already have an account? Click on the "Log In" button to access your
            account.
          </h1>
          <button
            className="my-2 uppercase border-2 rounded-full border-white px-10 py-2"
            onClick={() => (setIsLoggin(true), color.set(100))}
          >
            Login
          </button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            zIndex: 0,
          }}
          animate={{
            opacity: isLoggin ? [0, 0, 1] : [1, 0, 0],
            zIndex: isLoggin ? 5 : 0,
            x: isLoggin ? 0 : 400,
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className="opacity-0 text-black mx-8 relative"
        >
          <form className="flex flex-col gap-8">
            <h1 className="mx-auto font-extrabold text-4xl py-5">Login</h1>
            <input
              id="email"
              placeholder="Email"
              className=" placeholder:text-slate-400 bg-slate-200 p-2 rounded-sm "
              type="email"
            />
            <input
              id="password"
              placeholder="Password"
              type="password"
              className=" placeholder:text-slate-400 bg-slate-200 p-2 rounded-sm "
            />
            <motion.button
              style={{ background }}
              type="submit"
              className="  uppercase hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] text-white  rounded-full  px-5 py-2 ease-in-out duration-300 transition-all"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="h-1/2 w-full relative">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 0,
          }}
          animate={{
            opacity: isLoggin ? 1 : 0,
            zIndex: isLoggin ? 10 : -50,
            x: -100,
            y: isLoggin ? -50 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center"
        >
          <h1 className="my-1 font-bold text-2xl py-5">Welcome Again!</h1>
          <p className="my-1">
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
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoggin ? [1, 0, 0] : [0, 0, 1],
            zIndex: isLoggin ? 0 : 5,
            x: isLoggin ? -400 : 0,
          }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          className="opacity-0 text-black mx-8"
        >
          <form className="flex flex-col gap-8 ">
            <h1 className="mx-auto font-extrabold text-4xl">
              Creat an account
            </h1>

            <input
              id="fullname"
              className=" placeholder:text-slate-400 bg-slate-200 p-2 rounded-sm "
              placeholder="Full Name"
              type="text"
            />

            <input
              id="email"
              className=" placeholder:text-slate-400 bg-slate-200 p-2 rounded-sm "
              placeholder="Email"
              type="email"
            />

            <input
              id="password"
              className=" placeholder:text-slate-400 bg-slate-200 p-2 rounded-sm  "
              placeholder="Password"
              type="password"
            />
            <motion.button
              style={{ background }}
              type="submit"
              className=" text-white hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)]  uppercase rounded-full px-5 py-2 ease-in-out duration-300 transition-all"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginSignup;
