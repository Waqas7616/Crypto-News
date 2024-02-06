import React from 'react'
import Image from 'next/image';
import blog from '@/app/images/blog.svg'

function BlogCard() {
    return (
        <div>
            <h2 className='text-blackColor text-[24px] font-[500]'>
                Trending
            </h2>
            <p className='text-lightBlack font-[400] text-[16px]'>People talk about</p>
            <div className="blogBanner mt-4">
                <Image className='w-full' src={blog} />
            </div>
            <h1 className='font-[500] text-[32px]  text-blackColor'>Daily Active Bitcoin Addresses Hit Yearly Peak, Cross 1M as BTC</h1>
            <p className="desc font-[500] text-[16px] text-blackColor my-3">Daily active addresses on the Bitcoin network have recently hit a new yearly peak above the 1 million mark, as BTC finally breaks above</p>
            <div className="blogAuthor flex items-center justify-between mb-3 pr-3">
                <p className="text-lightBlack text-[14px] font-[500]">By <span className="text-blue text-[14px]">Sam Wisdom Raphel</span></p>
                <p className="text-lightBlack font-[400] text-[12px]">Jan 26,2024 at 6:06 am</p>
                <p className="text-lightBlack font-[400] text-[12px]">24.1k views / 8.9k likes</p>
            </div>

            <div className="nextBlog mt-3">
                <h4 className="text-red">Defi</h4>
                <h1 className="text-blackColor">ethererum DeFI Gets “Gasiess’ Trading with New Ox API Address</h1>
                <div className="blogAuthor flex items-center justify-between pr-3">
                    <p className="text-lightBlack text-[14px] font-[500]">By <span className="text-red text-[14px]">Sam Wisdom Raphel</span></p>
                    <p className="text-lightBlack font-[400] text-[12px]">Jan 26,2024 at 6:06 am</p>
                    <p className="text-lightBlack font-[400] text-[12px]">24.1k views / 8.9k likes</p>
                </div>
                <hr className='my-3' />
            </div>

            <div className="nextBlog mt-3">
                <h4 className="text-red">Defi</h4>
                <h1 className="text-blackColor">ethererum DeFI Gets “Gasiess’ Trading with New Ox API Address</h1>
                <div className="blogAuthor flex items-center justify-between pr-3">
                    <p className="text-lightBlack text-[14px] font-[500]">By <span className="text-red text-[14px]">Sam Wisdom Raphel</span></p>
                    <p className="text-lightBlack font-[400] text-[12px]">Jan 26,2024 at 6:06 am</p>
                    <p className="text-lightBlack font-[400] text-[12px]">24.1k views / 8.9k likes</p>
                </div>
                <hr className='my-3' />
            </div>
        </div>
    )
}

export default BlogCard
