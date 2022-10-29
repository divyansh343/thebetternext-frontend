import React from 'react'

const SectionCard = () => {
    return (
        <>
            <div className="w-full bg-center bg-cover h-[32rem]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80)' }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">We believe in <span className="text-yellow-500 underline">Tech, development and sustainability.</span></h1>
                        <h1 className="text-2xl my-6 font-semibold text-white uppercase lg:text-3xl">Aim to show Better world </h1>
                        {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCard