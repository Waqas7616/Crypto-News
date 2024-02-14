import React from "react";

// const

function Button({ text, onclick }) {
  return (
    <button
      onClick={onclick}
      className={
        (text === "Gaming" &&
          "bg-blue text-white md:text-[12px] lg:text-[13px] xl:text-[14px] rounded-lg px-2 py-[.4rem] w-[6rem] md:w-[5rem] lg:w-[6rem] xl:w-[10rem]") ||
        (text === "Sign up" &&
          "bg-none text-blue md:text-[12px] lg:text-[13px] xl:text-[14px] rounded-lg px-2 py-[.3rem] border-[1px] border-blue w-[6rem]") ||
        (text === "Sign in" &&
          "bg-none text-white md:text-[12px] lg:text-[13px] xl:text-[14px]  rounded-lg px-3 py-[.4rem] bg-blue")
      }
    >
      {text}
    </button>
  );
}

export default Button;
