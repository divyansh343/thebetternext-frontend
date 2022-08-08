import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Hero from '../components/homepage/hero'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'
import Link from 'next/link'

import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Home({ allPosts }) {
  return (
    <>
      <Hero />

      {/* Card wrapper */}

      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Editor&apos;s pick</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          allPosts.map((post) => (
            <>

              <div key={post._id} className="each mb-10 m-2 shadow-lg border-gray-800 bg-white relative">

                {post.mainImage &&
                  <Image
                    key={post.slug.current}
                    width={280}
                    height={300}
                    className="w-full"
                    src={builder.image(post.mainImage)
                      .url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
                    alt={post.title} />
                }

                <div className="badge absolute top-0 right-0 bg-primary m-1 text-white p-1 px-2 text-xs font-bold rounded">10:53</div>
                <div className="desc p-4 text-gray-800">
                  <Link href={`/category/sports/${post.slug.current}`}>
                    <a className="title font-bold text-primary block cursor-pointer hover:underline">{post.title}</a>
                  </Link>
                </div>
              </div>
            </>
          ))
        }
      </div>



      {/* Card wrapper */}

      {/* extra cards */}
      {/* <section className="px-4 py-24 mx-auto max-w-7xl">
        <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>
        <div className="w-full xl:w-4/6">

          <div className="flex flex-col space-y-16">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <Image
                height={700}
                width={1200}
                src="https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div className="col-span-1 md:col-span-3">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                  <a href="#" className="text-gray-900 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                  Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <a href="#" className="btn btn-light btn-sm">Read More</a>
              </div>
            </div>
            
          </div>


          <div className="pt-10 mt-10 border-t border-gray-200">
            <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
          </div>
        </div>
      </section> */}
      {/* extra cards */}

      <Carousel />
    </>
  )

}

export async function getServerSideProps() {
  const query = `*[_type == "post"][0...10]`
  const allPosts = await client.fetch(query)

  return {
    props: { allPosts }, // will be passed to the page component as props
  }
}

