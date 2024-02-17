"use client";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/Logo.svg";
import otherLogo from "@/app/images/whitelogo.svg";
import Button from "../button/Button";
import eye from "../../images/Eye.png";
import Google from "../../images/Google.png";
import facebook from "../../images/facebook.png";

function Navbar({ isNightMode, toggleMode }) {
  const [languages, setLanguages] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const coinData = [
    {
      id: 1,
      name: "BitCoin",
      abb: "BTC",
      price: "$89327",
      change: "-2.03%",
    },
    {
      id: 2,
      name: "Ethereum",
      abb: "ETH",
      price: "$9327",
      change: "2.03%",
    },
    {
      id: 3,
      name: "Tether",
      abb: "USDT",
      price: "$1327",
      change: "3.23%",
    },
    {
      id: 4,
      name: "BNB",
      abb: "BNB",
      price: "$327",
      change: "-7.99%",
    },
    {
      id: 5,
      name: "Solana",
      abb: "SOL",
      price: "$7",
      change: "1.00%",
    },
    {
      id: 6,
      name: "XRP",
      abb: "XRP",
      price: "$27",
      change: "-12.03%",
    },
  ];
  // const [coinData, setCoinData] = useState([]);
  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false&locale=en', {
  //                 headers: {
  //                     'Content-Type': 'application/json; charset=utf-8'
  //                 },
  //             });
  //             if (!response.ok) {
  //                 throw new Error(`HTTP error! Status: ${response.status}`)
  //             }
  //             const result = await response.json();
  //             setCoinData(result);
  //         }
  //         catch (error) {
  //             console.log('The error for coin data is:', error.message);
  //         }
  //     }

  //     fetchData();
  //     console.log('waqas your data is:', coinData)
  // }, [])

  return (
    <div className="navbar hidden md:block">
      <div className="w-11/12 m-auto mb-2 flex justify-between items-center">
        <div className="coins flex items-center gap-2">
          {coinData.map((coin) => (
            <div className="flex gap-1 items-center" key={coin.id}>
              <h4 className="text-[11px] md:text-[9px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] text-[#333333] dark:text-white">
                {coin.abb}
              </h4>
              <p className="text-[9px] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] text-[#333333] dark:text-white">
                Price: <span className="text-[#2196F3]">{coin.price}</span>
              </p>
              <p className="text-[9px] md:text-[7px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[#E04957]">
                ({coin.change})
              </p>
            </div>
          ))}
        </div>
        <div className="nightToggle flex items-center">
          <div className="languages">
            <button
              onClick={() => setLanguages(!languages)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-black bg-[transparent] md:text-[13px] lg:text-[15px] xl:text-[18px]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white"
              type="button"
            >
              English{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}

            {languages && (
              <div
                id="dropdown"
                className="z-10 absolute bottom-[-400%] left-0  bg-blue divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Latin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button onClick={toggleMode}>
            {isNightMode ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M12 5V3M12 21V19M16.95 7.05L18.364 5.636M5.636 18.364L7.05 16.95M19 12H21M3 12H5M16.95 16.95L18.364 18.364M5.636 5.636L7.05 7.05"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0576 20C9.83495 20 7.94595 19.2224 6.39062 17.667C4.83528 16.111 4.05762 14.222 4.05762 12C4.05762 9.97471 4.71762 8.21805 6.03762 6.73005C7.35895 5.24338 8.99362 4.36571 10.9416 4.09705C10.9956 4.09705 11.0486 4.09905 11.1006 4.10305C11.1526 4.10705 11.2036 4.11271 11.2536 4.12005C10.9163 4.59071 10.6493 5.11405 10.4526 5.69005C10.256 6.26671 10.1576 6.87038 10.1576 7.50105C10.1576 9.27905 10.7796 10.79 12.0236 12.034C13.2683 13.2787 14.7796 13.901 16.5576 13.901C17.1923 13.901 17.7966 13.8027 18.3706 13.606C18.9453 13.4094 19.4613 13.1424 19.9186 12.805C19.9266 12.855 19.9326 12.906 19.9366 12.958C19.9399 13.01 19.9416 13.0627 19.9416 13.116C19.6856 15.0647 18.8139 16.6994 17.3266 18.02C15.8393 19.3407 14.0836 20.0007 12.0576 20Z"
                  fill="#333333"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <hr className="dark:text-blue" />
      <div className="m-auto my-2 flex items-center justify-between w-11/12 ">
        <div className="logo">
          <Image src={isNightMode ? otherLogo : logo} alt="logo" />
        </div>
        <Menu
          as="div"
          className="menu flex items-center justify-between gap-3 relative"
        >
          <ul className="flex items-center gap-3">
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/blockchain">Blockchain</Link>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/coins">Cryptocurrency</Link>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/article">NFTs</Link>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              {" "}
              <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2   text-blackColor  dark:text-white">
                Resources
                {/* <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                            /> */}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute  mt-2 left-0 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#0b0b0b] shadow-lg ring-1 ">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex justify-between gap-8 px-2 py-4 z-[999]">
                          <div className="first flex gap-8 justify-between mr-auto">
                            <div className="flex-1">
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#001F54]">
                                <a href="#"> News </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#FF9770]">
                                <a href="#"> Authors Program </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#80A1D4]">
                                <a href="#"> Selection </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#F49CBB]">
                                <a href="#"> Video </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#8CB369]">
                                <a href="#"> Analytics </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#F08080]">
                                <a href="#"> Video </a>
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] border-l-[2px] px-3 border-rounded border-[#99D98C]">
                                <a href="#"> Analytics </a>
                              </h6>
                            </div>
                            <div className="flex-1">
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] px-3 border-l-[2px] border-[#F08080]">
                                Education
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] px-3 border-l-[2px] border-[#D8A48F]">
                                Personalities
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] px-3 border-l-[2px] border-[#4F772D]">
                                Opinion
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] px-3 border-l-[2px] border-[#274C77]">
                                Overview
                              </h6>
                              <h6 className="text-blackColor dark:text-white mb-5 cursor-pointer text-[14px] font-[500] px-3 border-l-[2px] border-[#9A031E]">
                                Events
                              </h6>
                            </div>
                          </div>
                          <svg
                            width="2"
                            height="302"
                            viewBox="1 1 1 302"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="2"
                              height="502"
                              fill={isNightMode ? "white" : "#aaaaaa"}
                            />
                          </svg>
                          <div className="tags flex flex-col ml-auto">
                            <div className="innertags flex items-center flex-wrap gap-4 mb-3">
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #bitcoin
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #Blockchain
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #cryptocurrency
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #IT
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #Ethereum
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #NFT
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #Token
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #Exchange
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #Web3
                              </button>
                              <button className="py-1 px-2 bg-[#eeeeee] text-[14px] dark:bg-[#212121]">
                                #bitcoin
                              </button>
                            </div>
                            <h6>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-blackColor text-[14px] mb-3 dark:text-white"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_206_7384)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19 4.74104V8.00004C19.394 8.00004 19.7841 8.07764 20.148 8.2284C20.512 8.37916 20.8427 8.60014 21.1213 8.87872C21.3999 9.15729 21.6209 9.48801 21.7716 9.85199C21.9224 10.216 22 10.6061 22 11C22 11.394 21.9224 11.7841 21.7716 12.1481C21.6209 12.5121 21.3999 12.8428 21.1213 13.1214C20.8427 13.3999 20.512 13.6209 20.148 13.7717C19.7841 13.9224 19.394 14 19 14V17C19 18.648 17.119 19.589 15.8 18.6L13.74 17.054C12.6389 16.2284 11.3567 15.6772 9.99999 15.446V18.29C10.0001 18.9438 9.76389 19.5755 9.33489 20.0688C8.9059 20.5621 8.31304 20.8837 7.66561 20.9743C7.01818 21.0649 6.35981 20.9185 5.81187 20.5619C5.26393 20.2053 4.86336 19.6627 4.68399 19.034L3.11399 13.538C2.54901 12.8708 2.18133 12.0593 2.05228 11.1945C1.92323 10.3298 2.03793 9.44628 2.38348 8.64318C2.72903 7.84008 3.29173 7.14928 4.00834 6.64844C4.72495 6.14759 5.56705 5.85655 6.43999 5.80804L9.45799 5.64004C10.9346 5.55787 12.3706 5.12638 13.648 4.38104L15.992 3.01304C17.326 2.23604 19 3.19704 19 4.74104ZM5.63399 15.078L6.60699 18.485C6.65382 18.65 6.75873 18.7924 6.90237 18.886C7.046 18.9796 7.21864 19.018 7.38842 18.9943C7.5582 18.9705 7.71365 18.8861 7.82606 18.7567C7.93847 18.6272 8.00025 18.4615 7.99999 18.29V15.28L6.43999 15.193C6.16852 15.178 5.89885 15.1395 5.63399 15.078ZM17 4.74104L14.655 6.11004C13.2304 6.94048 11.6418 7.45032 9.99999 7.60404V13.423C11.787 13.669 13.488 14.366 14.94 15.454L17 17V4.74104ZM7.99999 7.72404L6.54999 7.80404C5.87544 7.84129 5.23936 8.13006 4.76731 8.61336C4.29526 9.09666 4.02154 9.73937 4.00019 10.4146C3.97885 11.0899 4.21141 11.7486 4.65199 12.2607C5.09257 12.7729 5.70914 13.1013 6.37999 13.181L6.54999 13.196L7.99999 13.276V7.72404ZM19 10V12C19.2549 11.9998 19.5 11.9022 19.6854 11.7272C19.8707 11.5522 19.9822 11.3131 19.9972 11.0586C20.0121 10.8042 19.9293 10.5537 19.7657 10.3582C19.6021 10.1628 19.3701 10.0371 19.117 10.007L19 10Z"
                                      fill={isNightMode ? "white" : "#555555"}
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_206_7384">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Steller Upgrade Postponede Due to Software
                                Glitch
                              </a>
                            </h6>
                            <h6>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-blackColor text-[14px] mb-3 dark:text-white"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_206_7384)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19 4.74104V8.00004C19.394 8.00004 19.7841 8.07764 20.148 8.2284C20.512 8.37916 20.8427 8.60014 21.1213 8.87872C21.3999 9.15729 21.6209 9.48801 21.7716 9.85199C21.9224 10.216 22 10.6061 22 11C22 11.394 21.9224 11.7841 21.7716 12.1481C21.6209 12.5121 21.3999 12.8428 21.1213 13.1214C20.8427 13.3999 20.512 13.6209 20.148 13.7717C19.7841 13.9224 19.394 14 19 14V17C19 18.648 17.119 19.589 15.8 18.6L13.74 17.054C12.6389 16.2284 11.3567 15.6772 9.99999 15.446V18.29C10.0001 18.9438 9.76389 19.5755 9.33489 20.0688C8.9059 20.5621 8.31304 20.8837 7.66561 20.9743C7.01818 21.0649 6.35981 20.9185 5.81187 20.5619C5.26393 20.2053 4.86336 19.6627 4.68399 19.034L3.11399 13.538C2.54901 12.8708 2.18133 12.0593 2.05228 11.1945C1.92323 10.3298 2.03793 9.44628 2.38348 8.64318C2.72903 7.84008 3.29173 7.14928 4.00834 6.64844C4.72495 6.14759 5.56705 5.85655 6.43999 5.80804L9.45799 5.64004C10.9346 5.55787 12.3706 5.12638 13.648 4.38104L15.992 3.01304C17.326 2.23604 19 3.19704 19 4.74104ZM5.63399 15.078L6.60699 18.485C6.65382 18.65 6.75873 18.7924 6.90237 18.886C7.046 18.9796 7.21864 19.018 7.38842 18.9943C7.5582 18.9705 7.71365 18.8861 7.82606 18.7567C7.93847 18.6272 8.00025 18.4615 7.99999 18.29V15.28L6.43999 15.193C6.16852 15.178 5.89885 15.1395 5.63399 15.078ZM17 4.74104L14.655 6.11004C13.2304 6.94048 11.6418 7.45032 9.99999 7.60404V13.423C11.787 13.669 13.488 14.366 14.94 15.454L17 17V4.74104ZM7.99999 7.72404L6.54999 7.80404C5.87544 7.84129 5.23936 8.13006 4.76731 8.61336C4.29526 9.09666 4.02154 9.73937 4.00019 10.4146C3.97885 11.0899 4.21141 11.7486 4.65199 12.2607C5.09257 12.7729 5.70914 13.1013 6.37999 13.181L6.54999 13.196L7.99999 13.276V7.72404ZM19 10V12C19.2549 11.9998 19.5 11.9022 19.6854 11.7272C19.8707 11.5522 19.9822 11.3131 19.9972 11.0586C20.0121 10.8042 19.9293 10.5537 19.7657 10.3582C19.6021 10.1628 19.3701 10.0371 19.117 10.007L19 10Z"
                                      fill={isNightMode ? "white" : "#555555"}
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_206_7384">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Steller Upgrade Postponede Due to Software
                                Glitch
                              </a>
                            </h6>
                            <h6>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-blackColor text-[14px] mb-3 dark:text-white"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_206_7384)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19 4.74104V8.00004C19.394 8.00004 19.7841 8.07764 20.148 8.2284C20.512 8.37916 20.8427 8.60014 21.1213 8.87872C21.3999 9.15729 21.6209 9.48801 21.7716 9.85199C21.9224 10.216 22 10.6061 22 11C22 11.394 21.9224 11.7841 21.7716 12.1481C21.6209 12.5121 21.3999 12.8428 21.1213 13.1214C20.8427 13.3999 20.512 13.6209 20.148 13.7717C19.7841 13.9224 19.394 14 19 14V17C19 18.648 17.119 19.589 15.8 18.6L13.74 17.054C12.6389 16.2284 11.3567 15.6772 9.99999 15.446V18.29C10.0001 18.9438 9.76389 19.5755 9.33489 20.0688C8.9059 20.5621 8.31304 20.8837 7.66561 20.9743C7.01818 21.0649 6.35981 20.9185 5.81187 20.5619C5.26393 20.2053 4.86336 19.6627 4.68399 19.034L3.11399 13.538C2.54901 12.8708 2.18133 12.0593 2.05228 11.1945C1.92323 10.3298 2.03793 9.44628 2.38348 8.64318C2.72903 7.84008 3.29173 7.14928 4.00834 6.64844C4.72495 6.14759 5.56705 5.85655 6.43999 5.80804L9.45799 5.64004C10.9346 5.55787 12.3706 5.12638 13.648 4.38104L15.992 3.01304C17.326 2.23604 19 3.19704 19 4.74104ZM5.63399 15.078L6.60699 18.485C6.65382 18.65 6.75873 18.7924 6.90237 18.886C7.046 18.9796 7.21864 19.018 7.38842 18.9943C7.5582 18.9705 7.71365 18.8861 7.82606 18.7567C7.93847 18.6272 8.00025 18.4615 7.99999 18.29V15.28L6.43999 15.193C6.16852 15.178 5.89885 15.1395 5.63399 15.078ZM17 4.74104L14.655 6.11004C13.2304 6.94048 11.6418 7.45032 9.99999 7.60404V13.423C11.787 13.669 13.488 14.366 14.94 15.454L17 17V4.74104ZM7.99999 7.72404L6.54999 7.80404C5.87544 7.84129 5.23936 8.13006 4.76731 8.61336C4.29526 9.09666 4.02154 9.73937 4.00019 10.4146C3.97885 11.0899 4.21141 11.7486 4.65199 12.2607C5.09257 12.7729 5.70914 13.1013 6.37999 13.181L6.54999 13.196L7.99999 13.276V7.72404ZM19 10V12C19.2549 11.9998 19.5 11.9022 19.6854 11.7272C19.8707 11.5522 19.9822 11.3131 19.9972 11.0586C20.0121 10.8042 19.9293 10.5537 19.7657 10.3582C19.6021 10.1628 19.3701 10.0371 19.117 10.007L19 10Z"
                                      fill={isNightMode ? "white" : "#555555"}
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_206_7384">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Steller Upgrade Postponede Due to Software
                                Glitch
                              </a>
                            </h6>
                            <h6>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-blackColor text-[14px] mb-3 dark:text-white"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_206_7384)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19 4.74104V8.00004C19.394 8.00004 19.7841 8.07764 20.148 8.2284C20.512 8.37916 20.8427 8.60014 21.1213 8.87872C21.3999 9.15729 21.6209 9.48801 21.7716 9.85199C21.9224 10.216 22 10.6061 22 11C22 11.394 21.9224 11.7841 21.7716 12.1481C21.6209 12.5121 21.3999 12.8428 21.1213 13.1214C20.8427 13.3999 20.512 13.6209 20.148 13.7717C19.7841 13.9224 19.394 14 19 14V17C19 18.648 17.119 19.589 15.8 18.6L13.74 17.054C12.6389 16.2284 11.3567 15.6772 9.99999 15.446V18.29C10.0001 18.9438 9.76389 19.5755 9.33489 20.0688C8.9059 20.5621 8.31304 20.8837 7.66561 20.9743C7.01818 21.0649 6.35981 20.9185 5.81187 20.5619C5.26393 20.2053 4.86336 19.6627 4.68399 19.034L3.11399 13.538C2.54901 12.8708 2.18133 12.0593 2.05228 11.1945C1.92323 10.3298 2.03793 9.44628 2.38348 8.64318C2.72903 7.84008 3.29173 7.14928 4.00834 6.64844C4.72495 6.14759 5.56705 5.85655 6.43999 5.80804L9.45799 5.64004C10.9346 5.55787 12.3706 5.12638 13.648 4.38104L15.992 3.01304C17.326 2.23604 19 3.19704 19 4.74104ZM5.63399 15.078L6.60699 18.485C6.65382 18.65 6.75873 18.7924 6.90237 18.886C7.046 18.9796 7.21864 19.018 7.38842 18.9943C7.5582 18.9705 7.71365 18.8861 7.82606 18.7567C7.93847 18.6272 8.00025 18.4615 7.99999 18.29V15.28L6.43999 15.193C6.16852 15.178 5.89885 15.1395 5.63399 15.078ZM17 4.74104L14.655 6.11004C13.2304 6.94048 11.6418 7.45032 9.99999 7.60404V13.423C11.787 13.669 13.488 14.366 14.94 15.454L17 17V4.74104ZM7.99999 7.72404L6.54999 7.80404C5.87544 7.84129 5.23936 8.13006 4.76731 8.61336C4.29526 9.09666 4.02154 9.73937 4.00019 10.4146C3.97885 11.0899 4.21141 11.7486 4.65199 12.2607C5.09257 12.7729 5.70914 13.1013 6.37999 13.181L6.54999 13.196L7.99999 13.276V7.72404ZM19 10V12C19.2549 11.9998 19.5 11.9022 19.6854 11.7272C19.8707 11.5522 19.9822 11.3131 19.9972 11.0586C20.0121 10.8042 19.9293 10.5537 19.7657 10.3582C19.6021 10.1628 19.3701 10.0371 19.117 10.007L19 10Z"
                                      fill={isNightMode ? "white" : "#555555"}
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_206_7384">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Steller Upgrade Postponede Due to Software
                                Glitch
                              </a>
                            </h6>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              Developers
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              More
            </li>
          </ul>
          <Link href='/sign-in' className="bg-none text-white md:text-[12px] lg:text-[13px] xl:text-[14px]  rounded-lg px-3 py-[.4rem] bg-blue">Sign in</Link>
          {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel
              className={
                "absolute flex justify-center items-center bg-[rgba(0,0,0,0.6)] top-0 w-full h-full"
              }
            >
              <div className=" w-[300px] h-[300px] md:w-[480px] md:h-[650px] bg-white rounded-lg">
                <div className="p-5">
                  <Dialog.Title
                    className={"text-center text-[24px] text-[#333333] title2"}
                  >
                    Sign in
                  </Dialog.Title>
                  <Dialog.Description>
                    
                  </Dialog.Description>

                  <div className="mt-5">
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
                          className="bg-[#EEEEEE] focus:bg-[#FFFFFF] w-[100%] p-3  outline-[#2196F3] mt-2 rounded-md"
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
                          className="bg-[#EEEEEE] focus:bg-[#FFFFFF] w-[100%] p-3  outline-[#2196F3]  mt-2 rounded-md"
                          placeholder="Enter password"
                        />
                        <Image
                          src={eye}
                          alt="eye"
                          className="absolute right-3 top-6 z-50"
                        />
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className=" flex items-center gap-3 ml-[2px]">
                        <input type="checkbox" className=" w-4 h-4" />{" "}
                        <label
                          className="text-[#555555] text-[14px]"
                          htmlFor="keep signed in"
                        >
                          Keep signed in
                        </label>
                      </div>
                      <p className="text-[#16C782] text-[14px]">
                        Forget password?
                      </p>
                    </div>
                    <button className="bg-blue w-[100%] title text-white py-3 mt-4 text-[15px] rounded-md">
                      Continue with email
                    </button>
                    <div className="flex justify-center gap-4 items-center my-5">
                      <div className="border-b-[2px] border-[#EEEEEE] w-[25%]" />
                      <p className="text-[14px] text-[#555555] font-[500] ">
                        or use one of these options
                      </p>
                      <div className="border-b-[2px] border-[#EEEEEE] w-[25%]" />
                    </div>
                    <button className="flex justify-center gap-2 bg-white title w-[100%] text-[#555555] border-2 border-[#E0E0E0] py-3 mt-5 text-[15px] rounded-md">
                      <Image src={Google} alt="Google" />
                      Continue with Google
                    </button>
                    <button className="flex justify-center gap-2 bg-[#475993] title w-[100%] text-[#ffffff]  py-3 mt-5 text-[15px] rounded-md">
                      <Image src={facebook} alt="facebook" />
                      Continue with Facebook
                    </button>
                  </div>
<div className="text-center mt-12">
                 
                  <p className="text-[#555555] title text-[16px]">Don&apos;t have an account?{" "}  
                  <button className="text-[#16c782] title" onClick={() => setIsOpen(false)}> Ragister</button>
                  </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </Menu>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
