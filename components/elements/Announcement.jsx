import React from 'react'

const Announcement = () => {
    return (
        <>
            {/* <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}

            <div className="px-4 py-3 bg-stone-200">
                <div className="flex items-center justify-center max-w-3xl mx-auto">
                    <button
                        className="hidden sm:block sm:rounded sm:transition sm:text-gray-700 hover:text-gray-500 swiper-prev-button"
                        aria-label="Previous Slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div className="swiper">
                        <ul className="swiper-wrapper">
                            {/* <li className="swiper-slide">
                                <p className="text-sm font-medium text-center">
                                    Love Alpine JS? Check out this new course!

                                    <a className="underline" href="/alpinejs"> Learn More &rarr; </a>
                                </p>
                            </li> */}

                            <li className="swiper-slide">
                                <p className="text-sm font-medium text-center">
                                    Love Tailwind CSS? Check out this new course!

                                    <a className="underline" href="/alpinejs"> Learn More &rarr; </a>
                                </p>
                            </li>

                            {/* <li className="swiper-slide">
                                <p className="text-sm font-medium text-center">
                                    Love Laravel? Check out this new course!

                                    <a className="underline" href="/alpinejs"> Learn More &rarr; </a>
                                </p>
                            </li> */}
                        </ul>
                    </div>

                    {/* <button
                        className="hidden sm:block sm:rounded sm:transition sm:text-gray-700 hover:text-gray-500 swiper-next-button"
                        aria-label="Next Slide"
                    > */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg> */}
                </div>
            </div>

            {/* <script>
                new Swiper('.swiper', {
                    effect: 'fade',
                loop: true,
                autoplay: {
                    delay: 5000,
    },
                fadeEffect: {
                    crossFade: true,
    },
                navigation: {
                    prevEl: '.swiper-prev-button',
                nextEl: '.swiper-next-button',
    },
  })
            </script> */}

        </>
    )
}

export default Announcement