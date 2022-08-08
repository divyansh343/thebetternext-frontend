import React from 'react'
import Link from 'next/link'
const Flatnav = () => {
  return (
    <nav className="z-10 mt-1 w-full mb-8 py-2 border-t border-b text-base bg-white">
      <div className="block sm:hidden">
        <a
          href="#"
          className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
        >
          Topics <i className="fas ml-2"></i>
        </a>
      </div>
      <div className="flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm uppercase mt-0 px-6 py-0">
          <Link href="/category/health" >
            <a className="hover:underline py-1 px-4 mx-2">Health</a>
          </Link>
          <Link href="/category/lifestyle" >
            <a className="hover:underline py-1 px-4 mx-2">Lifestyle</a>
          </Link>
          <a href="#" className="hover:underline py-1 px-4 mx-2">Automotive</a>
          <a href="#" className="hover:underline py-1 px-4 mx-2">Finance</a>
          <a href="#" className="hover:underline py-1 px-4 mx-2">Politics</a>
          <a href="#" className="hover:underline py-1 px-4 mx-2">Culture</a>
          <a href="#" className="hover:underline py-1 px-4 mx-2">Sports</a>
        </div>
      </div>
    </nav>
  )
}

export default Flatnav