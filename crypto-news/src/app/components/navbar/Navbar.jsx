"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/images/Logo.svg'
import otherLogo from '@/app/images/whitelogo.svg'
import Button from '../button/Button';

function Navbar({ isNightMode, toggleMode }) {
    const coinData = [
        {
            id: 1,
            name: 'BitCoin',
            abb: 'BTC',
            price: '$89327',
            change: '-2.03%'
        },
        {
            id: 2,
            name: 'Ethereum',
            abb: 'ETH',
            price: '$9327',
            change: '2.03%'
        },
        {
            id: 3,
            name: 'Tether',
            abb: 'USDT',
            price: '$1327',
            change: '3.23%'
        },
        {
            id: 4,
            name: 'BNB',
            abb: 'BNB',
            price: '$327',
            change: '-7.99%'
        },
        {
            id: 5,
            name: 'Solana',
            abb: 'SOL',
            price: '$7',
            change: '1.00%'
        },
        {
            id: 6,
            name: 'XRP',
            abb: 'XRP',
            price: '$27',
            change: '-12.03%'
        }
    ]
    // const [coinData, setCoinData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false&locale=en', {
    //                 headers: {
    //                     'Content-Type': 'application/json; charset=utf-8'
    //                 },
    //             });
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`)
    //             }
    //             const result = await response.json();
    //             setCoinData(result);
    //         }
    //         catch (error) {
    //             console.log('The error for coin data is:', error.message);
    //         }
    //     }

    //     fetchData();
    //     console.log('waqas your data is:', coinData)
    // }, [])


    return (
        <div className="navbar ">
            <div className='w-11/12 m-auto mb-2 flex justify-between items-center'>
                <div className="coins flex items-center gap-2">
                    {
                        coinData.map((coin) => (
                            <div className="flex gap-1 items-center" key={coin.id}>
                                <h4 className='text-[15px] text-[#333333] dark:text-white'>{coin.abb}</h4>
                                <p className='text-[12px] text-[#333333] dark:text-white'>Price: <span className='text-[#2196F3]'>{coin.price}</span></p>
                                <p className='text-[12px] text-[#E04957]'>({coin.change})</p>
                            </div>
                        ))
                    }

                </div>
                <div className="nightToggle flex items-center">
                    <div className="languages">

                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-[transparent]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white" type="button">English <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <button onClick={toggleMode}>{isNightMode ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" stroke-width="2" />
                        <path d="M12 5V3M12 21V19M16.95 7.05L18.364 5.636M5.636 18.364L7.05 16.95M19 12H21M3 12H5M16.95 16.95L18.364 18.364M5.636 5.636L7.05 7.05" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0576 20C9.83495 20 7.94595 19.2224 6.39062 17.667C4.83528 16.111 4.05762 14.222 4.05762 12C4.05762 9.97471 4.71762 8.21805 6.03762 6.73005C7.35895 5.24338 8.99362 4.36571 10.9416 4.09705C10.9956 4.09705 11.0486 4.09905 11.1006 4.10305C11.1526 4.10705 11.2036 4.11271 11.2536 4.12005C10.9163 4.59071 10.6493 5.11405 10.4526 5.69005C10.256 6.26671 10.1576 6.87038 10.1576 7.50105C10.1576 9.27905 10.7796 10.79 12.0236 12.034C13.2683 13.2787 14.7796 13.901 16.5576 13.901C17.1923 13.901 17.7966 13.8027 18.3706 13.606C18.9453 13.4094 19.4613 13.1424 19.9186 12.805C19.9266 12.855 19.9326 12.906 19.9366 12.958C19.9399 13.01 19.9416 13.0627 19.9416 13.116C19.6856 15.0647 18.8139 16.6994 17.3266 18.02C15.8393 19.3407 14.0836 20.0007 12.0576 20Z" fill="#333333" />
                    </svg>}</button>

                </div>
            </div>
            <hr className='dark:text-blue' />
            <div className="m-auto my-2 flex items-center justify-between w-11/12 ">
                <div className="logo">
                    <Image src={isNightMode ? otherLogo : logo} alt='logo' />
                </div>
                <div className="menu flex items-center justify-between gap-3">
                    <ul className='flex items-center gap-3'>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href="/">Home</Link></li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/blockchain'>Blockchain</Link></li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/coins'>Cryptocurrency</Link></li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/article'>NFTs</Link></li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>Resources</li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>Developers</li>
                        <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>More</li>
                    </ul>
                    <Button text='Sign in' />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbar
