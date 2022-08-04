import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import Hero from '../components/homepage/hero'
import styles from '../styles/Home.module.css'
import Card from '../components/elements/Card'
import Carousel from '../components/elements/Carousel'

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
              <Card key={post.id} {...post} />
            </>
          ))
        }
      </div>

      {/* Card wrapper */}

      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Editor&apos;s pick</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="card w-96 glass">
          <figure><Image layout='fill' src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>tt
      </div>
      <Carousel />
    </>
  )

}

export async function getServerSideProps() {
  const query = `*[_type == "post"][0...10]`
  const allPosts = await client.fetch(query)
  console.log({ "allPosts": allPosts });

  return {
    props: { allPosts }, // will be passed to the page component as props
  }
}

