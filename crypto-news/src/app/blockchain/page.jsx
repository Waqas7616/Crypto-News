"use client";
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import BlockchainCard from '../components/blockchainCard/BlockchainCard';

function page() {
    return (
        <div>
            <Navbar />
            <div className='w-11/12 m-auto mt-5 flex gap-4'>
                <div className='w-3/4'>
                    <h2 className="title text-blackColor font-[500] text-[20px]">BlockChain</h2>
                    <p className="text-lightBlack text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
                    <BlockchainCard />
                </div>
                <div className="bg-red w-1/4">
                    waqas
                </div>
            </div>
        </div>
    )
}

export default page
