"use client";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/Logo.svg";
import otherLogo from "@/app/images/whitelogo.svg";
import Button from "../button/Button";
import blackLogo from "@/app/images/Logo.svg";

import coined from '@/app/images/Cryptocurrency.png'
import frame from '@/app/images/Frame 103.png'


function Navbar({ isNightMode, toggleMode }) {
  const [languages, setLanguages] = useState(false);
  const [coins, setCoins] = useState(false);

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
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCoins, setFilteredCoins] = useState(coinData);

  const filterCoins = (query) => {
    const filtered = coinData.filter((coin) => coin.name.toLowerCase().includes(query.toLowerCase())

    );
    setFilteredCoins(filtered)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterCoins(e.target.value);
  }

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
              className="text-black bg-[transparent] md:text-[13px] lg:text-[15px] xl:text-[18px]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white"
              type="button"
            >
              English{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}

            {languages && (
              <div
                id="dropdown"
                className="z-10 absolute bottom-[65%] right-[2%]  bg-[#eeeeee] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#212121]"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
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
                  strokeWidth="2"
                />
                <path
                  d="M12 5V3M12 21V19M16.95 7.05L18.364 5.636M5.636 18.364L7.05 16.95M19 12H21M3 12H5M16.95 16.95L18.364 18.364M5.636 5.636L7.05 7.05"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
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
          <ul className="flex items-center gap-3 relative">
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-blackColor tex-[24px] font-[500] dark:text-white">
              <Link href="/blockchain">Blockchain</Link>
            </li>
            <li onClick={() => setCoins(!coins)} className="text-blackColor  tex-[24px] font-[500] dark:text-white">
              <Link href="#">Cryptocurrency</Link>
              {coins && <div className="absolute top-[100%] left-[30%] rounded-[6px] p-3 bg-[#eeeeee] dark:bg-[#212121]">
                <ul>
                  <li className="text-blackColor title  text-[14px] mb-2 dark:text-white"><Link href='/coins'>Top Fallers</Link></li>
                  <li className="text-blackColor title  text-[14px] mb-2 dark:text-white"><Link href='/coins'>Top Gainers</Link></li>
                  <li className="text-blackColor title  text-[14px] mb-2 dark:text-white"><Link href='/coins'>All Coins</Link></li>
                </ul>
              </div>}
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
                                  <g clipPath="url(#clip0_206_7384)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
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
                                  <g clipPath="url(#clip0_206_7384)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
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
                                  <g clipPath="url(#clip0_206_7384)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
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
                                  <g clipPath="url(#clip0_206_7384)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
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
          <Button text="Sign in" />
          {/* <div className="dropdown-menu absolute bottom-[-400%] flex justify-between items-center right-10 bg-white dark:bg-[#212121]">
                        <div className="news">
                            <ul className="flex flex-col flex-wrap">
                                <li>News</li>
                                <li>Authors Program</li>
                                <li>Selection</li>
                                <li>Video</li>
                                <li>Analytics</li>
                                <li>Video</li>
                                <li>Analytics</li>
                                <li>Education</li>
                                <li>Personalities</li>
                                <li>Opinion</li>
                                <li>Overview</li>
                                <li>Events</li>
                            </ul>
                        </div>
                        <div className="tags"></div>
                    </div> */}
        </Menu>
      </div>
      <hr />
      <div className=" hidden md:flex  searchSection  items-center justify-between mt-5 w-11/12 m-auto">
        <div className="bg-[#EEEEEE] dark:bg-[#212121] w-fit p-2 rounded-sm">
          <h3 className="flex items-center gap-[3px] text-lightBlack dark:text-white md:text-[7px] lg:text-[10px] xl:text-[12px] xl-a:text-[14px]">
            Sponsored:{" "}
            <span className="flex items-center gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 4H23.5V16H5.5V4ZM14.5 7C15.2956 7 16.0587 7.31607 16.6213 7.87868C17.1839 8.44129 17.5 9.20435 17.5 10C17.5 10.7956 17.1839 11.5587 16.6213 12.1213C16.0587 12.6839 15.2956 13 14.5 13C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7ZM9.5 6C9.5 6.53043 9.28929 7.03914 8.91421 7.41421C8.53914 7.78929 8.03043 8 7.5 8V12C8.03043 12 8.53914 12.2107 8.91421 12.5858C9.28929 12.9609 9.5 13.4696 9.5 14H19.5C19.5 13.4696 19.7107 12.9609 20.0858 12.5858C20.4609 12.2107 20.9696 12 21.5 12V8C20.9696 8 20.4609 7.78929 20.0858 7.41421C19.7107 7.03914 19.5 6.53043 19.5 6H9.5ZM1.5 8H3.5V18H19.5V20H1.5V8Z"
                  fill="#2196F3"
                />
              </svg>{" "}
              Traders are buying
            </span>{" "}
            <span className="font-semibold">Meme Kombat.</span>{" "}
            <a href="">
              <span className="text-blue font-semibold">
                Can This Stake to Earn Meme Coin with Utility Explode?
              </span>
            </a>{" "}
          </h3>
        </div>

        <div className="searchbox flex items-center  gap-2 ml-auto">
          <div className="search flex items-center gap-4 bg-[#EEEEEE] dark:bg-[#212121] dark:text-white py-2 px-2 rounded-md md:w-[55%] lg:w-[80%] xl:w-[100%] ml-auto">
            <input
              type="text"
              placeholder="Search"
              className="bg-[transparent]  dark:text-white outline-none md:w-[65%] lg:w-[80%] xl:w-[100%]"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5002 21L17.1572 16.657M17.1572 16.657C17.9001 15.9141 18.4894 15.0321 18.8914 14.0615C19.2935 13.0909 19.5004 12.0506 19.5004 11C19.5004 9.94936 19.2935 8.90905 18.8914 7.93842C18.4894 6.96779 17.9001 6.08585 17.1572 5.34296C16.4143 4.60007 15.5324 4.01078 14.5618 3.60874C13.5911 3.20669 12.5508 2.99976 11.5002 2.99976C10.4496 2.99976 9.40929 3.20669 8.43866 3.60874C7.46803 4.01078 6.58609 4.60007 5.84321 5.34296C4.34288 6.84329 3.5 8.87818 3.5 11C3.5 13.1217 4.34288 15.1566 5.84321 16.657C7.34354 18.1573 9.37842 19.0002 11.5002 19.0002C13.622 19.0002 15.6569 18.1573 17.1572 16.657Z"
                stroke="#AAAAAA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Button text="Gaming" />
        </div>
        {searchQuery.length > 0 &&
          <div className="absolute top-[35%] rounded-[8px] h-fit right-[3%] bg-white dark:bg-[#0b0b0b] w-1/3 px-3 py-5">
            {filteredCoins.length > 0 ? filteredCoins.map((coin, index) => (
              <>
                <div key={coin.id} className="flex justify-between items-center mb-2">
                  <Image src={coined} alt="coin" />
                  <p className="title text-[14px] text-blackColor dark:text-white">{coin.name}</p>
                  <p className="desc text-[12px] text-lightBlack dark:text-white">{coin.abb}</p>
                  <p className="desc bg-[#eeeeee] text-lightBlack text-[12px] rounded-[6px] px-1 py-[1px]">#786</p>
                  <p className="desc text-blackColor text-[14px] dark:text-white">{coin.price}</p>
                  <p className="flex gap-2 items-center text-[#EA3943] desc text-[14px]"><svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0.312607L6.5 6.31261L0.5 0.312607L12.5 0.312607Z" fill="#EA3943" />
                  </svg>
                    {coin.change}</p>

                  {/* Display other coin details */}
                </div>
                <hr className="mb-2" />
                <div className="flex justify-between items-center mb-3 gap-2">
                  <Image className="flex-[0.1] object-cover" src={frame} alt="profile" />
                  <p className=" bg-white dark:bg-[#212121] title tex-blackColor dark:text-white px-2 text-[12px] flex-1">Daily active bitcoin addresses hit yearly peak, cross 1M as BTC
                    and also many more, Daily active bitcoin.</p>
                </div>
              </>

            )) : <h2 className="title text-blackColor dark:text-white text-center text-[15px]">No Matches Found </h2>}
            <div className="flex justify-between items-center border-t-[2px] border-[#eeeeee] pt-3 mt-12">
              <div className="cancel flex items-center gap-2">
                <p className="bg-[#eeeeee] dark:bg-[#212121] p-[2px] rounded-[2px] text-blue">Esc</p>
                <p className=" p-[2px] rounded-[2px] text-blackColor dark:text-white">To Cancel</p>
              </div>
              <div className="enter flex items-center gap-2">
                <p className="bg-[#eeeeee] dark:bg-[#212121] p-[2px] rounded-[2px] "><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 7.76425 0.0858463 7.53816 0.238654 7.37146C0.391461 7.20476 0.598713 7.11111 0.814815 7.11111H10.5926C11.2409 7.11111 11.8627 6.83016 12.3211 6.33006C12.7795 5.82997 13.037 5.15169 13.037 4.44444V0.888889C13.037 0.653141 13.1229 0.427049 13.2757 0.26035C13.4285 0.0936507 13.6357 0 13.8519 0C14.068 0 14.2752 0.0936507 14.428 0.26035C14.5808 0.427049 14.6667 0.653141 14.6667 0.888889V4.44444C14.6667 5.62318 14.2374 6.75365 13.4734 7.58714C12.7094 8.42064 11.6731 8.88889 10.5926 8.88889H0.814815C0.598713 8.88889 0.391461 8.79524 0.238654 8.62854C0.0858463 8.46184 0 8.23575 0 8Z" fill="#2196F3" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.238757 8.62859C0.0860032 8.46189 0.000190735 8.23584 0.000190735 8.00014C0.000190735 7.76444 0.0860032 7.53839 0.238757 7.3717L3.49802 3.81614C3.65169 3.65422 3.85752 3.56463 4.07116 3.56665C4.2848 3.56868 4.48917 3.66216 4.64024 3.82697C4.79131 3.99178 4.87701 4.21472 4.87886 4.44779C4.88072 4.68085 4.79859 4.90538 4.65017 5.07303L1.96698 8.00014L4.65017 10.9273C4.72799 11.0092 4.79006 11.1073 4.83277 11.2158C4.87547 11.3242 4.89795 11.4409 4.89889 11.5589C4.89983 11.6769 4.87921 11.794 4.83824 11.9032C4.79727 12.0125 4.73677 12.1117 4.66026 12.1952C4.58376 12.2786 4.49278 12.3446 4.39265 12.3893C4.29251 12.434 4.18521 12.4565 4.07702 12.4555C3.96883 12.4545 3.86191 12.4299 3.7625 12.3833C3.66309 12.3368 3.57318 12.269 3.49802 12.1841L0.238757 8.62859Z" fill="#2196F3" />
                </svg></p>
                <p className="p-[2px] rounded-[2px] text-blackColor dark:text-white">To Enter</p>
              </div>
              <div className="navigate flex items-center gap-2">
                <p className="bg-[#eeeeee] dark:bg-[#212121] p-[2px] rounded-[2px] text-blue">TAB</p>
                <p className="bg-[#eeeeee] dark:bg-[#212121] p-[2px] rounded-[2px] "><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 13C5.25 13.4142 5.58579 13.75 6 13.75C6.41421 13.75 6.75 13.4142 6.75 13H5.25ZM6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 13L6.75 1H5.25L5.25 13H6.75Z" fill="#2196F3" />
                </svg>
                </p>
                <p className="bg-[#eeeeee] dark:bg-[#212121] p-[2px] rounded-[2px] "> <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1L6.75 1ZM5.46967 13.5303C5.76256 13.8232 6.23744 13.8232 6.53033 13.5303L11.3033 8.75736C11.5962 8.46447 11.5962 7.98959 11.3033 7.6967C11.0104 7.40381 10.5355 7.40381 10.2426 7.6967L6 11.9393L1.75736 7.6967C1.46447 7.40381 0.989592 7.40381 0.696699 7.6967C0.403806 7.98959 0.403806 8.46447 0.696699 8.75736L5.46967 13.5303ZM5.25 1L5.25 13H6.75L6.75 1L5.25 1Z" fill="#2196F3" />
                </svg>
                </p>
                <p className="p-[2px] rounded-[2px] text-blackColor dark:text-white">To Navigate</p>
              </div>
            </div>
          </div>

        }
      </div>
    </div>
  );
}

export default Navbar;
