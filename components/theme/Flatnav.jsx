import React from 'react'
import Link from 'next/link'
const Flatnav = ({ catList }) => {
  return (
    <nav className="z-10 mt-3 w-full mb-8 py-2 border-t border-b text-base bg-headtwo">
      <div className="flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-base text-white uppercase mt-0 px-6 py-0">
          {
            catList.map(catItem => (
              <>
                <Link key={catItem._id} href={`/category/${catItem.title}`} >
                  <a className="hover:underline py-1 px-4 mx-2">{catItem.title}</a>
                </Link>
              </>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Flatnav