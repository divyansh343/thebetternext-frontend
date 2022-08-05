import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Hero from '../components/homepage/hero'
import styles from '../styles/Home.module.css'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'
import Link from 'next/link'

export default function Home({ allPosts }) {
  console.log(allPosts);
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
                <Image width={280} height={300} className="w-full" src="https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="image alt" />

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

