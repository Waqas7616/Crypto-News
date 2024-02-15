import React from "react";
// import '../../../globals.css'
import icon from "@/app/images/dropdownIcon.png";
import Image from "next/image";

function LatestNews() {
  const repeatedNews = Array.from({ length: 20 }, (_, index) => (
    <div key={index}>
      <div className="flex ">
        <div className="relative last:after:hidden after:absolute  after:top-7 after:bottom-0 after:start-1 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-start items-center">
            <div className="w-2 h-2 rounded-full bg-blue "></div>
          </div>
        </div>

        <div className="grow pt-[.3rem] pb-8 ">
          <p className="flex gap-x-1.5 text-[12px] desc text-red dark:text-white">
            Jan 27, 6:06 am
          </p>
          <h2 className="mt-1 md:text-[7px] lg:text-[14px] xl:text-[16px] title text-blackColor dark:text-white w-[90%]">
            <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem</a>
          </h2>
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" relative   ">
      <div className="flex justify-between items-center">
        <div> <h2 className="text-blackColor md:text-[16px] lg:text-[18px] xl:text-[24px] title dark:text-blue">
          Latest News
        </h2>
          <p className="text-lightBlack desc md:text-[12px] lg:text-[14px] xl:text-[16px] dark:text-white">
            Hot feeds everyday
          </p></div>
        <button className="bg-[#EEEEEE] md:text-[12px] lg:text-[14px] xl-a:text-[16px] dark:bg-[#212121] dark:text-white border-2 rounded-md border-[#DDDDDD] px-2 py-1 flex items-center gap-2">
          View All
        </button>
      </div>

      <div className="page">
        <div className="latestNews md:h-[30rem] lg:h-[45rem] overflow-auto mt-5">
          {repeatedNews}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
