"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/images/Logo.svg'
import otherLogo from '@/app/images/whitelogo.svg'
import Button from '../button/Button';

function MobileMenu({ isNightMode, toggleMode }) {
    const [toggle, setToggle] = useState(false);
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
    return (
        <div className='mob-nav relative block md:hidden'>
            <div className='w-11/12 m-auto mb-2 flex justify-between items-center'>
                <div className="logo">
                    <Image src={isNightMode ? otherLogo : logo} alt='logo' />
                </div>
                <div className="nightBtn flex gap-1 items-center">
                    <div className="search flex items-center gap-4 bg-transparent  dark:text-white py-2 px-1 rounded-md">
                        <input type="text" placeholder="Search" className="bg-[transparent] outline-none dark:text-white" />
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5002 21L17.1572 16.657M17.1572 16.657C17.9001 15.9141 18.4894 15.0321 18.8914 14.0615C19.2935 13.0909 19.5004 12.0506 19.5004 11C19.5004 9.94936 19.2935 8.90905 18.8914 7.93842C18.4894 6.96779 17.9001 6.08585 17.1572 5.34296C16.4143 4.60007 15.5324 4.01078 14.5618 3.60874C13.5911 3.20669 12.5508 2.99976 11.5002 2.99976C10.4496 2.99976 9.40929 3.20669 8.43866 3.60874C7.46803 4.01078 6.58609 4.60007 5.84321 5.34296C4.34288 6.84329 3.5 8.87818 3.5 11C3.5 13.1217 4.34288 15.1566 5.84321 16.657C7.34354 18.1573 9.37842 19.0002 11.5002 19.0002C13.622 19.0002 15.6569 18.1573 17.1572 16.657Z" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <button onClick={toggleMode}>{isNightMode ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" stroke-width="2" />
                        <path d="M12 5V3M12 21V19M16.95 7.05L18.364 5.636M5.636 18.364L7.05 16.95M19 12H21M3 12H5M16.95 16.95L18.364 18.364M5.636 5.636L7.05 7.05" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0576 20C9.83495 20 7.94595 19.2224 6.39062 17.667C4.83528 16.111 4.05762 14.222 4.05762 12C4.05762 9.97471 4.71762 8.21805 6.03762 6.73005C7.35895 5.24338 8.99362 4.36571 10.9416 4.09705C10.9956 4.09705 11.0486 4.09905 11.1006 4.10305C11.1526 4.10705 11.2036 4.11271 11.2536 4.12005C10.9163 4.59071 10.6493 5.11405 10.4526 5.69005C10.256 6.26671 10.1576 6.87038 10.1576 7.50105C10.1576 9.27905 10.7796 10.79 12.0236 12.034C13.2683 13.2787 14.7796 13.901 16.5576 13.901C17.1923 13.901 17.7966 13.8027 18.3706 13.606C18.9453 13.4094 19.4613 13.1424 19.9186 12.805C19.9266 12.855 19.9326 12.906 19.9366 12.958C19.9399 13.01 19.9416 13.0627 19.9416 13.116C19.6856 15.0647 18.8139 16.6994 17.3266 18.02C15.8393 19.3407 14.0836 20.0007 12.0576 20Z" fill="#333333" />
                    </svg>}</button>

                    <div className="hamburger">
                        <button onClick={() => setToggle(!toggle)}>{isNightMode ? <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 13C0.75 12.8011 0.829018 12.6103 0.96967 12.4697C1.11032 12.329 1.30109 12.25 1.5 12.25H16.5C16.6989 12.25 16.8897 12.329 17.0303 12.4697C17.171 12.6103 17.25 12.8011 17.25 13C17.25 13.1989 17.171 13.3897 17.0303 13.5303C16.8897 13.671 16.6989 13.75 16.5 13.75H1.5C1.30109 13.75 1.11032 13.671 0.96967 13.5303C0.829018 13.3897 0.75 13.1989 0.75 13ZM0.75 7C0.75 6.80109 0.829018 6.61032 0.96967 6.46967C1.11032 6.32902 1.30109 6.25 1.5 6.25H16.5C16.6989 6.25 16.8897 6.32902 17.0303 6.46967C17.171 6.61032 17.25 6.80109 17.25 7C17.25 7.19891 17.171 7.38968 17.0303 7.53033C16.8897 7.67098 16.6989 7.75 16.5 7.75H1.5C1.30109 7.75 1.11032 7.67098 0.96967 7.53033C0.829018 7.38968 0.75 7.19891 0.75 7ZM0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H16.5C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1C17.25 1.19891 17.171 1.38968 17.0303 1.53033C16.8897 1.67098 16.6989 1.75 16.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1Z" fill="white" />
                        </svg> : <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 13C0.75 12.8011 0.829018 12.6103 0.96967 12.4697C1.11032 12.329 1.30109 12.25 1.5 12.25H16.5C16.6989 12.25 16.8897 12.329 17.0303 12.4697C17.171 12.6103 17.25 12.8011 17.25 13C17.25 13.1989 17.171 13.3897 17.0303 13.5303C16.8897 13.671 16.6989 13.75 16.5 13.75H1.5C1.30109 13.75 1.11032 13.671 0.96967 13.5303C0.829018 13.3897 0.75 13.1989 0.75 13ZM0.75 7C0.75 6.80109 0.829018 6.61032 0.96967 6.46967C1.11032 6.32902 1.30109 6.25 1.5 6.25H16.5C16.6989 6.25 16.8897 6.32902 17.0303 6.46967C17.171 6.61032 17.25 6.80109 17.25 7C17.25 7.19891 17.171 7.38968 17.0303 7.53033C16.8897 7.67098 16.6989 7.75 16.5 7.75H1.5C1.30109 7.75 1.11032 7.67098 0.96967 7.53033C0.829018 7.38968 0.75 7.19891 0.75 7ZM0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H16.5C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1C17.25 1.19891 17.171 1.38968 17.0303 1.53033C16.8897 1.67098 16.6989 1.75 16.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1Z" fill="#323232" />
                        </svg>}</button>
                    </div>
                </div>
            </div>

            <div className="coins flex items-center gap-3 w-11/12 m-auto mt-5">
                {
                    coinData.slice(0, 2).map((coin) => (
                        <div className="flex gap-1 items-center" key={coin.id}>
                            <h4 className='text-[15px] text-[#333333] dark:text-white'>{coin.abb}</h4>
                            <p className='text-[12px] text-[#333333] dark:text-white'>Price: <span className='text-[#2196F3]'>{coin.price}</span></p>
                            <p className='text-[12px] text-[#E04957]'>({coin.change})</p>
                        </div>
                    ))
                }

            </div>
            <h3 className="w-11/12 m-auto flex items-center flex-wrap gap-[3px] text-lightBlack dark:text-white">Sponsored: <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 4H23.5V16H5.5V4ZM14.5 7C15.2956 7 16.0587 7.31607 16.6213 7.87868C17.1839 8.44129 17.5 9.20435 17.5 10C17.5 10.7956 17.1839 11.5587 16.6213 12.1213C16.0587 12.6839 15.2956 13 14.5 13C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7ZM9.5 6C9.5 6.53043 9.28929 7.03914 8.91421 7.41421C8.53914 7.78929 8.03043 8 7.5 8V12C8.03043 12 8.53914 12.2107 8.91421 12.5858C9.28929 12.9609 9.5 13.4696 9.5 14H19.5C19.5 13.4696 19.7107 12.9609 20.0858 12.5858C20.4609 12.2107 20.9696 12 21.5 12V8C20.9696 8 20.4609 7.78929 20.0858 7.41421C19.7107 7.03914 19.5 6.53043 19.5 6H9.5ZM1.5 8H3.5V18H19.5V20H1.5V8Z" fill="#2196F3" />
            </svg></span>Traders are buying <span className="font-[500]">Meme Kombat.</span> <span className="text-blue">Can This Stake to Earn Meme Coin with Utility Explode?</span> </h3>

            {toggle &&
                <div className='w-[100vw] h-[100vh] absolute top-0 left-0 bg-white dark:bg-black '>
                    <div className='flex flex-col gap-3 w-10/12 relative'>
                        <ul className='flex flex-col items-center gap-3'>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href="/">Home</Link></li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/blockchain'>Blockchain</Link></li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/coins'>Cryptocurrency</Link></li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'><Link href='/article'>NFTs</Link></li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>Resources</li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>Developers</li>
                            <li className='text-blackColor tex-[24px] font-[500] dark:text-white'>More</li>
                        </ul>
                        <Button text='Sign in' />
                        <button onClick={() => setToggle(false)} className='absolute top-3 right-2 dark:text-white'>close</button>
                    </div>

                </div>
            }
        </div>
    )
}

export default MobileMenu
