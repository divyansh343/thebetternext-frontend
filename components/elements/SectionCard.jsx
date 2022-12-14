import React from 'react'

const SectionCard = () => {
    return (
        <>
            <div className="w-full bg-center bg-cover h-[32rem]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80)' }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 style={{
                            fontFamily: 'Sniglet',

                        }} className="text-3xl font-semibold text-white uppercase lg:text-[45px] tracking-wide	 "><span className="text-[#FFE51F] leading-tight tracking-wider text-opacity-90">Varanasi: City of Lights</span></h1>
                        {/* <h1 className="text-2xl my-6 font-semibold text-white uppercase lg:text-3xl">Aim to show Better world </h1> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCard