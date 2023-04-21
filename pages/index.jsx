import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'
import fireImg from '../images/fire.png'
import imageUrlBuilder from '@sanity/image-url'
import HeroComponent from '../components/homepage/HeroComponent'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Home({ allPosts, heroData }) {

  return (
    <div data-theme="light" >
      <Head>
        <title>theglu.in</title>
        <meta name="description" content="theglu.in is an independent magazine we aim to deliver on developmenr jobs and sustainability." />
      </Head>
      <HeroComponent />
      {/* <SectionCard heroData={heroData} /> */}
      {/* <Hero /> */}


      {/* Card wrapper */}
      <div className="ml-12 lg:ml-28 heading font-bold text-4xl my-10 text-primary"> <span className='inline-block'>
        <Image src={fireImg} height={50} width={50} alt='' /> </span> Cricket Crunch..</div>
      <div className="holder mx-auto w-11/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          allPosts.map((post) => (
            <>
              <Card key={post.title} cat="recommended" {...post} />
            </>
          ))
        }
      </div>
      <Carousel />
    </div>
  )

}

export async function getServerSideProps() {


  const query = `*[_type == "post"][0...12]| order(_createdAt desc) {
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

