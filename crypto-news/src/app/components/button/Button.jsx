import React from "react";

// const

function Button({ text, onclick }) {
  return (
    <button
      onClick={onclick}
      className={
        (text === "Gaming" &&
          "bg-blue text-white rounded-lg px-2 py-[.4rem] w-[10rem]") ||
        (text === "Sign up" &&
          "bg-none text-blue rounded-lg px-2 py-[.3rem] border-[1px] border-blue w-[6rem]") ||
        (text === "Sign in" &&
          "bg-none text-white  rounded-lg px-3 py-[.4rem] bg-blue")
      }
    >
      {text}
    </button>
  );
}

export default Button;
