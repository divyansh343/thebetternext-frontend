import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import client from '../../client';

import imageUrlBuilder from '@sanity/image-url'
import Card from '../../components/elements/Card';
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
const index = ({ lifestyle_posts, health_posts }) => {
  console.log(lifestyle_posts);
  return (
    <div>

      {/* lifestyle posts */}
      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Lifestyle</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {

          lifestyle_posts.map((post) => (
            <>
              <Card key={post._id} cat="lifestyle" {...post} />
            </>
          ))
        }
      </div>
      {/* lifestyle posts */}

      {/* health posts */}
      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Health</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {

          health_posts.map((post) => (
            <>
              <Card key={post._id} cat="health" {...post} />
            </>
          ))
        }
      </div>
      {/* health posts */}
    </div>
  )
}

export async function getServerSideProps() {

  // for displaying post categorywise.

  const lifestyle_query = `
  *[_type == "post" &&  "lifestyle" in categories[]->title]{
    author->{
      name,
      slug,
      image
    },
    ...,
    }`;
  const lifestyle_posts = await client.fetch(lifestyle_query)

  const health_query = `
  *[_type == "post" &&  "health" in categories[]->title]{
    author->{
      name,
      slug,
      image
    },
    ...,
    }`;
  const health_posts = await client.fetch(health_query)

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

  return {
    props: {
      lifestyle_posts,
      health_posts
    }
    // will be passed to the page component as props
  }
}

export default index