import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import client from '../../../../client'
import { PortableText } from '@portabletext/react'

import imageUrlBuilder from '@sanity/image-url'
import Flatnav from '../../../../components/theme/Flatnav'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Post = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(props.post);

  useEffect(() => {
    setIsLoading(true);
    // const tempPosts =  posts;
    setPosts(posts);
    setIsLoading(false);
  }, [posts]);

  console.log(posts)

  const ptComponents = {
    style: {
      h6: ({ children }) => <h4 className="text-xl">{children}</h4>,
      h5: ({ children }) => <h4 className="text-2xl">{children}</h4>,
      h4: ({ children }) => <h4 className="text-3xl">{children}</h4>,
      h3: ({ children }) => <h4 className="text-4xl text-blue-400">{children}</h4>,
      h2: ({ children }) => <h4 className="text-5xl">{children}</h4>,
      h1: ({ children }) => <h4 className="text-6xl">{children}</h4>,
    },
    types: {
      image: ({ value }) => (
        <Image
          alt={posts.title}
          height={500}
          width={900}
          loading='lazy'
          src={builder.image(value).url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
        />
      ),
      span: ({ children }) => <span className="text-6xl">{children}</span>,

      // callToAction: ({ value, isInline }) =>
      //   isInline ? (
      //     <a href={value.url} className="text-primary">{value.text}</a>
      //   ) : (
      //     <div className="callToAction">{value.text}</div>
      //   ),
    },
    marks: {

      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => <em className="text-gray-900">{children}</em>,
      strong: ({ children }) => <strong className="text-bold">{children}</strong>,

      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a href={value?.href} className="text-primary underline" target={target} rel={target === '_blank' && 'noindex nofollow'}>
            {children}
          </a>
        )
      },

      list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
        // Ex. 2: rendering custom lists
      },
    },

  }

  return (

    <div>
      <Head>
        <title>{posts.title}</title>
        {
          posts.description &&
          <meta name="description" content={posts.description} />
        }
      </Head>
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
          {isLoading ? <div>loading...</div> :

            <article className="flex flex-col shadow my-4">
              {
                posts.mainImage &&
                <Image
                  height={720}
                  width={1200}
                  alt={posts.title}
                  src={builder.image(posts.mainImage).url() || "https://images.unsplash.com/photo-1619866640467-86547b9858d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"} />
              }

              <div className="bg-white flex flex-col justify-start p-6">
                <div className='flex'>
                {
                  posts.categories.map(cat => (
                    <>
                      <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4 mx-1">{cat.title}</a>
                    </>
                  ))
                }
                </div>

                <a href="#" className="text-3xl font-bold text-[#303030] opacity-80 pb-4">{posts.title}</a>
                <p href="#" className="text-sm pb-3">
                  By <a href="#" className="font-semibold hover:text-gray-800">{posts.author.name}</a>, Published <span className='text-gray-800 font-semibold'>{new Date(posts.publishedAt).toDateString()}</span>
                </p>
                <a href="#">
                  <PortableText components={ptComponents} value={posts.body} />
                </a>
                {/* <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a> */}
              </div>
            </article>
          }


        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Post</p>
            <p className="pb-2">{posts.description}</p>
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
          <div
            className="relative bg-stone-50"
            style={{
              // backgroundImage: 'url("https://images.unsplash.com/photo-1659794958036-259a0bb14f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed"
            }}
          >
            <div className="bg-gray-900 bg-opacity-70">
              <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                  <div className="flex-shrink max-w-full w-full py-5 overflow-hidden">
                    <div className="w-full py-3">
                      <h2 className="text-white text-2xl text-shadow-black">
                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>editor&apos;s choice
                      </h2>
                    </div>
                    <div id="post-carousel" className="splide post-carousel">
                      <div className="splide__track">
                        <ul className="splide__list">



                          <li className="splide__slide">
                            <div className="w-full pb-3">
                              <div className="hover-img bg-white">
                                <a href="">
                                </a>
                                <div className="py-3 px-6">
                                  <h3 className=" leading-tight mb-2 text-lg">
                                    <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </li>


                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    description,
    body,
    categories[]->,
    author->,
    mainImage,
    publishedAt
  }`
  const data = await client.fetch(query)
  return {
    props: { post: data }
  }
}

export default Post