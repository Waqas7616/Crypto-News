"use client";
import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import Image from 'next/image';
import coin from '../images/Cryptocurrency.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
function Coins() {
    const [tabs, setTabs] = useState(0)
    const [featured, setFeatured] = useState(false)
    console.log('feature', featured)
    const coinData = [
        {
            id: 1,
            name: 'Cryptodex',
            image: coin,
            price: '$2',
            last_change: '-0.3%',
            status: 'featured',
            volume: '0 F2k',
            marketCap: '$3.5M`'
        },
        {
            id: 2,
            name: 'Cryptodex',
            image: coin,
            price: '$20',
            last_change: '10.3%',

            volume: '1,108,033,152 FLY',
            marketCap: '$13.5M`'
        },
        {
            id: 3,
            name: 'Cryptodex',
            image: coin,
            price: '$299',
            last_change: '-10.8%',

            volume: '84 NDAU',
            marketCap: '$13.8M`'
        },
        {
            id: 4,
            name: 'Cryptodex',
            image: coin,
            price: '$972',
            last_change: '18.12%',
            status: 'featured',
            volume: '0 F2k',
            marketCap: '$923.5M`'
        },
        {
            id: 5,
            name: 'Cryptodex',
            image: coin,
            price: '$432',
            last_change: '-40.33%',

            volume: '84 NDAU',
            marketCap: '$32.65M`'
        },
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
        <div>

            <div className='w-11/12 m-auto 3xl:w-[30%]'>
                <div className="flex justify-between items-center w-[60%] my-5">
                    <h2 className='mt-3 text-blackColor font-[500] text-[20px] dark:text-white'>{tabs === 0 ? 'Top Fallers' : tabs === 1 ? 'Top Gainers' : 'All Coins'}</h2>
                    {tabs === 2 &&

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value={featured} onChange={() => setFeatured(!featured)} className="sr-only peer" />
                            <div className="w-11 h-4 bg-[#2196F34D]   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[2px] after:bg-blue after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-blue ">Featured</span>
                        </label>
                    }
                </div>
                <div className="tabs flex items-center  mt-3 mb-8">
                    <div className={tabs === 0 ? "tab pr-3 relative active" : "tab pr-3 relative"} onClick={() => setTabs(0)}>
                        <h5 className={tabs === 0 ? "text-blue font-[500] text-[17px] cursor-pointer" : "text-blackColor font-[500] text-[17px] cursor-pointer dark:text-white"}>Top Fallers</h5>
                    </div>
                    <div className={tabs === 1 ? "tab pr-3 relative active" : "tab pr-3 relative"} onClick={() => setTabs(1)}>
                        <h5 className={tabs === 1 ? "text-blue font-[500] text-[17px] cursor-pointer" : "text-blackColor font-[500] text-[17px] cursor-pointer dark:text-white"}>Top Gainers</h5>
                    </div>
                    <div className={tabs === 2 ? "tab pr-3 relative active" : "tab pr-3 relative"} onClick={() => setTabs(2)}>
                        <h5 className={tabs === 2 ? "text-blue font-[500] text-[17px] cursor-pointer" : "text-blackColor font-[500] text-[17px] cursor-pointer dark:text-white"}>All Coins</h5>
                    </div>
                </div>
                <div className="tab-content">
                    <div className={tabs === 0 ? "content1 block" : "content1 hidden"}>


                        <div className=" overflow-x-auto mt-5 ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#0b0b0b] dark:text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Cryptocurrency
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            24h % Change
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            24h Total Volume
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Market Cap
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            24h Performance
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coinData.map((coin) => (
                                        <tr key={coin.id} className="bg-white border-b dark:bg-[#0b0b0b] dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center gap-3">
                                                    <p className='text-[14px] text-white'>{coin.id}</p>
                                                    <Image src={coin.image} alt='coin' />
                                                    <p className="text-blue">{coin.name}</p>
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                {coin.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.last_change}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.volume}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.marketCap}
                                            </td>
                                            <td className="px-6 py-4">
                                                <svg width="114" height="34" viewBox="0 0 114 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L2.54954 2.9902C4.09907 4.9804 7.19815 8.9608 10.2972 8.494C13.3963 8.02721 16.4954 3.11321 19.5944 2.31402C22.6935 1.51484 25.7926 4.83046 28.8917 7.34952C31.9907 9.86858 35.0898 11.5911 38.1889 13.4785C41.288 15.3659 44.387 17.4182 47.4861 14.808C50.5852 12.1977 53.6843 4.92494 56.7833 2.2445C59.8824 -0.435943 62.9815 1.47595 66.0805 7.78672C69.1796 14.0975 72.2787 24.8071 75.3778 25.0152C78.4768 25.2232 81.5759 14.9296 84.675 13.6672C87.7741 12.4048 90.8731 20.1736 93.9722 25.6827C97.0713 31.1917 100.17 34.4409 103.269 32.3714C106.369 30.302 109.468 22.9139 111.017 19.2199L112.567 15.5259" stroke="#EC635F" strokeWidth="2" />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className={tabs === 1 ? "content1 block" : "content1 hidden"}><div className="relative overflow-x-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Cryptocurrency
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h % Change
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h Total Volume
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Market Cap
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h Performance
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {coinData.map((coin) => (
                                    <tr key={coin.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center gap-3">
                                                <p>{coin.id}</p>
                                                <Image src={coin.image} alt='coin' />
                                                <p className="text-blue">{coin.name}</p>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {coin.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {coin.last_change}
                                        </td>
                                        <td className="px-6 py-4">
                                            {coin.volume}
                                        </td>
                                        <td className="px-6 py-4">
                                            {coin.marketCap}
                                        </td>
                                        <td className="px-6 py-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="34" viewBox="0 0 114 34" fill="none">
                                                <path d="M1 33L2.54954 29.2771C4.09907 25.5543 7.19815 18.1085 10.2972 13.7535C13.3963 9.39839 16.4954 8.13397 19.5944 9.44838C22.6935 10.7628 25.7926 14.6561 28.8917 16.7593C31.9907 18.8625 35.0898 19.1757 38.1889 20.3083C41.288 21.441 44.387 23.3931 47.4861 24.2587C50.5852 25.1243 53.6843 24.9035 56.7833 23.6811C59.8824 22.4586 62.9815 20.2345 66.0805 17.4825C69.1796 14.7306 72.2787 11.4508 75.3778 7.92823C78.4768 4.40565 81.5759 0.640232 84.675 1.83948C87.7741 3.03872 90.8731 9.20263 93.9722 9.44176C97.0713 9.6809 100.17 3.99526 103.269 1.97144C106.369 -0.0523794 109.468 1.58562 111.017 2.40461L112.567 3.22361" stroke="#74E293" strokeWidth="2" />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div></div>
                    <div className={tabs === 2 ? "content1 block" : "content1 hidden"}><div className="relative overflow-x-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Cryptocurrency
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h % Change
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h Total Volume
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Market Cap
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        24h Performance
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!featured ?
                                    coinData.map((coin) => (
                                        <tr key={coin.id} className={coin.status === 'featured' ? "bg-[#2196F34D] border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center gap-3">
                                                    <p>{coin.id}</p>
                                                    <Image src={coin.image} alt='coin' />
                                                    <Link href={
                                                        `/coindetail`}>
                                                        <p className="text-blue" >{coin.name}</p></Link>
                                                    {coin.status === 'featured' &&
                                                        <div className='bg-blue px-2 py-[2px] rounded-[6px]'><p className="desc text-white text-[12px]">Featured</p></div>
                                                    }

                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                {coin.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.last_change}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.volume}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.marketCap}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.last_change > '0' ? <svg xmlns="http://www.w3.org/2000/svg" width="114" height="34" viewBox="0 0 114 34" fill="none">
                                                    <path d="M1 33L2.54954 29.2771C4.09907 25.5543 7.19815 18.1085 10.2972 13.7535C13.3963 9.39839 16.4954 8.13397 19.5944 9.44838C22.6935 10.7628 25.7926 14.6561 28.8917 16.7593C31.9907 18.8625 35.0898 19.1757 38.1889 20.3083C41.288 21.441 44.387 23.3931 47.4861 24.2587C50.5852 25.1243 53.6843 24.9035 56.7833 23.6811C59.8824 22.4586 62.9815 20.2345 66.0805 17.4825C69.1796 14.7306 72.2787 11.4508 75.3778 7.92823C78.4768 4.40565 81.5759 0.640232 84.675 1.83948C87.7741 3.03872 90.8731 9.20263 93.9722 9.44176C97.0713 9.6809 100.17 3.99526 103.269 1.97144C106.369 -0.0523794 109.468 1.58562 111.017 2.40461L112.567 3.22361" stroke="#74E293" strokeWidth="2" />
                                                </svg> : <svg width="114" height="34" viewBox="0 0 114 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L2.54954 2.9902C4.09907 4.9804 7.19815 8.9608 10.2972 8.494C13.3963 8.02721 16.4954 3.11321 19.5944 2.31402C22.6935 1.51484 25.7926 4.83046 28.8917 7.34952C31.9907 9.86858 35.0898 11.5911 38.1889 13.4785C41.288 15.3659 44.387 17.4182 47.4861 14.808C50.5852 12.1977 53.6843 4.92494 56.7833 2.2445C59.8824 -0.435943 62.9815 1.47595 66.0805 7.78672C69.1796 14.0975 72.2787 24.8071 75.3778 25.0152C78.4768 25.2232 81.5759 14.9296 84.675 13.6672C87.7741 12.4048 90.8731 20.1736 93.9722 25.6827C97.0713 31.1917 100.17 34.4409 103.269 32.3714C106.369 30.302 109.468 22.9139 111.017 19.2199L112.567 15.5259" stroke="#EC635F" strokeWidth="2" />
                                                </svg>}

                                            </td>
                                        </tr>
                                    )) : coinData.filter((item) => item.status === 'featured').map((coin) => (
                                        <tr key={coin.id} className={coin.status === 'featured' ? "bg-[#2196F34D] border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center gap-3">
                                                    <p>{coin.id}</p>
                                                    <Image src={coin.image} alt='coin' />
                                                    <Link href={
                                                        `/coindetail`}>
                                                        <p className="text-blue" >{coin.name}</p></Link>
                                                    {coin.status === 'featured' &&
                                                        <div className='bg-blue px-2 py-[2px] rounded-[6px]'><p className="desc text-white text-[12px]">Featured</p></div>
                                                    }

                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                {coin.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.last_change}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.volume}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.marketCap}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin.last_change > '0' ? <svg xmlns="http://www.w3.org/2000/svg" width="114" height="34" viewBox="0 0 114 34" fill="none">
                                                    <path d="M1 33L2.54954 29.2771C4.09907 25.5543 7.19815 18.1085 10.2972 13.7535C13.3963 9.39839 16.4954 8.13397 19.5944 9.44838C22.6935 10.7628 25.7926 14.6561 28.8917 16.7593C31.9907 18.8625 35.0898 19.1757 38.1889 20.3083C41.288 21.441 44.387 23.3931 47.4861 24.2587C50.5852 25.1243 53.6843 24.9035 56.7833 23.6811C59.8824 22.4586 62.9815 20.2345 66.0805 17.4825C69.1796 14.7306 72.2787 11.4508 75.3778 7.92823C78.4768 4.40565 81.5759 0.640232 84.675 1.83948C87.7741 3.03872 90.8731 9.20263 93.9722 9.44176C97.0713 9.6809 100.17 3.99526 103.269 1.97144C106.369 -0.0523794 109.468 1.58562 111.017 2.40461L112.567 3.22361" stroke="#74E293" strokeWidth="2" />
                                                </svg> : <svg width="114" height="34" viewBox="0 0 114 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L2.54954 2.9902C4.09907 4.9804 7.19815 8.9608 10.2972 8.494C13.3963 8.02721 16.4954 3.11321 19.5944 2.31402C22.6935 1.51484 25.7926 4.83046 28.8917 7.34952C31.9907 9.86858 35.0898 11.5911 38.1889 13.4785C41.288 15.3659 44.387 17.4182 47.4861 14.808C50.5852 12.1977 53.6843 4.92494 56.7833 2.2445C59.8824 -0.435943 62.9815 1.47595 66.0805 7.78672C69.1796 14.0975 72.2787 24.8071 75.3778 25.0152C78.4768 25.2232 81.5759 14.9296 84.675 13.6672C87.7741 12.4048 90.8731 20.1736 93.9722 25.6827C97.0713 31.1917 100.17 34.4409 103.269 32.3714C106.369 30.302 109.468 22.9139 111.017 19.2199L112.567 15.5259" stroke="#EC635F" strokeWidth="2" />
                                                </svg>}
                                            </td>
                                        </tr>
                                    ))}


                            </tbody>
                        </table>
                    </div></div>
                </div>
            </div>
        </div>
    )
}

export default Coins
