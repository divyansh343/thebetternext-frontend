import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
function truncate(str, n) {
  return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};
const Card = ({ mainImage, title, slug, cat, publishedAt }) => {
  return (
    <>
      <div className="each mb-5 m-2 shadow-lg border-gray-800 bg-white relative">

        {mainImage &&
          <Image
            key={slug.current}
            width={1200}
            height={720}
            className="w-full"
            src={builder.image(mainImage)
              .url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
            alt={title} />
        }
        {/* {publishedAt && 
        <div className="badge absolute top-0 right-0 bg-primary m-1 text-white p-1 px-2 text-xs rounded">{new Date(publishedAt).toDateString()}</div>
  } */}
        <div className="desc px-2 py-2 text-gray-800">
          <Link href={`/category/${cat}/${slug.current}`}>
            <a className=" text-base text-black block cursor-pointer px-1 hover:underline">{
              truncate(title, 77)
            }</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card;