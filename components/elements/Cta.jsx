import React from 'react'

const Cta = () => {
    return (
        <>
            {/* <!--
            This component uses @tailwindcss/forms

            yarn add @tailwindcss/forms
            npm install @tailwindcss/forms

            plugins: [require('@tailwindcss/forms')]
--> */}

            <aside className="bg-gray-50">
                <div className="px-6 mb-4 md:p-12 lg:px-16 lg:py-24">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-base text-primary md:text-3xl">
                        Get your daily dose of uplifting stories, into your inbox.
                        </h2>

                        {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
                            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
                            consequuntur exercitationem incidunt tempora nisi?
                        </p> */}
                    </div>

                    <div className="max-w-xl mx-auto mt-8">
                        <form action="#" className="sm:gap-4 sm:flex">
                            <div className="sm:flex-1 mb-2">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full p-2 text-gray-700 transition bg-white border-gray-200 rounded-md shadow-sm focus:ring focus:outline-none focus:ring-primary focus:border-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center w-full px-5 py-2 text-white transition rounded-md bg-primary sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-primary"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>

                                <svg
                                    className="w-5 h-5 ml-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Cta