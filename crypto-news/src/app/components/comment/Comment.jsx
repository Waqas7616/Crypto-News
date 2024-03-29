"use client";
import Image from "next/image";
import React, { useState } from "react";
import c from "@/app/images/c.svg";

function Comment() {
  const [heartCount, setHeartCount] = useState(20);
  const [likeCount, setLikeCount] = useState(1)
  return (
    <div className="mt-3">
      <div className="info flex items-center justify-between">
        <Image src={c} alt="profile" />
        <div>
          <h6 className="text-blackColor text-[8px] md:text-[9px] lg:text-[12px] font-[500] dark:text-white">
            Artyom Khomenko
          </h6>
          <p className="block md:hidden text-lightBlack text-[6px] md:text-[8px] lg:text-[10px] dark:text-white">
            @artyom_khomenko.
          </p>
        </div>
        <p className="hidden md:block text-lightBlack text-[6px] md:text-[8px] lg:text-[10px] dark:text-white">
          @artyom_khomenko.
        </p>
        <p className="text-lightBlack text-[10px] dark:text-white">4h</p>
        <button className="flex items-center justify-between p-[2px] gap-1 rounded-sm bg-[#14C885] text-[10px] text-white">
          <svg
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.375 3.875L3.5 0.75L6.625 3.875H0.375Z" fill="white" />
          </svg>
          Bullish
        </button>
      </div>
      <h6 className="text-blackColor mt-3 md:text-[9px] lg:text-[14px] font-[400] dark:text-white">
        Spread the world this is going to catch on very bullish spread the word
        this is going{" "}
      </h6>
      <div className="iteraction-count flex items-center mt-3 gap-3">
        <button onClick={() => setLikeCount(likeCount + 1)} className="like flex items-center gap-2 justify-between px-1 text-[10px] rounded-lg border-[1px] border-lightBlack dark:text-white">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.48 6.99605C11.48 6.40805 11.004 6.10005 10.36 6.10005H8.48404C8.62404 5.59605 8.68004 5.12005 8.68004 4.70005C8.68004 3.07605 8.23204 2.74005 7.84004 2.74005C7.58804 2.74005 7.39204 2.76805 7.14004 2.90805C7.05604 2.96405 7.02804 3.02005 7.00004 3.10405L6.72004 4.61605C6.41204 5.40005 5.65604 6.10005 5.04004 6.57605V10.58C5.26404 10.58 5.48804 10.692 5.76804 10.8321C6.07604 10.972 6.38404 11.14 6.72004 11.14H9.38004C9.94004 11.14 10.36 10.692 10.36 10.3C10.36 10.216 10.36 10.16 10.332 10.104C10.668 9.96405 10.92 9.68405 10.92 9.32005C10.92 9.15205 10.892 9.01205 10.836 8.87205C11.06 8.73205 11.256 8.48005 11.256 8.20005C11.256 8.03205 11.172 7.86405 11.088 7.72405C11.312 7.55605 11.48 7.27605 11.48 6.99605ZM10.892 6.99605C10.892 7.36005 10.528 7.38805 10.472 7.55605C10.416 7.75205 10.696 7.80805 10.696 8.14405C10.696 8.48005 10.276 8.48005 10.22 8.67605C10.164 8.90005 10.36 8.95605 10.36 9.29205V9.34805C10.304 9.62805 9.88404 9.65605 9.80004 9.76805C9.71604 9.90805 9.80004 9.96405 9.80004 10.272C9.80004 10.4401 9.60404 10.5521 9.38004 10.5521H6.72004C6.49604 10.5521 6.27204 10.44 5.99204 10.3C5.76804 10.188 5.54404 10.076 5.32004 10.02V7.08005C6.02004 6.54805 6.91604 5.76405 7.25204 4.78405V4.72805L7.50404 3.32805C7.61604 3.30005 7.70004 3.30005 7.84004 3.30005C7.89604 3.30005 8.12004 3.63605 8.12004 4.70005C8.12004 5.12005 8.03604 5.56805 7.89604 6.10005H7.84004C7.67204 6.10005 7.56004 6.21205 7.56004 6.38005C7.56004 6.54805 7.67204 6.66005 7.84004 6.66005H10.36C10.64 6.66005 10.892 6.80005 10.892 6.99605Z"
              fill="#555555"
            />
            <path
              d="M4.47999 11.1401H2.79999C2.49199 11.1401 2.23999 10.8881 2.23999 10.5801V6.66013C2.23999 6.35213 2.49199 6.10013 2.79999 6.10013H4.47999C4.78799 6.10013 5.03999 6.35213 5.03999 6.66013V10.5801C5.03999 10.8881 4.78799 11.1401 4.47999 11.1401ZM2.79999 6.66013V10.5801H4.47999V6.66013H2.79999Z"
              fill="#555555"
            />
          </svg>
          {likeCount}
        </button>
        <button onClick={() => setHeartCount(heartCount + 1)} className="like flex items-center gap-2  justify-between px-1 text-[10px] rounded-lg border-[1px] border-lightBlack dark:text-white">
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.6516 0.249908C7.53796 0.249908 6.5569 0.862408 6.00008 1.82491C5.44326 0.862408 4.4622 0.249908 3.34857 0.249908C1.59857 0.249908 0.166748 1.82491 0.166748 3.74991C0.166748 7.22074 6.00008 10.7499 6.00008 10.7499C6.00008 10.7499 11.8334 7.24991 11.8334 3.74991C11.8334 1.82491 10.4016 0.249908 8.6516 0.249908Z"
              fill="#E04957"
            />
          </svg>
          {heartCount}
        </button>
      </div>
      <div className="view-count flex items-center justify-between mt-3">
        <p className="flex items-center gap-1 text-[10px] text-lightBlack dark:text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4038 8.80875C16.7422 7.09743 15.5936 5.61747 14.1001 4.5518C12.6065 3.48612 10.8335 2.88145 9 2.8125C7.16655 2.88145 5.39347 3.48612 3.89993 4.5518C2.40639 5.61747 1.25785 7.09743 0.596255 8.80875C0.551574 8.93234 0.551574 9.06766 0.596255 9.19125C1.25785 10.9026 2.40639 12.3825 3.89993 13.4482C5.39347 14.5139 7.16655 15.1186 9 15.1875C10.8335 15.1186 12.6065 14.5139 14.1001 13.4482C15.5936 12.3825 16.7422 10.9026 17.4038 9.19125C17.4484 9.06766 17.4484 8.93234 17.4038 8.80875ZM9 14.0625C6.01875 14.0625 2.86875 11.8519 1.72688 9C2.86875 6.14812 6.01875 3.9375 9 3.9375C11.9813 3.9375 15.1313 6.14812 16.2731 9C15.1313 11.8519 11.9813 14.0625 9 14.0625Z"
              fill="#555555"
            />
            <path
              d="M9 5.625C8.33249 5.625 7.67997 5.82294 7.12495 6.19379C6.56994 6.56464 6.13735 7.09174 5.88191 7.70844C5.62646 8.32514 5.55963 9.00374 5.68985 9.65843C5.82008 10.3131 6.14151 10.9145 6.61352 11.3865C7.08552 11.8585 7.68689 12.1799 8.34157 12.3102C8.99626 12.4404 9.67486 12.3735 10.2916 12.1181C10.9083 11.8626 11.4354 11.4301 11.8062 10.875C12.1771 10.32 12.375 9.66751 12.375 9C12.375 8.10489 12.0194 7.24645 11.3865 6.61351C10.7536 5.98058 9.89511 5.625 9 5.625ZM9 11.25C8.55499 11.25 8.11998 11.118 7.74997 10.8708C7.37996 10.6236 7.09157 10.2722 6.92127 9.86104C6.75098 9.4499 6.70642 8.9975 6.79323 8.56105C6.88005 8.12459 7.09434 7.72368 7.40901 7.40901C7.72368 7.09434 8.12459 6.88005 8.56105 6.79323C8.99751 6.70642 9.4499 6.75097 9.86104 6.92127C10.2722 7.09157 10.6236 7.37996 10.8708 7.74997C11.118 8.11998 11.25 8.55499 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25Z"
              fill="#555555"
            />
          </svg>
          3k
        </p>
        <p className="flex items-center gap-1 text-[10px] text-lightBlack dark:text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00005 15.75C10.4722 15.7497 11.904 15.268 13.077 14.3785C14.2501 13.489 15.1002 12.2403 15.4978 10.8228C15.8953 9.40531 15.8186 7.89669 15.2792 6.52687C14.7398 5.15704 13.7673 4.00113 12.51 3.23527C11.2527 2.46941 9.77946 2.1356 8.31483 2.28472C6.8502 2.43384 5.47449 3.05771 4.39733 4.06125C3.32017 5.0648 2.60063 6.39298 2.34837 7.84341C2.09611 9.29384 2.32496 10.787 3.00005 12.0953L2.25005 15.75L5.9048 15C6.8318 15.4793 7.8848 15.75 9.00005 15.75Z"
              stroke="#555555"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.625 9H5.6325V9.0075H5.625V9ZM9 9H9.0075V9.0075H9V9ZM12.375 9H12.3825V9.0075H12.375V9Z"
              stroke="#555555"
              strokeWidth="1.6875"
              strokeLinejoin="round"
            />
          </svg>
          3
        </p>
        <p className="flex items-center gap-1 text-[10px] text-lightBlack dark:text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 12.75H5.25V10.5L2.25 13.5L5.25 16.5V14.25H14.25V9.75H12.75M5.25 5.25H12.75V7.5L15.75 4.5L12.75 1.5V3.75H3.75V8.25H5.25V5.25Z"
              fill="#555555"
            />
          </svg>
          1
        </p>
        <p className="flex items-center gap-1 text-[10px] text-lightBlack dark:text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 7.125C5.25 6.5025 5.7525 6 6.375 6C6.9975 6 7.5 6.5025 7.5 7.125C7.5 7.7475 6.9975 8.25 6.375 8.25C5.7525 8.25 5.25 7.7475 5.25 7.125ZM9 13.125C10.7475 13.125 12.2325 12.03 12.8325 10.5H5.1675C5.7675 12.03 7.2525 13.125 9 13.125ZM11.625 8.25C12.2475 8.25 12.75 7.7475 12.75 7.125C12.75 6.5025 12.2475 6 11.625 6C11.0025 6 10.5 6.5025 10.5 7.125C10.5 7.7475 11.0025 8.25 11.625 8.25ZM16.5 0.75H15V2.25H13.5V3.75H15V5.25H16.5V3.75H18V2.25H16.5V0.75ZM15 9C15 12.315 12.315 15 9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C10.095 3 11.115 3.3 12 3.81V2.13C11.0522 1.7132 10.0279 1.49863 8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 8.2125 16.3725 7.4625 16.1475 6.75H14.55C14.835 7.4475 15 8.205 15 9Z"
              fill="#555555"
            />
          </svg>
          21
        </p>
        <button className="dark:text-white">...</button>
      </div>
    </div>
  );
}

export default Comment;
