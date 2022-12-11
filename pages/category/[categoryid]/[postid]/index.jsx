import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import client from '../../../../client'
import { PortableText } from '@portabletext/react'

import imageUrlBuilder from '@sanity/image-url'
import Flatnav from '../../../../components/theme/Flatnav'
import Link from 'next/link'
const builder = imageUrlBuilder(client)

import { useRouter } from 'next/router'

import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

function urlFor(source) {
  return builder.image(source)
}

function truncate(str, n) {
  return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};
const Post = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState(props.post);
  const { posts } = props;
  const router = useRouter()
  console.log(router.asPath)
  // console.log(posts);
  // console.log(props.allPostsList);

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
      <Flatnav catList={props.catList} />

      <div className="container mx-auto flex flex-wrap py-12">

        <section className="w-full md:w-2/3 flex flex-col items-center px-3">


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
                      <Link href={`/category/${cat.title}`}>
                        <a className="text-headtwo text-sm font-bold uppercase pb-4 mx-1">{cat.title}</a>
                      </Link>
                    </>
                  ))
                }
              </div>
              <h1 className="mb-3 text-3xl font-bold text-[#303030] md:leading-tight md:text-4xl" itemProp="headline" title={posts.title}>
                {posts.title}
              </h1>
              <p href="#" className="text-sm pb-3 mt-2">
                By <a href="#" className="font-semibold hover:text-gray-800">{posts.author.name.charAt(0).toUpperCase() + posts.author.name.slice(1)}</a>, Published <span className='text-gray-800 font-semibold'>{new Date(posts.publishedAt).toDateString()}</span>
              </p>
              <p className='mt-10 text-lg leading-loose'>
                <PortableText components={ptComponents} value={posts.body} />
              </p>
              {/* <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a> */}
            </div>
          </article>

        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

          {/* // for profile */}
          <div
            className="card  min-w-sm border border-gray-700 bg-white text-gray-50 my-4 transition-shadow shadow-xl hover:shadow-xl min-w-max sm:mt-5">

            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div
                  className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-headcol min-w-max -top-16 bg-purple-200 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <Image
                    alt={`${posts.author.name} is writer and author in glu.com`}
                    src={builder.image(posts.author.image).url()}
                    height={100}
                    width={100}
                    className="h-24 w-24 md rounded-full relative"
                  />
                  {/* <img className="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt=""> */}
                  <div className="absolute"></div>
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span className="text-md whitespace-nowrap text-gray-900 ">author-</span><span className="text-md whitespace-nowrap font-bold text-gray-900">{posts.author.name.charAt(0).toUpperCase() + posts.author.name.slice(1)}</span>
                  <p className="text-sm text-gray-900">
                    I cant start my day without a coffee cup
                  </p>
                  <div className="py-2 flex space-x-2">
                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-headcol rounded max-w-max border bg-transparent border-headcol text-headcol hover:border-headtwo px-4 py-1 items-center hover:shadow-lg"><span className="mr-2"></span>FOLLOW<span className="ml-2"></span></button><button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-headtwo hover:bg-headcol px-4 py-1 items-center hover:shadow-lg hover:text-black"><span className="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" className="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span className="ml-2"></span></button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='mx-2'>
              <ul className="border border-gray-200 rounded overflow-hidden mb-1 shadow-md">
                <li className="px-4 py-2 text-gray-900 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">First Item</li>

              </ul>
            </div> */}
          </div>
          {/* // for profile */}

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About US</p>
            <p className="pb-2">We are independent magazine that works </p>
            <a href="#" className="w-full bg-gradient-to-br from-headtwo to-green-900 text-white text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Share</p>
            <div className='grid grid-cols-5'>
              <div className='col-span-1'>
                <FacebookShareButton
                  url={`theglu.in${router.asPath}`}
                  quote={posts.title}
                  hashtag={"#theglu"}
                >
                  <FacebookIcon size={40} round />

                </FacebookShareButton>
              </div>
              <div className='flex col-span-1'>
                <WhatsappShareButton
                  url={`theglu.in${router.asPath}`}
                  title={posts.title}
                  separator=":: "
                >
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
              </div>
              <div className='flex col-span-1'>
                <TwitterShareButton
                  url={`theglu.in${router.asPath}`}
                  title={posts.title}
                >
                  <TwitterIcon size={40} round />
                </TwitterShareButton>
              </div>
              <div className='flex col-span-1'>
                <RedditShareButton
                  url={`theglu.in${router.asPath}`}
                  title={posts.title}
                >
                  <RedditIcon size={40} round />
                </RedditShareButton>
              </div>
              <div className='flex col-span-1'>
                <EmailShareButton
                  url={`theglu.in${router.asPath}`}
                  subject={posts.title}
                  body={posts.description}
                >
                  <EmailIcon size={40} round />
                </EmailShareButton>
              </div>
            </div>

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
            <div className="bg-gradient-to-br from-headtwo to-green-900 bg-opacity-70">
              <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                  <div className="flex-shrink max-w-full w-full py-5 overflow-hidden">
                    <div className="w-full py-3">
                      <h2 className="text-white text-2xl text-shadow-black">
                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Editor&apos;s choice
                      </h2>
                    </div>
                    <div id="post-carousel" className="splide post-carousel">
                      <div className="splide__track">
                        <ul className="splide__list">

                          {props.allPostsList.filter(item => item.title != posts.title).map(listItem => (
                            <>
                              <Link key={listItem._id} href={`/category/recommended/${listItem.slug.current}`} >
                                <a >
                                  <li className="splide__slide">
                                    <div className="w-full pb-3">
                                      <div className="hover-img bg-white">
                                        <div className="py-3 px-6">
                                          <h3 className=" leading-tight mb-2 text-base">
                                            <p className='underline hover:text-headtwo'>{
                                              truncate(listItem.title, 50)
                                            }</p>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </a>
                              </Link>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
              <Image className="hover:opacity-75" alt='insta gallery' height={100} width={100} src="https://source.unsplash.com/collection/1346951/150x150?sig=9" />
            </div>
            <a href="#" className="w-full bg-gradient-to-br from-headtwo to-green-900 text-white text-sm uppercase rounded hover:bg-headcol flex items-center justify-center px-2 py-3 mt-4">
              Follow instagram
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
    description,
    body,
    categories[]->,
    author->,
    mainImage,
    publishedAt
  }`

  const data = await client.fetch(query)



  const catListquery = `
  *[_type == "category"]`;
  const catListData = await client.fetch(catListquery)

  const allPostQuery = `*[_type == "post"][0...6]{
    ...,
    categories[]->
  }`

  const allPosts = await client.fetch(allPostQuery)
  return {
    props: {
      posts: data,
      catList: catListData,
      allPostsList: allPosts
    }
  }
}

export default Post