"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import binance from "@/app/images/binance.svg";
import profile from "@/app/images/profile.png";
import blog from "@/app/images/blog.svg";
import Comment from "../components/comment/Comment";
import akion from "@/app/images/akion.png";
import ad from "@/app/images/Ad..svg";
import post from "@/app/images/post.png";

function Article() {
  const [comments, setComments] = useState(2);
  const [commentToShow] = useState(2);

  const loadMoreComments = () => {
    setComments(comments + commentToShow)
  }
  return (
    <div>
      <div>
        <div className="w-10/12 flex items-center gap-3 mt-5 m-auto">
          <div className=" w-[20%]">
            <button className="bg-transparent w-2/3  text-blue px-3 py-1 border-blue border-[2px] rounded-md flex items-center justify-between">
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.785111 7.20061C0.602089 7.01755 0.499273 6.7693 0.499273 6.51045C0.499273 6.2516 0.602089 6.00335 0.785111 5.82029L6.30785 0.298018C6.3979 0.204782 6.50563 0.130414 6.62474 0.0792533C6.74385 0.0280925 6.87195 0.00116319 7.00158 3.68572e-05C7.13121 -0.00108948 7.25976 0.0236099 7.37974 0.0726933C7.49972 0.121777 7.60872 0.194261 7.70039 0.285918C7.79205 0.377574 7.86454 0.486567 7.91363 0.606536C7.96272 0.726506 7.98742 0.855049 7.98629 0.984666C7.98516 1.11428 7.95823 1.24238 7.90707 1.36148C7.8559 1.48057 7.78153 1.58829 7.68829 1.67834L2.85577 6.51045L7.68829 11.3426C7.86612 11.5267 7.96452 11.7733 7.9623 12.0292C7.96007 12.2852 7.8574 12.53 7.67639 12.711C7.49539 12.892 7.25053 12.9946 6.99455 12.9969C6.73858 12.9991 6.49197 12.9007 6.30785 12.7229L0.785111 7.20061Z" fill="#2196F3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29878 7.20086C7.11576 7.01779 7.01295 6.76954 7.01295 6.51069C7.01295 6.25185 7.11576 6.00359 7.29878 5.82053L12.8215 0.298262C12.9116 0.205026 13.0193 0.130658 13.1384 0.0794974C13.2575 0.0283366 13.3856 0.00140733 13.5153 0.000280998C13.6449 -0.000845339 13.7734 0.023854 13.8934 0.0729374C14.0134 0.122021 14.1224 0.194505 14.2141 0.286162C14.3057 0.377818 14.3782 0.486811 14.4273 0.60678C14.4764 0.72675 14.5011 0.855293 14.5 0.98491C14.4988 1.11453 14.4719 1.24262 14.4207 1.36172C14.3696 1.48082 14.2952 1.58854 14.202 1.67859L9.36944 6.51069L14.202 11.3428C14.3798 11.5269 14.4782 11.7735 14.476 12.0295C14.4737 12.2854 14.3711 12.5302 14.1901 12.7112C14.0091 12.8922 13.7642 12.9949 13.5082 12.9971C13.2523 12.9993 13.0056 12.9009 12.8215 12.7231L7.29878 7.20086Z" fill="#2196F3" />
              </svg>
              Previous Post</button>

            <div className="article-card mt-4 flex flex-col gap-2">
              <Image src={binance} alt='article' />
              <h4 className="article-title text-blackColor font-[500] text-[15px] dark:text-white">
                AOFverse Secure $3 Million in Private Funding
              </h4>
              <p className="date text-lightBlack text-[12px] dark:text-[rgba(255,255,255,0.8)]">Aug 23, 2023</p>
            </div>
            <button className="bg-transparent mt-3 w-2/3  text-blue px-3 py-1 border-blue border-[2px] rounded-md flex items-center justify-between">
              Next Post <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11097 5.72411C7.2917 5.9049 7.39323 6.15006 7.39323 6.40568C7.39323 6.66131 7.2917 6.90647 7.11097 7.08725L1.65745 12.5408C1.56852 12.6329 1.46214 12.7063 1.34453 12.7568C1.22691 12.8073 1.10041 12.8339 0.972408 12.835C0.844405 12.8362 0.717462 12.8118 0.598986 12.7633C0.48051 12.7148 0.372873 12.6432 0.282358 12.5527C0.191842 12.4622 0.12026 12.3546 0.0717878 12.2361C0.0233155 12.1176 -0.00107592 11.9907 3.6399e-05 11.8627C0.00114871 11.7347 0.0277427 11.6082 0.0782667 11.4906C0.128791 11.3729 0.202232 11.2666 0.294307 11.1776L5.06626 6.40568L0.294307 1.63373C0.118701 1.45191 0.0215321 1.2084 0.0237286 0.955629C0.0259251 0.702864 0.127311 0.461073 0.30605 0.282333C0.484789 0.103595 0.726581 0.00220776 0.979346 1.14441e-05C1.23211 -0.00218582 1.47563 0.0949831 1.65745 0.27059L7.11097 5.72411Z" fill="#2196F3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7184 5.72411C13.8991 5.9049 14.0006 6.15006 14.0006 6.40568C14.0006 6.66131 13.8991 6.90647 13.7184 7.08725L8.26487 12.5408C8.17594 12.6329 8.06956 12.7063 7.95195 12.7568C7.83433 12.8073 7.70783 12.8339 7.57983 12.835C7.45183 12.8362 7.32488 12.8118 7.20641 12.7633C7.08793 12.7148 6.9803 12.6432 6.88978 12.5527C6.79926 12.4622 6.72768 12.3546 6.67921 12.2361C6.63074 12.1176 6.60635 11.9907 6.60746 11.8627C6.60857 11.7347 6.63516 11.6082 6.68569 11.4906C6.73621 11.3729 6.80965 11.2666 6.90173 11.1776L11.6737 6.40568L6.90173 1.63373C6.72612 1.45191 6.62895 1.2084 6.63115 0.955629C6.63335 0.702864 6.73473 0.461073 6.91347 0.282333C7.09221 0.103595 7.334 0.00220776 7.58677 1.14441e-05C7.83953 -0.00218582 8.08305 0.0949831 8.26487 0.27059L13.7184 5.72411Z" fill="#2196F3" />
              </svg>
            </button>
            <div className="article-card mt-4 flex flex-col gap-2">
              <Image src={binance} alt='article' />
              <h4 className="article-title text-blackColor font-[500] text-[15px] dark:text-white">
                AOFverse Secure $3 Million in Private Funding
              </h4>
              <p className="date text-lightBlack text-[12px] dark:text-[rgba(255,255,255,0.8)]">Aug 23, 2023</p>
            </div>
          </div>
          <div className=" w-[55%] pr-4">
            <h2 className='text-blackColor font-[500] text-[20px] dark:text-white '>
              Daily Active Bitcoin Addresses Hit Yearly Peak, Cross 1M as BTC
            </h2>
            <p className="text-lightBlack mt-2 text-[14px] dark:text-[rgba(255,255,255,0.8)]">
              Daily active addresses on the Bitcoin network have recently hit a new yearly peak above the 1 million mark
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="profile flex gap-1">
                <div className="image">
                  <Image className='w-full object-cover' src={profile} alt='profile image' />
                </div>
                <div className="profile-info">
                  <p className="text-blackColor font-[500] text-[10px] dark:text-white">Sara Ali</p>
                  <p className="text-lightBlack text-[10px] dark:text-[rgba(255,255,255,0.8)]">Jan 27,2020 at 6:00am</p>
                </div>
              </div>
              <div className="view-info flex justify-between gap-2">
                <p className="flex items-center gap-1 text-lightBlack text-[10px] dark:text-[rgba(255,255,255,0.8)]">
                  <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4038 8.80875C16.7422 7.09743 15.5936 5.61747 14.1001 4.5518C12.6065 3.48612 10.8335 2.88145 9 2.8125C7.16655 2.88145 5.39347 3.48612 3.89993 4.5518C2.40639 5.61747 1.25785 7.09743 0.596255 8.80875C0.551574 8.93234 0.551574 9.06766 0.596255 9.19125C1.25785 10.9026 2.40639 12.3825 3.89993 13.4482C5.39347 14.5139 7.16655 15.1186 9 15.1875C10.8335 15.1186 12.6065 14.5139 14.1001 13.4482C15.5936 12.3825 16.7422 10.9026 17.4038 9.19125C17.4484 9.06766 17.4484 8.93234 17.4038 8.80875ZM9 14.0625C6.01875 14.0625 2.86875 11.8519 1.72688 9C2.86875 6.14812 6.01875 3.9375 9 3.9375C11.9813 3.9375 15.1313 6.14812 16.2731 9C15.1313 11.8519 11.9813 14.0625 9 14.0625Z" fill="#555555" />
                    <path d="M9 5.625C8.33249 5.625 7.67997 5.82294 7.12495 6.19379C6.56994 6.56464 6.13735 7.09174 5.88191 7.70844C5.62646 8.32514 5.55963 9.00374 5.68985 9.65843C5.82008 10.3131 6.14151 10.9145 6.61352 11.3865C7.08552 11.8585 7.68689 12.1799 8.34157 12.3102C8.99626 12.4404 9.67486 12.3735 10.2916 12.1181C10.9083 11.8626 11.4354 11.4301 11.8062 10.875C12.1771 10.32 12.375 9.66751 12.375 9C12.375 8.10489 12.0194 7.24645 11.3865 6.61351C10.7536 5.98058 9.89511 5.625 9 5.625ZM9 11.25C8.55499 11.25 8.11998 11.118 7.74997 10.8708C7.37996 10.6236 7.09157 10.2722 6.92127 9.86104C6.75098 9.4499 6.70642 8.9975 6.79323 8.56105C6.88005 8.12459 7.09434 7.72368 7.40901 7.40901C7.72368 7.09434 8.12459 6.88005 8.56105 6.79323C8.99751 6.70642 9.4499 6.75097 9.86104 6.92127C10.2722 7.09157 10.6236 7.37996 10.8708 7.74997C11.118 8.11998 11.25 8.55499 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25Z" fill="#555555" />
                  </svg>900
                </p>
                <p className="flex items-center gap-1 text-lightBlack text-[10px] dark:text-[rgba(255,255,255,0.8)]">
                  <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00005 15.75C10.4722 15.7497 11.904 15.268 13.077 14.3785C14.2501 13.489 15.1002 12.2403 15.4978 10.8228C15.8953 9.40531 15.8186 7.89669 15.2792 6.52687C14.7398 5.15704 13.7673 4.00113 12.51 3.23527C11.2527 2.46941 9.77946 2.1356 8.31483 2.28472C6.8502 2.43384 5.47449 3.05771 4.39733 4.06125C3.32017 5.0648 2.60063 6.39298 2.34837 7.84341C2.09611 9.29384 2.32496 10.787 3.00005 12.0953L2.25005 15.75L5.9048 15C6.8318 15.4793 7.8848 15.75 9.00005 15.75Z" stroke="#555555" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.625 9H5.6325V9.0075H5.625V9ZM9 9H9.0075V9.0075H9V9ZM12.375 9H12.3825V9.0075H12.375V9Z" stroke="#555555" stroke-width="1.6875" stroke-linejoin="round" />
                  </svg>45
                </p>
                <p className="flex items-center gap-1 text-lightBlack text-[10px] dark:text-[rgba(255,255,255,0.8)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_316_4843)">
                      <path d="M9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5ZM9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3ZM9 4.5C9.1837 4.50002 9.361 4.56747 9.49828 4.68954C9.63556 4.81161 9.72326 4.97981 9.74475 5.16225L9.75 5.25V8.6895L11.7802 10.7198C11.9148 10.8547 11.9929 11.0358 11.9987 11.2263C12.0045 11.4167 11.9376 11.6023 11.8116 11.7452C11.6855 11.8881 11.5098 11.9777 11.3201 11.9958C11.1305 12.0139 10.941 11.9591 10.7902 11.8425L10.7198 11.7802L8.46975 9.53025C8.35318 9.41358 8.27832 9.26175 8.25675 9.09825L8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z" fill="#555555" />
                    </g>
                    <defs>
                      <clipPath id="clip0_316_4843">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>7 minutes
                </p>
              </div>
              <div className="social-icons flex items-center gap-2">
                {/* FB  */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_316_4849)">
                    <path d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z" fill="#0866FF" />
                    <path d="M16.7007 15.6672L17.3742 12H13.4545V10.703C13.4545 8.76526 14.2148 8.01982 16.1823 8.01982C16.7934 8.01982 17.2854 8.0347 17.5686 8.06446V4.74046C17.0319 4.59118 15.7201 4.44238 14.9598 4.44238C10.9498 4.44238 9.10135 6.3355 9.10135 10.4198V12H6.62695V15.6672H9.10135V23.6467C10.0297 23.8771 11.0007 24 12.0001 24C12.4921 24 12.9774 23.9697 13.454 23.9121V15.6672H16.7002H16.7007Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_4849">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Twitter  */}
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3263 0.903809H20.6998L13.3297 9.3273L22 20.7898H15.2112L9.89404 13.8378L3.80995 20.7898H0.434432L8.31744 11.7799L0 0.903809H6.96111L11.7674 7.25814L17.3263 0.903809ZM16.1423 18.7706H18.0116L5.9454 2.81694H3.93946L16.1423 18.7706Z" fill="black" />
                </svg>

                {/* Third Icon  */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37281 0 0 5.37281 0 12C0 15.3141 1.34344 18.3141 3.51469 20.4853L1.22906 22.7709C0.775312 23.2247 1.09688 24 1.73813 24H12C18.6272 24 24 18.6272 24 12C24 5.37281 18.6272 0 12 0Z" fill="#FF4500" />
                  <path d="M18.8022 14.3944C20.3498 14.3944 21.6044 13.1398 21.6044 11.5922C21.6044 10.0446 20.3498 8.79004 18.8022 8.79004C17.2546 8.79004 16 10.0446 16 11.5922C16 13.1398 17.2546 14.3944 18.8022 14.3944Z" fill="url(#paint0_radial_316_4855)" />
                  <path d="M5.19672 14.3944C6.74432 14.3944 7.99891 13.1398 7.99891 11.5922C7.99891 10.0446 6.74432 8.79004 5.19672 8.79004C3.64911 8.79004 2.39453 10.0446 2.39453 11.5922C2.39453 13.1398 3.64911 14.3944 5.19672 14.3944Z" fill="url(#paint1_radial_316_4855)" />
                  <path d="M12.0055 19.9998C16.4237 19.9998 20.0052 17.3135 20.0052 13.9998C20.0052 10.686 16.4237 7.99976 12.0055 7.99976C7.58744 7.99976 4.00586 10.686 4.00586 13.9998C4.00586 17.3135 7.58744 19.9998 12.0055 19.9998Z" fill="url(#paint2_radial_316_4855)" />
                  <path d="M9.64187 13.4165C9.59499 14.4327 8.91999 14.8021 8.1353 14.8021C7.35062 14.8021 6.75062 14.2818 6.79749 13.2655C6.84437 12.2493 7.51937 11.5762 8.30405 11.5762C9.08874 11.5762 9.68874 12.4002 9.64187 13.4165Z" fill="#842123" />
                  <path d="M17.2161 13.2646C17.263 14.2808 16.6639 14.8011 15.8783 14.8011C15.0927 14.8011 14.4177 14.4327 14.3717 13.4155C14.3248 12.3993 14.9239 11.5752 15.7095 11.5752C16.4952 11.5752 17.1702 12.2474 17.2161 13.2646Z" fill="#842123" />
                  <path d="M14.3716 13.5047C14.4156 14.4562 15.0466 14.8012 15.7816 14.8012C16.5166 14.8012 17.0772 14.2847 17.0331 13.3331C16.9891 12.3815 16.3581 11.759 15.6231 11.759C14.8881 11.759 14.3275 12.5531 14.3716 13.5047Z" fill="url(#paint3_radial_316_4855)" />
                  <path d="M9.64251 13.5047C9.59844 14.4562 8.96751 14.8012 8.23251 14.8012C7.49751 14.8012 6.93688 14.2847 6.98094 13.3331C7.02501 12.3815 7.65594 11.759 8.39094 11.759C9.12595 11.759 9.68657 12.5531 9.64251 13.5047Z" fill="url(#paint4_radial_316_4855)" />
                  <path d="M12.0071 15.48C11.0152 15.48 10.0646 15.5278 9.18519 15.615C9.03519 15.63 8.93957 15.7828 8.99769 15.9197C9.48988 17.0737 10.6514 17.8847 12.0071 17.8847C13.3627 17.8847 14.5233 17.0737 15.0164 15.9197C15.0746 15.7828 14.9799 15.63 14.8289 15.615C13.9496 15.5278 12.9989 15.48 12.0071 15.48Z" fill="#BBCFDA" />
                  <path d="M12.0056 15.7002C11.0165 15.7002 10.0687 15.7489 9.19217 15.838C9.04217 15.853 8.94748 16.0086 9.0056 16.1474C9.49685 17.3202 10.6547 18.1433 12.0047 18.1433C13.3547 18.1433 14.5134 17.3193 15.0047 16.1474C15.0628 16.0086 14.9681 15.853 14.8181 15.838C13.9415 15.7489 12.9937 15.7002 12.0047 15.7002H12.0056Z" fill="white" />
                  <path d="M12.0072 15.5859C11.0341 15.5859 10.1013 15.6338 9.23784 15.7209C9.09065 15.7359 8.9969 15.8888 9.05409 16.0256C9.5369 17.1797 10.6769 17.9906 12.0072 17.9906C13.3375 17.9906 14.4766 17.1797 14.9603 16.0256C15.0175 15.8888 14.9238 15.7359 14.7766 15.7209C13.9141 15.6338 12.9813 15.5859 12.0072 15.5859Z" fill="url(#paint5_radial_316_4855)" />
                  <path d="M16.388 7.18414C17.4846 7.18414 18.3736 6.29515 18.3736 5.19852C18.3736 4.10189 17.4846 3.21289 16.388 3.21289C15.2913 3.21289 14.4023 4.10189 14.4023 5.19852C14.4023 6.29515 15.2913 7.18414 16.388 7.18414Z" fill="url(#paint6_radial_316_4855)" />
                  <path d="M11.9791 8.25274C11.741 8.25274 11.5488 8.15337 11.5488 7.99962C11.5488 6.22024 12.9963 4.77368 14.7748 4.77368C15.0129 4.77368 15.2051 4.96681 15.2051 5.20399C15.2051 5.44118 15.012 5.63431 14.7748 5.63431C13.4707 5.63431 12.4095 6.69556 12.4095 7.99962C12.4095 8.15337 12.2163 8.25274 11.9791 8.25274Z" fill="url(#paint7_radial_316_4855)" />
                  <path d="M9.11852 13.9754C9.11852 14.3438 8.72664 14.5088 8.24383 14.5088C7.76102 14.5088 7.36914 14.3438 7.36914 13.9754C7.36914 13.607 7.76102 13.3088 8.24383 13.3088C8.72664 13.3088 9.11852 13.607 9.11852 13.9754Z" fill="#FF6101" />
                  <path d="M16.6439 13.9754C16.6439 14.3438 16.252 14.5088 15.7692 14.5088C15.2864 14.5088 14.8945 14.3438 14.8945 13.9754C14.8945 13.607 15.2864 13.3088 15.7692 13.3088C16.252 13.3088 16.6439 13.607 16.6439 13.9754Z" fill="#FF6101" />
                  <path d="M8.84836 12.9759C9.02026 12.9759 9.15961 12.8239 9.15961 12.6365C9.15961 12.4491 9.02026 12.2971 8.84836 12.2971C8.67646 12.2971 8.53711 12.4491 8.53711 12.6365C8.53711 12.8239 8.67646 12.9759 8.84836 12.9759Z" fill="#FFC49C" />
                  <path d="M16.2468 12.9759C16.4187 12.9759 16.558 12.8239 16.558 12.6365C16.558 12.4491 16.4187 12.2971 16.2468 12.2971C16.0749 12.2971 15.9355 12.4491 15.9355 12.6365C15.9355 12.8239 16.0749 12.9759 16.2468 12.9759Z" fill="#FFC49C" />
                  <defs>
                    <radialGradient id="paint0_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8445 10.0836) scale(5.61576 4.89886)">
                      <stop stop-color="#FEFFFF" />
                      <stop offset="0.4" stop-color="#FEFFFF" />
                      <stop offset="0.51" stop-color="#F9FCFC" />
                      <stop offset="0.62" stop-color="#EDF3F5" />
                      <stop offset="0.7" stop-color="#DEE9EC" />
                      <stop offset="0.72" stop-color="#D8E4E8" />
                      <stop offset="0.76" stop-color="#CCD8DF" />
                      <stop offset="0.8" stop-color="#C8D5DD" />
                      <stop offset="0.83" stop-color="#CCD6DE" />
                      <stop offset="0.85" stop-color="#D8DBE2" />
                      <stop offset="0.88" stop-color="#EDE3E9" />
                      <stop offset="0.9" stop-color="#FFEBEF" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.23908 10.0836) scale(5.61577 4.89886)">
                      <stop stop-color="#FEFFFF" />
                      <stop offset="0.4" stop-color="#FEFFFF" />
                      <stop offset="0.51" stop-color="#F9FCFC" />
                      <stop offset="0.62" stop-color="#EDF3F5" />
                      <stop offset="0.7" stop-color="#DEE9EC" />
                      <stop offset="0.72" stop-color="#D8E4E8" />
                      <stop offset="0.76" stop-color="#CCD8DF" />
                      <stop offset="0.8" stop-color="#C8D5DD" />
                      <stop offset="0.83" stop-color="#CCD6DE" />
                      <stop offset="0.85" stop-color="#D8DBE2" />
                      <stop offset="0.88" stop-color="#EDE3E9" />
                      <stop offset="0.9" stop-color="#FFEBEF" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.219 9.29781) scale(16.9394 11.8936)">
                      <stop stop-color="#FEFFFF" />
                      <stop offset="0.4" stop-color="#FEFFFF" />
                      <stop offset="0.51" stop-color="#F9FCFC" />
                      <stop offset="0.62" stop-color="#EDF3F5" />
                      <stop offset="0.7" stop-color="#DEE9EC" />
                      <stop offset="0.72" stop-color="#D8E4E8" />
                      <stop offset="0.76" stop-color="#CCD8DF" />
                      <stop offset="0.8" stop-color="#C8D5DD" />
                      <stop offset="0.83" stop-color="#CCD6DE" />
                      <stop offset="0.85" stop-color="#D8DBE2" />
                      <stop offset="0.88" stop-color="#EDE3E9" />
                      <stop offset="0.9" stop-color="#FFEBEF" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.4947 14.1535) rotate(180) scale(1.41529 2.07776)">
                      <stop stop-color="#FF6600" />
                      <stop offset="0.5" stop-color="#FF4500" />
                      <stop offset="0.7" stop-color="#FC4301" />
                      <stop offset="0.82" stop-color="#F43F07" />
                      <stop offset="0.92" stop-color="#E53812" />
                      <stop offset="1" stop-color="#D4301F" />
                    </radialGradient>
                    <radialGradient id="paint4_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.45568 14.1535) scale(1.41529 2.07776)">
                      <stop stop-color="#FF6600" />
                      <stop offset="0.5" stop-color="#FF4500" />
                      <stop offset="0.7" stop-color="#FC4301" />
                      <stop offset="0.82" stop-color="#F43F07" />
                      <stop offset="0.92" stop-color="#E53812" />
                      <stop offset="1" stop-color="#D4301F" />
                    </radialGradient>
                    <radialGradient id="paint5_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0352 18.2726) scale(4.99052 3.29162)">
                      <stop stop-color="#172E35" />
                      <stop offset="0.29" stop-color="#0E1C21" />
                      <stop offset="0.73" stop-color="#030708" />
                      <stop offset="1" />
                    </radialGradient>
                    <radialGradient id="paint6_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.4351 3.19752) scale(4.38069)">
                      <stop stop-color="#FEFFFF" />
                      <stop offset="0.4" stop-color="#FEFFFF" />
                      <stop offset="0.51" stop-color="#F9FCFC" />
                      <stop offset="0.62" stop-color="#EDF3F5" />
                      <stop offset="0.7" stop-color="#DEE9EC" />
                      <stop offset="0.72" stop-color="#D8E4E8" />
                      <stop offset="0.76" stop-color="#CCD8DF" />
                      <stop offset="0.8" stop-color="#C8D5DD" />
                      <stop offset="0.83" stop-color="#CCD6DE" />
                      <stop offset="0.85" stop-color="#D8DBE2" />
                      <stop offset="0.88" stop-color="#EDE3E9" />
                      <stop offset="0.9" stop-color="#FFEBEF" />
                    </radialGradient>
                    <radialGradient id="paint7_radial_316_4855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.6107 7.97299) scale(3.59065 3.59065)">
                      <stop offset="0.48" stop-color="#7A9299" />
                      <stop offset="0.67" stop-color="#172E35" />
                      <stop offset="0.75" />
                      <stop offset="0.82" stop-color="#172E35" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Linkedin  */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_316_4873)">
                    <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_4873">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Whatsapp  */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23.9999L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.33499 5.43799 0 11.993 0C15.174 0.000999998 18.16 1.24 20.406 3.48799C22.6509 5.73599 23.8869 8.72398 23.8859 11.902C23.8829 18.459 18.548 23.7939 11.993 23.7939C10.003 23.7929 8.04198 23.2939 6.30499 22.3459L0 23.9999ZM6.59698 20.193C8.27298 21.188 9.87298 21.7839 11.989 21.7849C17.437 21.7849 21.875 17.351 21.878 11.9C21.88 6.43798 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.44199 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.96998 9.86198 9.84598 9.96198 9.64698C10.061 9.44898 10.012 9.27498 9.93698 9.12598C9.86198 8.97798 9.26798 7.51498 9.02098 6.91998C8.77898 6.34099 8.53398 6.41898 8.35198 6.40999L7.78198 6.39999C7.58398 6.39999 7.26198 6.47398 6.98998 6.77198C6.71798 7.06998 5.94999 7.78798 5.94999 9.25098C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z" fill="#25D366" />
                </svg>


              </div>
            </div>
            <Image src={blog} className='w-full mt-3' />
            <p className="desc mt-4 text-lightBlack text-[14px] dark:text-[rgba(255,255,255,0.8)] ">
              While Bitcoin mining has come under considerable scrutiny for its environmental impact, it's essential to avoid exaggerating its hazards beyond those posed by traditional solid mineral extraction, such as gold mining. Here's why:
            </p>
            <h6 className="text-blackColor font-[500] text-[15px] mt-4 dark:text-white">Scale and Visibility:</h6>
            <p className="mt-3 text-lightBlack text-[14px] dark:text-[rgba(255,255,255,0.8)]">Bitcoin mining's environmental impact often garners attention due to its visibility in the digital asset space. However, the scale of gold mining operations globally is vast, often involving massive open-pit mines and extensive chemical processing. While Bitcoin mining's energy consumption is notable, the widespread and visible effects of gold mining on landscapes and ecosystems cannot be underestimated compared to Bitcoin’s.</p>
            <h6 className="text-blackColor font-[500] text-[15px] mt-4 dark:text-white">Historical Context:</h6>
            <p className="mt-3 text-lightBlack text-[14px] dark:text-[rgba(255,255,255,0.8)]">Gold mining has a long history of environmental degradation, spanning centuries and leaving lasting scars on landscapes and communities. In comparison, Bitcoin mining is a relatively nascent industry, and its environmental challenges are still evolving. While it's crucial to address the environmental impact of Bitcoin mining, it's equally important to contextualize it within the broader history and scale of resource extraction.</p>
            <h6 className="text-blackColor font-[500] text-[15px] mt-4 dark:text-white">Innovation and Mitigation Efforts:</h6>
            <p className="mt-3 text-lightBlack text-[14px] dark:text-[rgba(255,255,255,0.8)]">Both Bitcoin and gold mining industries are exploring innovations and mitigation strategies to reduce their environmental footprints. From the adoption of renewable energy sources in Bitcoin mining operations to the development of more sustainable mining practices in the gold industry, efforts are underway to address environmental concerns across both sectors. As technology advances, opportunities for reducing environmental impact will continue to emerge in both industries.
              While scrutiny of Bitcoin mining's environmental impact is warranted, it should not be exaggerated beyond that of solid minerals such as gold. Both industries pose environmental challenges that require attention and action. By fostering equitable scrutiny and promoting sustainability across all resource extraction sectors, we can work towards a more balanced and responsible approach to managing our planet's natural resources.</p>

            {/* POST REACTION  */}
            <h2 className="text-blackColor font-[500] text-[20px] mt-8">Post Reactions</h2>

            <div className="reaction-buttons flex gap-5 mt-4 items-center">
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.83577 35C0.83577 16.1316 16.1316 0.83577 35 0.83577C53.8684 0.83577 69.1642 16.1316 69.1642 35C69.1642 53.8684 53.8684 69.1642 35 69.1642C16.1316 69.1642 0.83577 53.8684 0.83577 35Z" fill="#D53025" stroke="#333333" stroke-width="1.67153" />
                  <path d="M21.2914 41.8226L28.1912 41.74C29.3259 41.7234 30.0601 42.913 29.5262 43.9042C28.5583 45.7133 27.2902 48.4062 26.631 51.124C26.2973 52.4952 27.3235 53.8169 28.7502 53.8169H29.084C30.3438 53.8169 31.395 53.0652 31.7788 51.95C32.5881 49.5875 34.2818 46.7293 36.1006 44.7633L37.0434 43.7142C38.2615 42.3678 38.9207 40.6165 38.904 38.8075L38.7204 23.4676C38.6954 21.0968 36.7347 19.2052 34.3402 19.2299L30.227 19.2795L27.8575 19.3043L23.6441 19.3538C21.5166 19.3786 19.7228 20.9234 19.4141 23.005L17.2699 37.2462C16.9028 39.6831 18.8134 41.8556 21.2914 41.8226Z" fill="white" />
                  <path d="M41.2738 39.1385L41.0652 21.6179C41.0485 20.2632 42.1498 19.148 43.5181 19.1315L50.0592 19.0571C51.4275 19.0406 52.5538 20.131 52.5705 21.4857L52.7791 39.0064C52.7958 40.3611 51.6945 41.4763 50.3262 41.4928L43.7851 41.5671C42.4084 41.5837 41.2904 40.4933 41.2738 39.1385ZM44.9531 22.7826C44.9615 23.8069 45.8125 24.633 46.847 24.6165C47.8816 24.6082 48.7159 23.7656 48.6993 22.7413C48.6909 21.717 47.8399 20.891 46.8053 20.9075C45.7708 20.9157 44.9448 21.7583 44.9531 22.7826Z" fill="white" />
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white">Dislike</p>
              </button>
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.1739 35C69.1739 53.8737 53.8737 69.1739 35 69.1739C16.1263 69.1739 0.826056 53.8737 0.826056 35C0.826056 16.1262 16.1263 0.826056 35 0.826056C53.8737 0.826056 69.1739 16.1262 69.1739 35Z" fill="white" stroke="#333333" stroke-width="1.65211" />
                  <path d="M43.2931 19.0909H42.4838C39.9057 19.0826 37.4278 20.0821 35.5839 21.8664C35.2585 22.1803 34.7412 22.1803 34.4158 21.8664C32.572 20.0821 30.094 19.0826 27.516 19.0909H26.7067C20.2239 19.1157 14.9844 24.3198 14.9844 30.7383C14.9844 35.2072 16.9284 39.4532 20.3241 42.3939L34.9999 55.1234L49.6757 42.3939C53.0714 39.4532 55.0154 35.199 55.0154 30.7383C55.0154 24.3115 49.7758 19.1074 43.2931 19.0909Z" fill="#D53025" />
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white">Love</p>
              </button>
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.1739 34.9999C69.1739 53.8736 53.8737 69.1737 35 69.1737C16.1263 69.1737 0.826056 53.8736 0.826056 34.9999C0.826056 16.1262 16.1263 0.826056 35 0.826056C53.8737 0.826056 69.1739 16.1262 69.1739 34.9999Z" fill="#FEDF06" stroke="#333333" stroke-width="1.65211" />
                  <path d="M45.5626 47.0184C43.1681 43.0533 39.3302 40.4678 35.0001 40.4678C30.6699 40.4678 26.832 43.0533 24.4375 47.0184" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M30.1355 29.9367C30.1355 27.1281 28.2165 24.8564 25.847 24.8564C23.4775 24.8564 21.5586 27.1281 21.5586 29.9367C21.5586 32.7453 23.4775 35.0169 25.847 35.0169C28.2165 35.0169 30.1355 32.737 30.1355 29.9367Z" fill="#3C3C3B" />
                  <path d="M20.7734 20.4446C20.7734 20.4446 23.9856 18.0325 28.0988 18.9164" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M39.8633 29.9357C39.8633 27.1271 41.7822 24.8555 44.1517 24.8555C46.5212 24.8555 48.4402 27.1271 48.4402 29.9357C48.4402 32.7443 46.5212 35.0159 44.1517 35.0159C41.7822 35.0159 39.8633 32.736 39.8633 29.9357Z" fill="#3C3C3B" />
                  <path d="M49.2238 20.4446C49.2238 20.4446 46.0117 18.0325 41.8984 18.9164" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22.7099 39.6255C21.8338 38.5103 20.7742 36.4121 20.7742 36.4121C20.7742 36.4121 19.7146 38.5103 18.8386 39.6255C17.1699 41.7402 18.6801 43.7392 20.7742 43.7392C22.8684 43.7392 24.3785 41.7402 22.7099 39.6255Z" fill="#C4E6F7" />
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white ">Sad</p>
              </button>
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.1739 35C69.1739 53.8737 53.8737 69.1739 35 69.1739C16.1263 69.1739 0.826056 53.8737 0.826056 35C0.826056 16.1262 16.1263 0.826056 35 0.826056C53.8737 0.826056 69.1739 16.1262 69.1739 35Z" fill="#FEDF06" stroke="#333333" stroke-width="1.65211" />
                  <path d="M34.9984 54.8992C39.6984 54.8992 43.5085 50.2208 43.5085 44.4496C43.5085 38.6785 39.6984 34 34.9984 34C30.2984 34 26.4883 38.6785 26.4883 44.4496C26.4883 50.2208 30.2984 54.8992 34.9984 54.8992Z" fill="#3C3C3B" />
                  <path d="M28.2746 29.6709C29.0255 27.3497 28.0994 24.9789 26.2055 24.3841C24.3116 23.7894 22.1757 25.1854 21.4248 27.5066C20.6739 29.8278 21.6 32.1986 23.4939 32.7934C25.3879 33.3881 27.5321 31.9921 28.2746 29.6709Z" fill="#3C3C3B" />
                  <path d="M20.457 18.718C20.457 18.718 23.6692 16.3059 27.7824 17.1898" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.7236 29.6709C40.9727 27.3497 41.8988 24.9789 43.7928 24.3841C45.6867 23.7894 47.8226 25.1854 48.5735 27.5066C49.3243 29.8278 48.3982 32.1986 46.5043 32.7934C44.6104 33.3881 42.4745 31.9921 41.7236 29.6709Z" fill="#3C3C3B" />
                  <path d="M49.5422 18.718C49.5422 18.718 46.33 16.3059 42.2168 17.1898" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white">Wow</p>
              </button>
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.1739 35C69.1739 53.8737 53.8738 69.1739 35 69.1739C16.1263 69.1739 0.826056 53.8737 0.826056 35C0.826056 16.1262 16.1263 0.826056 35 0.826056C53.8738 0.826056 69.1739 16.1262 69.1739 35Z" fill="url(#paint0_linear_206_7985)" stroke="#333333" stroke-width="1.65211" />
                  <path d="M25.0879 39.707H44.9198" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.9323 25.6143C19.7154 27.5555 20.6165 29.3398 22.2184 29.8437C23.9621 30.3971 25.9061 29.2406 26.7905 27.2333C24.5045 26.6881 22.2184 26.1595 19.9323 25.6143Z" fill="#3C3C3B" />
                  <path d="M16.9121 25.6387L24.0539 27.2082L30.2447 28.5712" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M50.0672 25.6143C50.2841 27.5555 49.383 29.3398 47.7811 29.8437C46.0374 30.3971 44.0934 29.2406 43.209 27.2333C45.495 26.6881 47.7811 26.1595 50.0672 25.6143Z" fill="#3C3C3B" />
                  <path d="M53.0968 25.6387L45.9549 27.2082L39.7559 28.5712" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_206_7985" x1="35.0017" y1="-8.46286" x2="35.0017" y2="68.5246" gradientUnits="userSpaceOnUse">
                      <stop offset="0.106" stop-color="#E74717" />
                      <stop offset="0.9432" stop-color="#FEDF06" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white">Angry</p>
              </button>
              <button className='relative '>
                <div className="absolute rounded-full text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-blue text-white top-[-5px] right-0">56</div>
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.1739 35C69.1739 53.8737 53.8737 69.1739 35 69.1739C16.1262 69.1739 0.826056 53.8737 0.826056 35C0.826056 16.1262 16.1262 0.826056 35 0.826056C53.8737 0.826056 69.1739 16.1262 69.1739 35Z" fill="#FEDF06" stroke="#333333" stroke-width="1.65211" />
                  <path d="M53.7473 34.7031C56.2419 34.7031 58.0774 37.0326 57.4434 39.4199C55.0405 48.457 45.9046 55.1811 34.9916 55.1811C24.0786 55.1811 14.9428 48.457 12.5399 39.4199C11.9058 37.0326 13.7497 34.7031 16.236 34.7031H53.7473Z" fill="#3C3C3B" />
                  <path d="M16.0605 46.3418C20.2238 51.6781 27.1404 55.1806 34.9998 55.1806C42.8591 55.1806 49.784 51.6781 53.939 46.3418C53.939 46.3418 49.4002 39.2129 34.9998 39.2129C20.5993 39.2129 16.0605 46.3418 16.0605 46.3418Z" fill="#D53025" />
                  <path d="M25.7398 26.0702L16.2285 22.543" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M25.7398 26.2021L16.2285 29.7294" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.2617 26.0702L53.773 22.543" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.2617 26.2021L53.773 29.7294" stroke="#3C3C3B" stroke-width="3.05393" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-lightBlack text-[12px] dark:text-white">Funny</p>
              </button>
            </div>

            {/* COMMENTS SECTION  */}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className='gap-3' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {[...Array(comments)].map((_, index) => (
                  <div className='flex-1'>
                    <Comment key={index} />
                  </div>// Render comments based on commentsToShow state
                ))}
              </div>
              <button className='border-blue border-[1px] text-blue rounded-md mt-3 px-3 py-1' onClick={loadMoreComments}>Load More</button>
            </div>

            {/* FORM */}
            <div className="form mt-8">
              <div className="inputFields gap-5 flex items-center">
                <input className='flex-1 outline-none border-[#dddddd] text-lightBlack border-[1px] py-3 px-4 rounded-[8px] dark:bg-transparent' type="text" placeholder='Name' />
                <input className='flex-1 outline-none border-[#dddddd] text-lightBlack border-[1px] py-3 px-4 rounded-[8px] dark:bg-transparent' type="email" placeholder='Email' />
              </div>
              <div className="textarea relative mt-3 border-[#dddddd] text-lightBlack border-[1px] py-3 px-4 rounded-[8px]">
                <textarea className='w-full h-full outline-none dark:bg-transparent' name="" id="" placeholder='Add Comment'></textarea>
                <button className="bg-blue text-white text-right px-3 py-1 block rounded-[8px] ml-auto">Post</button>
              </div>
            </div>

          </div>
          <div className=" w-[25%]">
            <Image src={akion} />
            <Image src={ad} className='mt-5' />
            <h2 className="text-blackColor mt-8 font-[500] text-[20px] dark:text-white">Related Posts</h2>
            <div className="post-card mt-3">
              <div className="post-banner relative">
                <Image className='w-full' src={post} />
                <p className="absolute bg-[#14C885] rounded-[4px] top-2 left-2 text-white text-[10px] px-2 py-1">Cryptocurrency</p>
              </div>
              <h4 className="mt-4 text-blackColor font-[500] text-[14px] dark:text-white">From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch</h4>
              <p className="mt-1 text-lightBlack text-[12px] font-semibold dark:text-[rgba(255,255,255,0.8)]">Aug 23, 2023</p>
            </div>

            <div className="post-card mt-3">
              <div className="post-banner relative">
                <Image className='w-full' src={post} />
                <p className="absolute bg-[#14C885] rounded-[4px] top-2 left-2 text-white text-[10px] px-2 py-1">Cryptocurrency</p>
              </div>
              <h4 className="mt-4 text-blackColor font-[500] text-[14px] dark:text-white">From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch</h4>
              <p className="mt-1 text-lightBlack text-[12px] font-semibold dark:text-[rgba(255,255,255,0.8)]">Aug 23, 2023</p>
            </div>

            <div className="post-card mt-3">
              <div className="post-banner relative">
                <Image className='w-full' src={post} />
                <p className="absolute bg-[#14C885] rounded-[4px] top-2 left-2 text-white text-[10px] px-2 py-1">Cryptocurrency</p>
              </div>
              <h4 className="mt-4 text-blackColor font-[500] text-[14px] dark:text-white">From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch</h4>
              <p className="mt-1 text-lightBlack text-[12px] font-semibold dark:text-[rgba(255,255,255,0.8)]">Aug 23, 2023</p>
            </div>


          </div>
        </div>
      </div>

    </div >

  );
}

export default Article;
