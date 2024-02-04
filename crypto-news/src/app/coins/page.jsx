"use client";
import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';

function Coins() {
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
            <Navbar />

        </div>
    )
}

export default Coins
