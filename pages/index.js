import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div>
      <p className='text-6xl text-red-900 border-b border-red-900 px-4 mx-4 py-4'>
        Hello the better
      </p>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "post"][0...10]`
  const allPosts = await client.fetch(query)
  console.log({ "allPosts": allPosts });

  return {
    props: {}, // will be passed to the page component as props
  }
}

