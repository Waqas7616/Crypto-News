import React from "react";
import Image from "next/image";
import blog from "@/app/images/blog.svg";
import icon from "@/app/images/dropdownIcon.png";

function BlogCard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-blackColor md:text-[16px] lg:text-[18px] xl:text-[24px] font-[500] dark:text-blue">
            Trending
          </h2>
          <p className="text-lightBlack font-[400] md:text-[12px] lg:text-[14px] dark:text-white">
            People talk about
          </p>
        </div>
        <button className="bg-[#EEEEEE] md:text-[12px] lg:text-[14px] xl:text-[16px] dark:bg-[#212121] dark:text-white border-2 rounded-md border-[#DDDDDD] px-2 py-1 flex items-center gap-2">
          Trending <Image className="mt-1" src={icon} />
        </button>
      </div>
      <div className="blogBanner mt-4">
        <Image className="w-full" src={blog} />
      </div>
      <h1 className="font-medium text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px]  text-blackColor dark:text-blue mt-1">
        Daily Active Bitcoin Addresses Hit Yearly Peak, Cross 1M as BTC
      </h1>
      <p className="desc font-[500] text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-blackColor my-3 dark:text-white">
        Daily active addresses on the Bitcoin network have recently hit a new
        yearly peak above the 1 million mark, as BTC finally breaks above
      </p>
      <div className="blogAuthor flex items-center justify-between mb-3 pr-3">
        <p className="text-lightBlack text-[9px] md:text-[11px] lg:text-[14px] font-[500]">
          By{" "}
          <span className="text-blue text-[9px] md:text-[11px] lg:text-[14px]">
            Sam Wisdom Raphel
          </span>
        </p>
        <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
          Jan 26,2024 at 6:06 am
        </p>
        <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
          24.1k views / 8.9k likes
        </p>
      </div>

      <div className="nextBlog mt-3">
        <h4 className="text-red text-[12px] md:text-[13px] lg:text-[14px]">Defi</h4>
        <h1 className="text-blackColor font-[500] dark:text-white text-[10px] md:text-[12px] lg:text-[18px]">
          ethererum DeFI Gets “Gasiess’ Trading with New Ox API Address
        </h1>
        <div className="blogAuthor flex items-center justify-between pr-3">
          <p className="text-lightBlack text-[9px] md:text-[11px] lg:text-[14px] font-[500] dark:text-white">
            By{" "}
            <span className="text-red text-[9px] md:text-[11px] lg:text-[14px]">
              Sam Wisdom Raphel
            </span>
          </p>
          <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
            Jan 26,2024 at 6:06 am
          </p>
          <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
            24.1k views / 8.9k likes
          </p>
        </div>
        <hr className="my-3" />
      </div>

      <div className="nextBlog mt-3">
        <h4 className="text-red text-[12px] md:text-[13px] lg:text-[14px]">Defi</h4>
        <h1 className="text-blackColor font-[500] dark:text-white text-[10px] md:text-[12px] lg:text-[18px]">
          ethererum DeFI Gets “Gasiess’ Trading with New Ox API Address
        </h1>
        <div className="blogAuthor flex items-center justify-between pr-3">
          <p className="text-lightBlack text-[9px] md:text-[11px] lg:text-[14px] font-[500] dark:text-white">
            By{" "}
            <span className="text-red text-[9px] md:text-[11px] lg:text-[14px]">
              Sam Wisdom Raphel
            </span>
          </p>
          <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
            Jan 26,2024 at 6:06 am
          </p>
          <p className="text-lightBlack font-[400] text-[9px] md:text-[10px] lg:text-[12px] dark:text-white">
            24.1k views / 8.9k likes
          </p>
        </div>
        <hr className="my-3" />
      </div>
    </div>
  );
}

export default BlogCard;
