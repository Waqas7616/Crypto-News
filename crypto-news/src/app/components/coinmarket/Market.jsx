"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import coin from "../../images/Cryptocurrency.png";
import down from "../../images/down.png";

function Market() {
  const coinData = [
    {
      id: 1,
      name: "Cryptodex",
      image: coin,
      price: "$2",
      last_change: "-0.3%",
      status: "featured",
      volume: "0 F2k",
      marketCap: "$3.5M`",
      type: "sell",
    },
    {
      id: 2,
      name: "Cryptodex",
      image: coin,
      price: "$20",
      last_change: "10.3%",
      type: "undefined",
      volume: "1,108,033,152 FLY",
      marketCap: "$13.5M`",
    },
    {
      id: 3,
      name: "Cryptodex",
      image: coin,
      price: "$299",
      last_change: "-10.8%",
      type: "sell",
      volume: "84 NDAU",
      marketCap: "$13.8M`",
    },
    {
      id: 4,
      name: "Cryptodex",
      image: coin,
      price: "$972",
      last_change: "18.12%",
      status: "featured",
      volume: "0 F2k",
      marketCap: "$923.5M`",
    },
    {
      id: 5,
      name: "Cryptodex",
      image: coin,
      price: "$432",
      last_change: "-40.33%",

      volume: "84 NDAU",
      marketCap: "$32.65M`",
    },
  ];
  return (
    <div>
      <div class=" overflow-x-auto mt-5 ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#0b0b0b] dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Market
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((coin) => (
              <tr
                key={coin.id}
                class="bg-white border-b dark:bg-[#0b0b0b] dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className=" gap-3">
                    <p className="text-[16px] text-[#323232]">124123119</p>

                    <p className="text-[#6D6D6D] text-[12px]">124118904</p>
                  </div>
                </th>
                <td class="px-6 py-4 text-[16px] whitespace-nowrap text-[#333333]">
                  Lorem Ipsum
                </td>
                <td class="px-6 py-4 text-[#323232] text-[16px]">
                  {coin.type === "sell" ? (
                    <div className="bg-[#B82F2F]  flex items-center justify-center gap-2 px-2 py-[2px] whitespace-nowrap rounded-[6px] w-[100px]">
                      <Image src={down} alt="arrow" />
                      <p className="desc text-white  text-[12px]">SELL BTC</p>
                    </div>
                  ) : (
                    `${coin.type}`
                  )}
                </td>
                <td class="px-6 py-4 text-[#323232] text-[16px]">$45181251</td>
                <td class="px-6 py-4 text-[16px] text-[#333333]">1652165</td>
                <td class="px-6 py-4 text-[16px] text-[#333333]">$16.52M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Market;
