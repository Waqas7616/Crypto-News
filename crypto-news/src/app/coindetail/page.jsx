"use client";
import React, { useState, useEffect } from "react";
import bitcoin from "../images/logos_bitcoin.png";
import Image from "next/image";
import frame from "../images/Frame.png";
import Link from "next/link";
import up from "../images/arrowup.png";
import down from "../images/arrowdown.png";
import ad from "../images/add.png";
import coin from "../images/Cryptocurrency.png";
import Market from "../components/coinmarket/Market";
import NFTCard from "../components/nftCard/NFTCard";
import PressRelease from "../components/pressRelease/PressRelease";
import Comment from "../components/comment/Comment";
import img from "../images/Ad..svg";
import img1 from "../images/nft1.svg";
import img2 from "../images/nft2.svg";
import img3 from "../images/nft3.svg";
import img4 from "../images/nft4.svg";

function CoinDetail() {
  const [tabs, setTabs] = useState(2);
  const [featured, setFeatured] = useState(false);

  return (
    <div className="w-11/12 3xl:w-[30%]  m-auto">
      <div className=" flex flex-col md:flex-row items-start gap-4 mt-12">
        <div className="flex md:hidden items-center gap-[25px] mb-[35px] ">
          <h2 className="title text-[14px] text-[#333333]" id="chart">
            Chart
          </h2>
          <h2 className="title text-[14px] text-[#333333]" id="market">
            Markets
          </h2>
          <h2 className="title text-[14px] text-[#333333]" id="news">
            News
          </h2>
          <h2 className="title text-[14px] text-[#333333]" id="about">
            About
          </h2>
          <h2 className="title text-[14px] text-[#333333]" id="analytic">
            Analytics
          </h2>
        </div>
        <div className="w-[100%] flex flex-col items-center md:items-start  md:w-[13%] md:order-1">
          <div className="flex items-center gap-2">
            <Image src={bitcoin} />
            <h2 className="text-[#333333] title text-[27px] md:text-[18px] lg:text-[26px] xl:text-[32px]">
              Bitcoin
            </h2>
          </div>
          <div className="flex items-center gap-[10px] md:gap-0 flex-row md:flex-col md:items-start">
            <div className="my-5 text-center md:text-left">
              <p className="text-[16px] md:text-[10px] lg:text-[13] xl:text-[16px] text-[#AAAAAA]">
                Total balance
              </p>
              <p className="title text-[18px] md:text-[14px] lg:text-[16] xl:text-[24px] text-[#333333]">
                $125,345.01
              </p>
            </div>
            <div className="my-5 text-center md:text-left">
              <p className="text-[16px] md:text-[10px] lg:text-[13] xl:text-[16px] text-[#AAAAAA]">
                Last 24 hours
              </p>
              <p className="flex items-center gap-3 text-[#008000] text-[18px] md:text-[14px] lg:text-[16] xl:text-[24px]">
                <span>542.56</span> <span>(1.30%)</span>
              </p>
            </div>
            <div className="my-5 hidden md:block">
              <p className="text-[16px] md:text-[10px] lg:text-[13] xl:text-[16px] text-[#AAAAAA]">
                Total Supply
              </p>
              <p className=" text-[18px] md:text-[14px] lg:text-[16] xl:text-[24px] text-[#333333]">
                19,614,000 BTC
              </p>
            </div>
            <div className="my-5 hidden md:block">
              <p className="text-[8px] md:text-[10px] lg:text-[13] xl:text-[16px] text-[#AAAAAA]">
                Max Supply
              </p>
              <p className=" text-[12px] md:text-[14px] lg:text-[16] xl:text-[24px] text-[#333333]">
                19,614,000 BTC
              </p>
            </div>
            <div className="my-5 hidden md:block">
              <p className="text-[8px] md:text-[10px] lg:text-[13] xl:text-[16px] text-[#AAAAAA]">
                Market Cup
              </p>
              <p className=" text-[12px] md:text-[14px] lg:text-[16] xl:text-[24px] text-[#333333]">
                $19,614,000
              </p>
            </div>
          </div>
        </div>

        {/* ---Graph--- */}
        <div className="w-[60%]  mt-3 order-3 md:order-2">
          <div className="hidden md:flex items-center gap-[25px] mb-[35px] ">
            <h2 className="title text-[14px] text-[#333333]" id="chart">
              Chart
            </h2>
            <h2 className="title text-[14px] text-[#333333]" id="market">
              Markets
            </h2>
            <h2 className="title text-[14px] text-[#333333]" id="news">
              News
            </h2>
            <h2 className="title text-[14px] text-[#333333]" id="about">
              About
            </h2>
            <h2 className="title text-[14px] text-[#333333]" id="analytic">
              Analytics
            </h2>
          </div>
          <Image src={frame} alt="frme" className="mt-5" />
        </div>
        <div className="w-[100%] md:w-[25%] order-2 md:order-3">
          <div className="flex items-center justify-center md:justify-end  gap-5 ml-auto">
            <button className="bg-[#2E662E] flex items-center justify-center gap-3 text-white text-[14px] md:text-[14] lg:text-[10px] xl:text-[14px] title rounded-lg w-[143px] h-[40px]">
              <Image src={up} alt="up" />
              BUY BTC
            </button>
            <button className="bg-[#B82F2F] flex items-center justify-center gap-3 text-white text-[14px] md:text-[14] lg:text-[10px] xl:text-[14px] title rounded-lg w-[143px] h-[40px]">
              <Image src={down} alt="up" />
              SELl BTC
            </button>
          </div>
          <div className="mt-[35px] hidden md:block">
            <Image src={ad} alt="ad" className="ml-auto" />
          </div>
        </div>
      </div>
      {/* TABS */}
      <div className="overflow-x-auto w-100">
        <div className="tabs flex items-center justify-center w-[550px]  md:w-auto gap-[20px]  mt-12 mb-8">
          <div
            className={
              tabs === 0 ? "tab pr-3 relative active" : "tab pr-3 relative"
            }
            onClick={() => setTabs(0)}
          >
            <h5
              className={
                tabs === 0
                  ? "text-blue font-[500] text-[16px] cursor-pointer"
                  : "text-[#AAAAAA] font-[500] text-[16px] cursor-pointer dark:text-white"
              }
            >
              INFO
            </h5>
          </div>
          <div
            className={
              tabs === 1 ? "tab pr-3 relative active" : "tab pr-3 relative"
            }
            onClick={() => setTabs(1)}
          >
            <h5
              className={
                tabs === 1
                  ? "text-blue font-[500] text-[16px] cursor-pointer"
                  : "text-[#AAAAAA] font-[500] text-[16px] cursor-pointer dark:text-white"
              }
            >
              KEY INDICATOR
            </h5>
          </div>
          <div
            className={
              tabs === 2 ? "tab pr-3 relative active" : "tab pr-3 relative"
            }
            onClick={() => setTabs(2)}
          >
            <h5
              className={
                tabs === 2
                  ? "text-blue font-[500] text-[16px] cursor-pointer"
                  : "text-[#AAAAAA] font-[500] text-[16px] cursor-pointer dark:text-white"
              }
            >
              TRADE
            </h5>
          </div>
          <div
            className={
              tabs === 3 ? "tab pr-3 relative active" : "tab pr-3 relative"
            }
            onClick={() => setTabs(3)}
          >
            <h5
              className={
                tabs === 3
                  ? "text-blue font-[500] text-[16px] cursor-pointer"
                  : "text-[#AAAAAA] font-[500] text-[16px] cursor-pointer dark:text-white"
              }
            >
              HISTORICAL DATA
            </h5>
          </div>
          <div
            className={
              tabs === 4 ? "tab pr-3 relative active" : "tab pr-3 relative"
            }
            onClick={() => setTabs(4)}
          >
            <h5
              className={
                tabs === 4
                  ? "text-blue font-[500] text-[16px] cursor-pointer"
                  : "text-[#AAAAAA] font-[500] text-[16px] cursor-pointer dark:text-white"
              }
            >
              WIDGET
            </h5>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className={tabs === 0 ? "content1 block" : "content1 hidden"}>
          <Market />
        </div>
        <div className={tabs === 1 ? "content1 block" : "content1 hidden"}>
          <Market />
        </div>
        <div className={tabs === 2 ? "content1 block" : "content1 hidden"}>
          <Market />
        </div>
        <div className={tabs === 3 ? "content1 block" : "content1 hidden"}>
          <Market />
        </div>
        <div className={tabs === 4 ? "content1 block" : "content1 hidden"}>
          <Market />
        </div>
      </div>
      <div className="flex items-start mt-12 ">
        <div className="w-[100%] md:w-[77%] ">
          <div>
            <div>
              <h2 className="text-blackColor text-[18px] md:text-[16px] xl:text-[24px] font-[500]  dark:text-blue">
                News By Catagories
              </h2>
              <div className="flex flex-col md:flex-row flex-wrap gap-3 items-center mt-3">
                <div className="w-full md:w-[22%]">
                  <h3 className="text-blackColor text-[14px] md:text-[14px] xl:text-[18px] dark:text-white my-2">
                    NFT/Metaverse
                  </h3>
                  <hr className="mb-3" />
                  <div className="preview-image">
                    <Image
                      className="w-full object-cover"
                      src={img1}
                      alt="blogImage"
                    />
                  </div>
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to
                    Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Here are Top 7 Altcoins Under $0.05 to Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Donald Trump NFT Series Records 3,213% 24H Surge in Sales
                    Amid Launch of Third Series “Mugshot”
                  </p>
                </div>
                <div className="w-full md:w-[22%]">
                  <h3 className="text-blackColor text-[14px] md:text-[14px] xl:text-[18px] dark:text-white my-2">
                    NFT/Metaverse
                  </h3>
                  <hr className="mb-3" />
                  <div className="preview-image">
                    <Image
                      className="w-full object-cover"
                      src={img1}
                      alt="blogImage"
                    />
                  </div>
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to
                    Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Here are Top 7 Altcoins Under $0.05 to Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Donald Trump NFT Series Records 3,213% 24H Surge in Sales
                    Amid Launch of Third Series “Mugshot”
                  </p>
                </div>
                <div className="w-full md:w-[22%]">
                  <h3 className="text-blackColor text-[14px] md:text-[14px] xl:text-[18px] dark:text-white my-2">
                    NFT/Metaverse
                  </h3>
                  <hr className="mb-3" />
                  <div className="preview-image">
                    <Image
                      className="w-full object-cover"
                      src={img1}
                      alt="blogImage"
                    />
                  </div>
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to
                    Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Here are Top 7 Altcoins Under $0.05 to Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Donald Trump NFT Series Records 3,213% 24H Surge in Sales
                    Amid Launch of Third Series “Mugshot”
                  </p>
                </div>
                <div className="w-full md:w-[22%]">
                  <h3 className="text-blackColor text-[14px] md:text-[14px] xl:text-[18px] dark:text-white my-2">
                    NFT/Metaverse
                  </h3>
                  <hr className="mb-3" />
                  <div className="preview-image">
                    <Image
                      className="w-full object-cover"
                      src={img1}
                      alt="blogImage"
                    />
                  </div>
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to
                    Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Here are Top 7 Altcoins Under $0.05 to Watch
                  </p>
                  <hr className="mb-3" />
                  <p className="text-[14px] md:text-[10px] lg:text-[16px] text-lightBlack dark:text-[rgba(255,255,255,0.8)] my-2">
                    Donald Trump NFT Series Records 3,213% 24H Surge in Sales
                    Amid Launch of Third Series “Mugshot”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[92%]">
            <PressRelease />
          </div>
          <div className="mt-12">
            <NFTCard displayCount={4} />
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="text-[#333333] text-[24px] title mt-[86px]">
            Recent Comments
          </h2>
          <Comment />
          <Comment />
          <Comment />

          <Comment />
          <Image src={img} alt="ad" className="mt-5" />
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
