import Link from 'next/link'
import { useEffect } from 'react';
import client from '../../client';
const Header = () => {

  return (
    <div className="relative w-full pb-12 ">
      <header>
        <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
        <nav className="fixed z-10 w-full border-b bg-headcol bg-opacity-100 backdrop-blur navbar peer-checked:navbar-active md: lg: lg:bg-headcol md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">

                <Link href="/">
                  <a aria-label="Company" title="Company" className="inline-flex items-center mr-8">
                    <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span className="ml-2 text- font-bold tracking-wide text-gray-800 uppercase">Glu</span>
                  </a>
                </Link>

                <label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                  <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                  <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                <div className="text-[#000000] lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link href="/">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>Home</span>
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/category">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>Explore</span>
                        </a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/category/In-Depth">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>In Depth</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/analytics">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>Analytics</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/innovation">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>Innovation</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        <a className="block md:px-4 transition text-lg hover:text-sky-700">
                          <span>Careers</span>
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/careers">
                        <div className='border-[1px] rounded-[4px] px-1 py-1 -mt-1 cursor-pointer bg-headtwo hover:bg-green-900'>
                          <a className="block md:px-4 transition text-lg text-white">
                            <span>Write for us</span>
                          </a>
                        </div>
                      </Link>
                    </li> */}


                  </ul>
                </div>

                <div className="w-full space-y-2 border-sky-600 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  {/* <div className='border-[1px] bg-red-400 rounded-[8px]'>
                    <Link href="/category/analytics">
                      <a className="block md:px-4 transition py-1.5 px-5 hover:text-sky-700">
                        <span>Write for us</span>
                      </a>
                    </Link>
                  </div> */}

                  {/*<button type="button" title="Start buying" className="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max">
                    <span className="block text-sky-900 font-semibold lg:text-sm">
                      Login
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        {/* <div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
                    <div className="md:flex md:gap-12 pt-40 lg:py-56">
                        <div className="md:w-6/12">
                            <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">Build in your way but with our experts <span className="text-sky-500">Support.</span></h1>
                            <p className="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                            <div className="md:-mr-32">
                                <form action="" className="w-full mt-12">
                                    <div className="relative flex items-center p-1 rounded-full bg-white border border-sky-200 shadow-md md:p-2">
                                        <div className="pl-6 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <input placeholder="Your mail address" className="w-full p-4 rounded-full placeholder-gray-600" type="email" />
                                        <button type="button" title="Start buying" className="ml-auto py-3 px-4 rounded-full text-center transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 md:px-8">
                                            <span className="hidden w-max text-sky-900 font-semibold md:block">
                                                Get Started
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-sky-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
                            <img src="images/job_hunt.svg" alt="" />
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  )
}

export default Header