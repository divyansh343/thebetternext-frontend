import Image from 'next/image'
import React from 'react'
import fireImg from '../../images/fire.png'

import dhoniImg from '../../images/kohli.png'
const HeroComponent = () => {
	return (
		<div className=''>
			<section className="pt-12  mx-auto w-10/12 lg:h-screen ">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
						<div className="self-center lg:col-span-5 pt-5">
							<h1 className="text-3xl font-bold text-blue-700 sm:text-4xl lg:text-6xl">#Cricket Connection..</h1>
							<p className="mt-5 text-xl font-normal leading-7 text-red-600">#CSK 🔥 #SRH #IPL</p>
							{/* <div className="relative inline-flex mt-9 group">
								<div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

								<a
									href="#"
									title=""
									className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
									role="button"
								>
									Read Exclusive Blog
								</a>
							</div> */}
						</div>

						<div className="self-end lg:col-span-6">
							<Image height={1000} width={1000} className="w-full mx-auto" src={dhoniImg} alt="" />
						</div>
					</div>
				</div>
			</section>
		</div >

	)
}
<section className="bg-gray-50">
	<div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
		<div className="max-w-xl mx-auto text-center">
			<h1 className="text-3xl font-extrabold sm:text-5xl">
				Understand User Flow.
				<strong className="font-extrabold text-primary sm:block">
					Increase Conversion.
				</strong>
			</h1>

			<p className="mt-4 sm:leading-relaxed sm:text-xl">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
			</p>

			<div className="flex flex-wrap justify-center gap-4 mt-8">
				<a className="block w-full px-12 py-3 text-sm font-medium text-white bg-primary rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring" href="/get-started">
					Get Started
				</a>

				<a className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring" href="/about">
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

export default HeroComponent