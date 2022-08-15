import React from 'react'

const Announcement = ({text}) => {
    return (
        <>
            {/* <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}

            <div className="px-4 py-1 bg-black">
                <div className="flex items-center justify-center max-w-3xl mx-auto">
                    <div className="swiper">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide">
                                <p className="text-sm text-white font-medium text-center">
                                    {text} 

                                    <a className="text-white mx-2 hover:underline " href=""> Write for us &rarr; </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announcement