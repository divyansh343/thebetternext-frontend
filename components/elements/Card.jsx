import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import client from '../../client';

import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
const Card = ({mainImage,title,slug,cat}) => {
  return (
    <>
      <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-white relative">

        {mainImage &&
          <Image
            key={slug.current}
            width={280}
            height={300}
            className="w-full"
            src={builder.image(mainImage)
              .url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
            alt={title} />
        }

        <div className="badge absolute top-0 right-0 bg-primary m-1 text-white p-1 px-2 text-xs font-bold rounded">10:53</div>
        <div className="desc p-4 text-gray-800">
          <Link href={`/category/${cat || "recommended"}/${slug.current}`}>
            <a className="title font-bold text-primary block cursor-pointer hover:underline">{title}</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card;