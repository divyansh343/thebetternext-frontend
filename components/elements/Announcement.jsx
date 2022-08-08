import React from 'react'

const Announcement = ({text}) => {
    return (
        <>
            {/* <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}

            <div className="px-4 py-2 bg-stone-200">
                <div className="flex items-center justify-center max-w-3xl mx-auto">
                    <div className="swiper">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide">
                                <p className="text-sm font-medium text-center">
                                    {text} 

                                    <a className="text-red-900 mx-2 border-b border-black hover:text-black " href=""> thesocialcharts.com &rarr; </a>
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