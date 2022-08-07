import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import client from '../../../../client'
import {PortableText} from '@portabletext/react'

import imageUrlBuilder from '@sanity/image-url'
import Flatnav from '../../../../components/theme/Flatnav'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}


const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt}
          loading="lazy"
          width={320}
          height={240}
          src={urlFor(value).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({ post }) => {
  console.log(post)
  const router = useRouter()
  const { postid } = router.query


  return (
    <div>
      <Flatnav />
      {/* <header className="">
        <div className="flex flex-col place-items-start py-12 mx-6">
          <p className="text-lg font-semibold mx-4 text-primary">
            {("innovation").toUpperCase()}
          </p>
          <a className="my-2 text-[#303030] mx-4 font-bold text-4xl opacity-80" href="#">
            {post.title}
          </a>
          <p className="my-2 mx-4 text-primary">
            <span className='text-[#303030]'>By</span>  <span className='hover:underline'>{post.author.name}</span>
          </p>
        </div>
      </header> */}

      <div className="container mx-auto flex flex-wrap py-6">

        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

          <article className="flex flex-col shadow my-4">
            {
              post.mainImage &&
              <Image
                height={720}
                width={1200}
                alt={post.title}
                src={builder.image(post.mainImage).url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"} />
            }

            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{("Technology").toUpperCase()}</a>
              <a href="#" className="text-3xl font-bold text-[#303030] opacity-80 pb-4">{post.title}</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">{post.author.name}</a>, Published <span className='text-gray-800 font-semibold'>{new Date(post.publishedAt).toDateString()}</span>
              </p>
              <a href="#" className="pb-6">
              </a>
                <PortableText components={ptComponents} value={post.body}/>
              {/* <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a> */}
            </div>
          </article>


        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              {/* <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
                    <Image class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" /> */}
            </div>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
              <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>

        </aside>

      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { postid } = context.query
  const query = `*[_type == "post" && slug.current == '${postid}'][0]{
    title,
    body,
    categories->,
    author->,
    mainImage,
    publishedAt
  }`
  const data = await client.fetch(query)
  console.log({ "cat": data });

  return {
    props: { post: data }
  }
}

export default Post