import React from 'react'

const SectionCard = ({ heroData }) => {
    const hero = heroData[0]
    const imgurl = `url( "https://images.unsplash.com/photo-1495055154266-57bbdeada43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`
    console.log(hero);
    return (
        <>
            <div className="w-full bg-center bg-cover h-[32rem]"
                style={{
                    backgroundImage: imgurl,
                    marginTop: '-70px',
                    fontSize: '50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="flex items-center justify-center mt-[60px] w-full h-full ">
                    <div className="text-center ">

                        <div className="text-3xl font-semibold text-yellow-500 uppercase lg:text-[45px] tracking-wide	 ">
                            <div className='bg-headtwo bg-opacity-80 shadow mx-2 px-4'>
                            <p className={` ${hero.txtcol ? "" : "text-white"} font-[sniglet] leading-tight drop-shadow tracking-wider text-opacity-90`}>We Aim to show a Better world </p>
                                
                            </div>
                        </div>
                        {/* <h1 className="text-2xl my-6 font-semibold text-white uppercase lg:text-3xl">Aim to show Better world </h1> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCard