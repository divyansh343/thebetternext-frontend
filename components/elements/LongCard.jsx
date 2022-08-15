import Image from 'next/image'
import React from 'react'
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

const LongCard = ({ mainImage, title, slug, cat, publishedAt, description, }) => {
    return (
        <>
            <div className="flex flex-col space-y-16 mt-3">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                    {mainImage &&
                        <Image
                            height={700}
                            width={1200}
                            src={builder.image(mainImage)
                                .url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
                            className="object-cover w-full h-40 col-span-1 bg-center" alt={title} loading="lazy" />
                    }

                    <div className="col-span-1 md:col-span-3">
                        <Link href={`/category/${cat}/${slug.current}`}>
                            <a >
                                <h2 className="mb-2 text-xl font-bold leading-snug text-gray-800">
                                    <a href="#" className="text-gray-900 hover:text-purple-700">{title}</a>
                                </h2>
                            </a>
                        </Link>
                        {description && 
                        <p className="mb-3 text-sm font-normal text-gray-500">
                            {description}
                        </p>
                        }
                        <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{new Date(publishedAt).toDateString()}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LongCard