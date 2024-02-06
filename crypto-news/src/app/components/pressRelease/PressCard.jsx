"use client";
import Image from 'next/image'
import React from 'react'
import binance from '@/app/images/binance.svg'

function PressCard() {
  return (
    <div className='w-[400px] h-[150px]'>
      <div className='flex gap-2 w-[400px] h-[150px] items-center'>
        <div className="image w-[110px] h-[90px] rounded-lg overflow-hidden">
          <Image className='w-full h-full object-cover' src={binance} alt='coin logo' />
        </div>
        <div className="coin-detail flex flex-col gap-1">
          <p className="text-red text-[12px]">Press Release</p>
          <h6 className='text-blackColor text-[14px] font-[500]'>AOFverse Secure $3 Million in Private Funding Round Led by Animoca...</h6>
          <div className="flex justify-between items-center">
            <p className='text-lightBlack text-[10px]'>Aug 23, 2024</p>
            <p className='text-lightBlack text-[10px]'>374 views / 0 likes</p>
            <p className='text-lightBlack text-[10px]'>7 mnt read time</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PressCard