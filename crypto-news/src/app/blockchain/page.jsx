"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import BlockchainCard from "../components/blockchainCard/BlockchainCard";
import NFTCard from "../components/nftCard/NFTCard";
import Comment from "../components/comment/Comment";
import Image from "next/image";
import ad from "@/app/images/Ad..svg";
import Features from "../components/features/Features";

function page() {
  return (
    <div>
      <div className="w-11/12 3xl:w-[30%] m-auto mt-5 flex gap-4 ">
        <div className="w-full md:w-3/4">
          <h2 className="title text-blackColor font-[500] text-[20px] dark:text-blue">
            BlockChain
          </h2>
          <p className="text-lightBlack text-[14px]  dark:text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining.
          </p>
          <BlockchainCard />
          <BlockchainCard />
          <BlockchainCard />
          <BlockchainCard />
          <BlockchainCard />
        </div>
        <div className=" w-1/4 hidden md:block">
          <Features />
        </div>
      </div>
      <h2 className="text-[20px] text-blackColor font-[500] mt-8 w-11/12 3xl:w-[30%] m-auto dark:text-blue">
        All News
      </h2>

      <div className="w-11/12 3xl:w-[30%] m-auto flex mt-3 gap-4">
        <div className="w-full md:w-3/4 mt-3">
          <NFTCard />
        </div>
        <div className="w-1/4 mt-3 hidden md:block ">
          <h2 className="text-[20px] text-blackColor font-[500] ">
            Recent Comments
          </h2>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Image
            className="m-auto mt-4"
            src={ad}
            width={150}
            height={150}
            alt="ad"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
