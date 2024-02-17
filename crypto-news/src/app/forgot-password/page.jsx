import React from "react";
import Image from "next/image";
import eye from "../images/Eye.png";
import Google from "../images/Google.png";
import facebook from "../images/facebook.png";

function page() {
  return (
    <div
      className={
        " flex justify-center items-center bg-[#e0e0e0] mt-5 top-0 w-[100vw] h-[100vh]"
      }
    >
      <div className=" md:w-[480px] md:h-[600px] bg-white rounded-lg">
        <div className="p-5">
          <h2 className={"text-center text-[24px] text-[#333333] title2"}>
            Forgot Your Password
          </h2>
          <p className="text-[16px] text-[#555555]">
            We’ll send you a link to reset it. Enter your email address used for
            My Dream Place
          </p>
          <div className="mt-[25px]">
            <div className="mt-4">
              <label
                className="title text-[#181818] text-[14px]"
                htmlFor="password"
              >
                Password
              </label>
              <p className="relative">
                <input
                  type="password"
                  className="bg-[#EEEEEE] focus:bg-[#FFFFFF] w-[100%] py-2 px-2 md:px-3 md:py-3  outline-[#2196F3]  mt-2 rounded-md"
                  placeholder="Enter password"
                />
                <Image
                  src={eye}
                  alt="eye"
                  className="absolute right-2  md:right-3 top-5 md:top-6 z-50"
                />
              </p>
            </div>

            <button className="bg-blue w-[100%] title text-white py-2 md:py-3 mt-4 text-[15px] rounded-md">
              Send Reset Link
            </button>
          </div>
          <div className="text-center mt-5 md:mt-12">
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
            <p className="text-[#555555] title text-[13px] md:text-[16px]">
              By creating an account, you agree with our
              <button className="text-[#16c782] title">
                Terms and Conditions
              </button>
              and
              <button className="text-[#16c782] title">
                Privacy Statement.
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
