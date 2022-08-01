import Link from 'next/link'
import React from 'react'
import client from '../../client';

const index = () => {
  return (
    <div>
      <p className='pt-14 text-4xl'>
        Fuckin all categories
        <Link href='category/sports'>
          <a>
            sports
          </a>
        </Link>
      </p>
    </div>
  )
}

export async function getServerSideProps() {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    ..., 
    author->,
    categories[]->
  }
  `;
  const data = await client.fetch(query)
  console.log(data);
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default index