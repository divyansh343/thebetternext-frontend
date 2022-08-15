import React from 'react'

const SectionCard = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-primary to-green-900 overflow-x-hidden overflow-y-hidden">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="w-4/5">
                        <h1 className="mt-32 text-white text-6xl font-bold">The fastest, most secure dev environment <br /><span className="text-blue-400">on the planet.</span></h1>
                    </div>
                    <div className="w-5/6 my-10 ml-6">
                        <h3 className="text-gray-300">
                            Create, edit & deploy fullstack apps with <br />
                            <strong className="text-white">faster package installations & greater security</strong>
                            <br />than even local environments.
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