import React from 'react'

const SectionCard = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-headtwo to-green-900 overflow-x-hidden overflow-y-hidden">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="w-4/5">
                        <h1 className="mt-32 text-white text-6xl font-bold">We believe that <br /><span className="text-blue-400">Tech, development and sustainability.</span></h1>
                        <h1 className=" text-white text-6xl font-bold">Areas to focus to make world better.</h1>
                    </div>
                    <div className="w-5/6 my-10 ml-6">
                        <h3 className="text-gray-300">
                            {/*  We aim to provide the latest news and information on these topics so that people can stay informed and make informed decisions. */}
                            We aim to provide the latest news and information <br />
                            <strong className="text-white">on these topics so that people can stay informed</strong>
                            <br />and make informed decisions.
                        </h3>
                    </div>
                    <div className="hidden sm:block opacity-50 z-0">
                        <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
                        <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
                        <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCard