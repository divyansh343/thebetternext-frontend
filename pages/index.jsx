import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Hero from '../components/homepage/hero'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'
import Link from 'next/link'

import imageUrlBuilder from '@sanity/image-url'
import LongCard from '../components/elements/LongCard'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Home({ allPosts,freshPosts }) {
  console.log(allPosts);
  console.log(freshPosts);
  return (
    <>
      <Hero />

      {/* Card wrapper */}
      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Editor&apos;s pick</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          allPosts.map((post) => (
            <>
              <Card key={post.title} cat="recommended" {...post} />
            </>
          ))
        }
      </div>
      {/* Card wrapper */}


      {/* extra cards */}
      <section className="px-4 py-20 mx-auto max-w-5xl">
        <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>

        <div className="w-full xl:w-4/6 ">

          {/* {
            freshPosts.map(fpost => (
              <>
                <LongCard  key={fpost._id} {...fpost} />
              </>
            ))
          } */}


          <div className="pt-10 mt-10 border-t border-gray-200">
            {/* <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a> */}
          </div>
        </div>

      </section>
      {/* extra cards */}

      {/* sits */}
      {/* <div
        className="relative bg-stone-50"
        style={{
          // backgroundImage: 'url("https://images.unsplash.com/photo-1659794958036-259a0bb14f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="bg-gray-900 bg-opacity-70">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-white text-2xl font-bold text-shadow-black">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>American
                  </h2>
                </div>
                <div id="post-carousel" className="splide post-carousel">
                  <div className="splide__track">
                    <ul className="splide__list">

                      <li className="splide__slide">
                        <div className="w-full pb-3">
                          <div className="hover-img bg-white">
                            <a href="">
                            </a>
                            <div className="py-3 px-6">
                              <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                              </h3>
                              <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* sits */}
      <Carousel />
    </>
  )

}

export async function getServerSideProps() {


  const query = `*[_type == "post"][0...8]{
    ...,
    categories[]->
  }`

  const allPosts = await client.fetch(query)
  
  // const freshQuery = `*[ _type == "post" && !(post in path("drafts.**"))]`
  // const freshPosts = await client.fetch(freshQuery)

  // const authorquery = `*[_type == '${allPosts.author}']{
  //   name,
  //   bio,
  //   "authorImage": image.asset->url,
  //   "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
  //     title,
  //     "slug": slug.current,
  //   }
  //   }`
  // const authorposts = await client.fetch(authorquery)
  // console.log(authorposts);



  return {
    props: { allPosts}, // will be passed to the page component as props
  }
}

