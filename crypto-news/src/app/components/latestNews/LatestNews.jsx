import React from "react";
// import '../../../globals.css'

function LatestNews() {
  const repeatedNews = Array.from({ length: 20 }, (_, index) => (
    <div>
      <div class="flex ">
        <div class="relative last:after:hidden after:absolute  after:top-7 after:bottom-0 after:start-1 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div class="relative z-10 w-7 h-7 flex justify-start items-center">
            <div class="w-2 h-2 rounded-full bg-blue "></div>
          </div>
        </div>

        <div class="grow pt-[.3rem] pb-8 ">
          <p class="flex gap-x-1.5 text-[.75rem]  text-red dark:text-white">
            Jan 27, 6:06 am
          </p>
          <h2 class="mt-1 text-base font-[500] text-blackColor dark:text-white w-[90%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </h2>
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" relative   ">
      <h2 className="text-blackColor text-[24px] font-[500] dark:text-blue">
        Latest News
      </h2>
      <p className="text-lightBlack font-[400] text-[16px] dark:text-white">
        Hot feeds everyday
      </p>
      <div className="page">
        <div className="latestNews h-[45rem] overflow-auto mt-5">
          {repeatedNews}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
