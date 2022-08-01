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

  // for displaying post categorywise.

  // const query = `
  // *[_type == "post" &&  "lifestyle" in categories[]->title]{
  //   author->{
  //     name,
  //     slug,
  //     image
  //   },
  //   ...,
  //   }`;
  // const data = await client.fetch(query)
  // console.log({"category posts":data});

  // for all authors

  // const query = `*[_type == "author"]{
  //   name,
  //   bio,
  //   "authorImage": image.asset->url,
  //   "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
  //     title,
  //     "slug": slug.current,
  //   }
  //   }`
  // const data = await client.fetch(query)
  // console.log({ "category posts": data });
  
  const query = `*[_type == "post" && slug.current == 'sanity-works'][0]`
  const data = await client.fetch(query)
  console.log({ "cat": data });

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default index