import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import client from '../../client';

import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
const index = ({ health_posts }) => {
  return (
    <div>
      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">Lifestyle</div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          // props.map(allPosts => (<> {

            health_posts.map((post) => (
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
          // }
          // </>
          // ))
        }
      </div>
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
      // allposts: [lifestyle_posts,
      //   health_posts]
    }, // will be passed to the page component as props
  }
}

export default index