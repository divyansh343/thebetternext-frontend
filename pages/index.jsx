import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Hero from '../components/homepage/hero'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'
import Link from 'next/link'

import imageUrlBuilder from '@sanity/image-url'
import LongCard from '../components/elements/LongCard'
import SectionCard from '../components/elements/SectionCard'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Home({ allPosts, heroData }) {

  return (
    <>
      <Head>
        <title>theglu.in</title>
        <meta name="description" content="theglu.in is an independent magazine we aim to deliver on developmenr jobs and sustainability." />
      </Head>
      <SectionCard heroData={heroData} />
      {/* <Hero /> */}
      

      {/* Card wrapper */}
      <div className="mx-10 heading font-bold text-4xl m-5 my-10 text-primary">Latest Post&apos;s</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          allPosts.map((post) => (
            <>
              <Card key={post.title} cat="recommended" {...post} />
            </>
          ))
        }
      </div>
      <Carousel />
    </>
  )

}

export async function getServerSideProps() {


  const query = `*[_type == "post"][0...12]{
    ...,
    categories[]->
  }`

  const allPosts = await client.fetch(query)

  const heroquery = `*[_type == "hero"]{
   ...,
  }`
  const heroData = await client.fetch(heroquery)

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
    props: { allPosts, heroData }, // will be passed to the page component as props
  }
}

