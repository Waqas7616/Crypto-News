import React from "react";
import Image from "next/image";
import eye from "../images/Eye.png";
import Google from "../images/Google.png";
import facebook from "../images/facebook.png";
import Link from "next/link";

function page() {
  return (
    <div
      className={
        " flex justify-center items-center bg-[#e0e0e0] mt-5 top-0 w-[100vw] h-[100vh]"
      }
    >
      <div className=" md:w-[480px] md:h-[650px] bg-white rounded-lg">
        <div className="p-5">
          <h2 className={"text-center text-[24px] text-[#333333] title2"}>
            Sign in
          </h2>

          <div className="mt-[25px]">
            <div>
              <label
                className="title text-[#181818] text-[14px]"
                htmlFor="email"
              >
                Email address
              </label>
              <p>
                <input
                  type="text"
                  className="bg-[#EEEEEE] focus:bg-[#FFFFFF] w-[100%] py-2 px-2 md:px-3 md:py-3  outline-[#2196F3] mt-2 rounded-md"
                  placeholder="Email address"
                />
              </p>
            </div>
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
            <div className="flex justify-between mt-2 md:mt-4">
              <div className=" flex items-center gap-3 ml-[2px]">
                <input type="checkbox" className=" w-4 h-4" />{" "}
                <label
                  className="text-[#555555] text-[14px]"
                  htmlFor="keep signed in"
                >
                  Keep signed in
                </label>
              </div>
              <p className="text-[#16C782] text-[14px]">Forget password?</p>
            </div>
            <button className="bg-blue w-[100%] title text-white py-2 md:py-3 mt-4 text-[15px] rounded-md">
              Continue with email
            </button>
            <div className="flex justify-center gap-[6px] md:gap-[16px] items-center my-5">
              <div className="border-b-[2px] border-[#EEEEEE] w-[25%]" />
              <p className="text-[8px] md:text-[14px] text-[#555555] font-[500] ">
                or use one of these options
              </p>
              <div className="border-b-[2px] border-[#EEEEEE] w-[25%]" />
            </div>
            <button className="flex justify-center items-center gap-2 bg-white title w-[100%] text-[#555555] border-2 border-[#E0E0E0] py-2 md:py-3 mt-5 text-[12px] md:text-[15px] rounded-md">
              <Image src={Google} alt="Google" />
              Continue with Google
            </button>
            <button className="flex justify-center items-center gap-2 bg-[#475993] title w-[100%] text-[#ffffff] py-2 md:py-3 mt-5 text-[12px] md:text-[15px] rounded-md">
              <Image src={facebook} alt="facebook" />
              Continue with Facebook
            </button>
          </div>
          <div className="text-center mt-5 md:mt-12">
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
            <p className="text-[#555555] title text-[13px] md:text-[16px]">
              Don&apos;t have an account?{" "}
              <Link href="/register">
                <button className="text-[#16c782] title"> Register</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
