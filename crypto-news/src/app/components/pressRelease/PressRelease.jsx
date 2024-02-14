import React from 'react'
import PressCard from './PressCard'

function PressRelease() {


    return (
        <>
            <h2 className='text-blackColor text-[24px] title dark:text-blue mt-12'>
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
