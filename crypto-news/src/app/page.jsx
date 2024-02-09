
"use client ";

import Button from "./components/button/Button";
import LatestNews from "./components/latestNews/LatestNews";
import Navbar from "./components/navbar/Navbar";
import BlogCard from "./components/blogCard/BlogCard";
import Features from "./components/features/Features";
import PressRelease from "./components/pressRelease/PressRelease";
import NFTCard from "./components/nftCard/NFTCard";
import Image from "next/image";
import ad from '@/app/images/Ad..svg'
import Comment from "./components/comment/Comment";

export default function Home() {
  return (
    <>

      <div className="main w-11/12 m-auto mt-5">

        {/* SEARCHBOX SECTION  */}



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
