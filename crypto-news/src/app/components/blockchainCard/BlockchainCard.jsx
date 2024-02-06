import Image from 'next/image'
import React from 'react'
import blockchain from '@/app/images/blockchain.svg'
import profile from '@/app/images/profile.png'
function BlockchainCard() {
    return (
        <div>
            <div className='flex gap-2 mt-3'>
                <div className="image">
                    <Image className='w-full' src={blockchain} alt='blockchain image' />
                </div>
                <div className="text-section">
                    <p className="text-red text-[12px]">Press Release</p>
                    <h6 className='text-blackColor text-[14px] font-[500]'>AOFverse Secure $3 Million in Private Funding Round Led by Animoca...</h6>
                    <p className='text-lightBlack text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>


                    <div className="flex items-center justify-between mt-1">
                        <div className="profile flex gap-1">
                            <div className="image">
                                <Image className='w-full object-cover' src={profile} alt='profile image' />
                            </div>
                            <div className="profile-info">
                                <p className="text-blackColor font-[500] text-[10px]">Sara Ali</p>
                                <p className="text-lightBlack text-[10px]">Jan 27,2020 at 6:00am</p>
                            </div>
                        </div>
                        <div className="view-info flex justify-between">
                            <p className="flex items-center gap-1">
                                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4038 8.80875C16.7422 7.09743 15.5936 5.61747 14.1001 4.5518C12.6065 3.48612 10.8335 2.88145 9 2.8125C7.16655 2.88145 5.39347 3.48612 3.89993 4.5518C2.40639 5.61747 1.25785 7.09743 0.596255 8.80875C0.551574 8.93234 0.551574 9.06766 0.596255 9.19125C1.25785 10.9026 2.40639 12.3825 3.89993 13.4482C5.39347 14.5139 7.16655 15.1186 9 15.1875C10.8335 15.1186 12.6065 14.5139 14.1001 13.4482C15.5936 12.3825 16.7422 10.9026 17.4038 9.19125C17.4484 9.06766 17.4484 8.93234 17.4038 8.80875ZM9 14.0625C6.01875 14.0625 2.86875 11.8519 1.72688 9C2.86875 6.14812 6.01875 3.9375 9 3.9375C11.9813 3.9375 15.1313 6.14812 16.2731 9C15.1313 11.8519 11.9813 14.0625 9 14.0625Z" fill="#555555" />
                                    <path d="M9 5.625C8.33249 5.625 7.67997 5.82294 7.12495 6.19379C6.56994 6.56464 6.13735 7.09174 5.88191 7.70844C5.62646 8.32514 5.55963 9.00374 5.68985 9.65843C5.82008 10.3131 6.14151 10.9145 6.61352 11.3865C7.08552 11.8585 7.68689 12.1799 8.34157 12.3102C8.99626 12.4404 9.67486 12.3735 10.2916 12.1181C10.9083 11.8626 11.4354 11.4301 11.8062 10.875C12.1771 10.32 12.375 9.66751 12.375 9C12.375 8.10489 12.0194 7.24645 11.3865 6.61351C10.7536 5.98058 9.89511 5.625 9 5.625ZM9 11.25C8.55499 11.25 8.11998 11.118 7.74997 10.8708C7.37996 10.6236 7.09157 10.2722 6.92127 9.86104C6.75098 9.4499 6.70642 8.9975 6.79323 8.56105C6.88005 8.12459 7.09434 7.72368 7.40901 7.40901C7.72368 7.09434 8.12459 6.88005 8.56105 6.79323C8.99751 6.70642 9.4499 6.75097 9.86104 6.92127C10.2722 7.09157 10.6236 7.37996 10.8708 7.74997C11.118 8.11998 11.25 8.55499 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25Z" fill="#555555" />
                                </svg>900
                            </p>
                            <p className="flex items-center gap-1">
                                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00005 15.75C10.4722 15.7497 11.904 15.268 13.077 14.3785C14.2501 13.489 15.1002 12.2403 15.4978 10.8228C15.8953 9.40531 15.8186 7.89669 15.2792 6.52687C14.7398 5.15704 13.7673 4.00113 12.51 3.23527C11.2527 2.46941 9.77946 2.1356 8.31483 2.28472C6.8502 2.43384 5.47449 3.05771 4.39733 4.06125C3.32017 5.0648 2.60063 6.39298 2.34837 7.84341C2.09611 9.29384 2.32496 10.787 3.00005 12.0953L2.25005 15.75L5.9048 15C6.8318 15.4793 7.8848 15.75 9.00005 15.75Z" stroke="#555555" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.625 9H5.6325V9.0075H5.625V9ZM9 9H9.0075V9.0075H9V9ZM12.375 9H12.3825V9.0075H12.375V9Z" stroke="#555555" stroke-width="1.6875" stroke-linejoin="round" />
                                </svg>45
                            </p>
                            <p className="flex items-center gap-1">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_316_4843)">
                                        <path d="M9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5ZM9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3ZM9 4.5C9.1837 4.50002 9.361 4.56747 9.49828 4.68954C9.63556 4.81161 9.72326 4.97981 9.74475 5.16225L9.75 5.25V8.6895L11.7802 10.7198C11.9148 10.8547 11.9929 11.0358 11.9987 11.2263C12.0045 11.4167 11.9376 11.6023 11.8116 11.7452C11.6855 11.8881 11.5098 11.9777 11.3201 11.9958C11.1305 12.0139 10.941 11.9591 10.7902 11.8425L10.7198 11.7802L8.46975 9.53025C8.35318 9.41358 8.27832 9.26175 8.25675 9.09825L8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z" fill="#555555" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_316_4843">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>7 minutes
                            </p>
                        </div>
                        <div className="social-icons flex items-center gap-2">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlockchainCard
