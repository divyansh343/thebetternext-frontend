import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const Card = (props) => {
  return (
    <>
      <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-white relative">
        <Link href="/category/[categoryid]" as={`/category/${props.slug.current}`}>
          <a >
            {/* <Image
              width={280}
              height={300}
              className="w-full"
              src={urlFor(`${props.mainIMage}`).width(200).url() || `https://images.unsplash.com/photo-1659193043863-070b9468d1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8X2hiLWRsNFEtNFV8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60`}
              alt=""
            /> */}
            <Image width={280} height={300} className="w-full" src="https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />

            <div className="badge absolute top-0 right-0 bg-primary m-1 text-white p-1 px-2 text-xs font-bold rounded">10:53</div>
            <div className="desc p-4 text-gray-800">

              <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" className="title font-bold text-primary block cursor-pointer hover:underline">{props.title}</a>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default Card;