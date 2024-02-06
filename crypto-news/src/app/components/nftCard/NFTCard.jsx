"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import img1 from '@/app/images/nft1.svg'
import img2 from '@/app/images/nft2.svg'
import img3 from '@/app/images/nft3.svg'
import img4 from '@/app/images/nft4.svg'
import img5 from '@/app/images/nft5.svg'
import img6 from '@/app/images/nft6.svg'
import img7 from '@/app/images/nft7.svg'
import img8 from '@/app/images/nft8.svg'
import Button from '../button/Button';

function NFTCard() {
    const dataToDisplay = 8;
    const [display, setDisplay] = useState(dataToDisplay);

    const handleLoadMore = () => {
        setDisplay(prev => prev + 4)
    }
    const data = [
        {
            id: 1,
            title: 'NFT/Metaverse',
            image: img1,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 2,
            title: 'NFT/Metaverse',
            image: img2,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 3,
            title: 'NFT/Metaverse',
            image: img3,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 4,
            title: 'NFT/Metaverse',
            image: img4,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 5,
            title: 'NFT/Metaverse',
            image: img5,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 6,
            title: 'NFT/Metaverse',
            image: img6,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 7,
            title: 'NFT/Metaverse',
            image: img7,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 8,
            title: 'NFT/Metaverse',
            image: img8,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 9,
            title: 'NFT/Metaverse',
            image: img1,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
        {
            id: 10,
            title: 'NFT/Metaverse',
            image: img2,
            desc1: 'From Shiba Inu to BabyDoge, Top 5 Altcoins Under $0.0001 to Watch',
            desc2: 'Here are Top 7 Altcoins Under $0.05 to Watch',
            desc3: 'Donald Trump NFT Series Records 3,213% 24H Surge in Sales Amid Launch of Third Series “Mugshot”'
        },
    ]
    return (
        <div>
            <div className='flex flex-wrap gap-3 items-center'>
                {data.slice(0, display).map((nft) => (
                    <div className='w-[22%]' key={nft.id}>
                        <h3>{nft.title}</h3>
                        <hr />
                        <div className="preview-image">
                            <Image className='w-full object-cover' src={nft.image} alt='blogImage' />
                        </div>
                        <p>{nft.desc1}</p>
                        <hr />
                        <p>{nft.desc2}</p>
                        <hr />
                        <p>{nft.desc3}</p>
                    </div>
                ))}
            </div>
            <Button onclick={handleLoadMore} text='Load more' />
        </div>
    )
}

export default NFTCard
