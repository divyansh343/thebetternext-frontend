import React from 'react'
import Hero from '../homepage/HeroComponent'

const SectionCard = ({ heroData }) => {
    return (
        <>
            <Hero />
        </>
        // <>
        //     <div className="w-full bg-center bg-cover h-[32rem]"
        //         style={{
        //             backgroundImage: imgurl,
        //             marginTop: '-70px',
        //             fontSize: '50px',
        //             backgroundSize: 'cover',
        //             backgroundRepeat: 'no-repeat',
        //         }}>
        //         <div className="flex items-center justify-center mt-[60px] w-full h-full ">
        //             <div className="text-center ">

        //                 <div className="text-3xl font-semibold text-yellow-500 uppercase lg:text-[45px] tracking-wide	 ">
        //                     <div className='bg-headtwo bg-opacity-80 shadow mx-2 px-4'>
        //                     <p className={` ${hero.txtcol ? "" : "text-white"} font-[sniglet] leading-tight drop-shadow tracking-wider text-opacity-90`}>We Aim to show a Better world </p>

        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default SectionCard