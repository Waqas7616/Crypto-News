import React from 'react'
// import '../../../globals.css'

function LatestNews() {
    const repeatedNews = Array.from({ length: 20 }, (_, index) => (
        <div>


            <div class="flex ">
                <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                    <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                        <div class="w-2 h-2 rounded-full bg-blue dark:bg-gray-600"></div>
                    </div>
                </div>

                <div class="grow pt-0.5 pb-8">
                    <p class="flex gap-x-1.5  text-red dark:text-white">
                        Jan 27, 6:06 am
                    </p>
                    <h2 class="mt-1 font-[500] text-blackColor dark:text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h2>

                </div>
            </div>
        </div>
    ));
    return (

        <div className="latestNews relative  h-[80vh] overflow-auto">
            <h2 className='text-blackColor text-[24px] font-[500]'>Latest News</h2>
            <p className='text-lightBlack font-[400] text-[16px]'>Hot feeds everyday</p>
            {repeatedNews}
        </div>

    )
}

export default LatestNews
