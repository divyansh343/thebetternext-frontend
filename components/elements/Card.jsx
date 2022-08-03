import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-white relative">
            <Image width={280} height={300} className="w-full" src="https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
            <div className="badge absolute top-0 right-0 bg-primary m-1 text-white p-1 px-2 text-xs font-bold rounded">10:53</div>
            <div className="desc p-4 text-gray-800">
              {/* <a href="https://www.youtube.com/user/sam14319" target="_new" className=" mx-1 badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">india</a>
              <a href="https://www.youtube.com/user/sam14319" target="_new" className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">india</a> */}
              <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" className="title font-bold text-primary block cursor-pointer hover:underline">Pubg Mobile Custom Room (Unlimited)</a>
            </div>
          </div>
        </>
    )
}

export default Card;