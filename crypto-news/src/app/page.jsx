"use client ";

import Button from "./components/button/Button";
import LatestNews from "./components/latestNews/LatestNews";
import Navbar from "./components/navbar/Navbar";
import BlogCard from "./components/blogCard/BlogCard";
import Features from "./components/features/Features";
import PressRelease from "./components/pressRelease/PressRelease";
import NFTCard from "./components/nftCard/NFTCard";
import Image from "next/image";
import ad from "@/app/images/Ad..svg";
import Comment from "./components/comment/Comment";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main w-11/12 m-auto mt-5">
        {/* SEARCHBOX SECTION  */}

        <div className="searchSection flex items-center justify-between">
          <h3 className="flex items-center gap-[3px] text-lightBlack">
            Sponsored:{" "}
            <span>
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
              </svg>
            </span>
            Traders are buying <span className="font-[500]">Meme Kombat.</span>{" "}
            <span className="text-blue">
              Can This Stake to Earn Meme Coin with Utility Explode?
            </span>{" "}
          </h3>

          <div className="searchbox flex items-center justify-between gap-2">
            <div className="search flex items-center gap-4 bg-[#EEEEEE] py-2 px-1 rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="bg-[transparent]"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Button text="Search" />
          </div>
        </div>

        {/* MAIN DETAILS  */}
        <div className="flex">
          <div className="hidden md:block maindetails w-[25%] mt-5">
            <LatestNews />
          </div>
          <div className="blog w-[100%] md:w-[50%] px-5">
            <BlogCard />
          </div>
          <div className="third hidden md:block w-[25%]  mt-5">
            <Features />
          </div>
        </div>

        {/* PRESS RELEASE  */}
        <PressRelease />

        {/* NFT SECTION  */}
        <div className="flex justify-between items-start mt-5">
          <div className="w-[75%]">
            <NFTCard />
          </div>
          <div className="w-[25%]">
            <Image src={ad} alt="ad" />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}
