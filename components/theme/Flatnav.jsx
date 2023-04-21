import React from 'react'
import Link from 'next/link'
const Flatnav = ({ catList }) => {
  return (
    <>
      <nav x-data="{ isOpen: false }" className="relative bg-col-mol shadow ">
        <div className="container px-6 py-1 mx-auto">
          <div className=" mb-3 mt-5 lg:my-3  mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">

          {
            catList.map(catItem => (
              <>
                <Link key={catItem._id} href={`/category/${catItem.title}`} >

                  <a className="mx-4 text-md leading-5 font-medium text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-headcol tracking-wide dark:hover:text-blue-400 hover:underline md:my-0" href="#">{catItem.title}</a>

                </Link>
              </>
            ))
          }
          </div>
        </div>
      </nav>
    </>
    // <nav className="z-10 mt-3 w-full mb-8 py-2 border-t border-b text-base bg-headtwo">
    //   <div className="flex-grow sm:flex sm:items-center sm:w-auto">
    //     <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-base text-white uppercase mt-0 px-6 py-0">
    //       {
    //         catList.map(catItem => (
    //           <>
    //             <Link key={catItem._id} href={`/category/${catItem.title}`} >
    //               <a className="hover:underline py-1 px-4 mx-2">{catItem.title}</a>
    //             </Link>
    //           </>
    //         ))
    //       }
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Flatnav