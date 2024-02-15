import Image from 'next/image'
import React from 'react'
import logo from '@/app/images/Logo.svg'
import otherLogo from "@/app/images/whitelogo.svg";
function Footer(props) {
    return (
        <div className='mt-5 w-full bg-[#eeeeee] dark:bg-[#212121]'>
            <div className='w-11/12 3xl:w-[30%] m-auto flex  flex-col gap-5 md:flex-row justify-between items-center py-5 '>
                <div className="logo flex flex-col gap-3 flex-1">
                    <Image src={props.logo} alt='logo' />
                    <p className="desc text-blackColor dark:text-white">lorem Ipsum About Company </p>
                </div>
                <div className="links flex flex-col md:flex-row justify-between flex-1">
                    <div className="flex flex-col gap-3 w-full md:w-1/3 items-center md:items-start">
                        <h6 className="title uppercase text-blackColor dark:text-white text-[14px]">info</h6>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">Lorem</a>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">Lorem</a>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">Lorem Ipsum</a>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">Lorem Ipsum</a>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-1/3 items-center md:items-start">
                        <h6 className="title uppercase text-blackColor dark:text-white text-[14px]">about</h6>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">About Us</a>
                        <a href="#" className="desc text-blackColor text-[12px] dark:text-white">Privacy Policy</a>

                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-1/3 items-center md:items-start">
                        <h6 className="title uppercase text-blackColor dark:text-white text-[14px]">contact us</h6>
                        <p className="desc text-blackColor text-[12px] dark:text-white">Address, street no.1 </p>
                        <p className="desc text-blackColor text-[12px] dark:text-white">=12 12729 47489</p>
                        <p className="desc text-blackColor text-[12px] dark:text-white">hello@logoipsum.com</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
