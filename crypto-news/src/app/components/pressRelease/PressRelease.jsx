import React from 'react'
import PressCard from './PressCard'

function PressRelease() {


    return (
        <>
            <h2 className='text-blackColor text-[24px] font-[500] dark:text-blue'>
                Sponsored Press Releases
            </h2>
            <div className='w-full flex gap-5 overflow-x-scroll press-release'>

                <PressCard />
                <PressCard />
                <PressCard />
                <PressCard />
                <PressCard />
                <PressCard />
                <PressCard />
                <PressCard />
            </div>
        </>
    )
}

export default PressRelease
