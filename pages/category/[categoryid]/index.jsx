import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../client'
import Card from '../../../components/elements/Card'
import Image from 'next/image'
import Flatnav from '../../../components/theme/Flatnav'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const Page = ({ data, catdata, catListData }) => {
  console.log(catdata);
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <>
      <Flatnav catList={catListData} />
      <div className=''></div>
      {/* extra shit */}
      <article itemID="#" itemScope itemType="http://schema.org/BlogPosting">
        <div className="bg-[#F4D8CD] grid items-center grid-cols-1 md:grid-cols-2">
          <div className=" md:order-1 md:h-full">
            {
              catdata.image ?
                <Image
                  className="object-cover w-full h-full bg-center"
                  alt={categoryid}
                  width={900}
                  height={900}
                  loading='lazy'
                  src={builder.image(catdata.image).url()}
                /> :
                <Image
                  className="object-cover w-full h-full bg-center"
                  alt={categoryid}
                  width={900}
                  height={900}
                  loading='lazy'
                  src= "https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxwZW9wbGUlMjBncm91cHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60"
                />
            }
          </div>
          <div className=" border-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
            <p className="mb-3 text-gray-500">
            </p>
            <h1 className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemProp="headline" title={categoryid}>
              {categoryid.toUpperCase()}
            </h1>
            <p className=" mt-4 capitalize font-thin tracking-wider leading-7">{catdata.description}</p>
            <a className="flex items-center text-gray-700" href="#">
              <div className="avatar">
                {/* <img src="/placeholder.jpg" alt="Photo of Praveen Juge" /> */}
              </div>
              {/* <div className="ml-2">
                <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
                <p className="text-sm text-gray-500">Swell Guy</p>
              </div> */}
            </a>
          </div>
        </div>
      </article>


      {/* extra shit */}

      <div className="ml-12 lg:ml-28 heading text-4xl mt-10  text-headtwo">
        {categoryid.charAt(0).toUpperCase() + categoryid.slice(1)} Posts
      </div>
      <div className="holder mx-auto mt-[30px] w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {

          data.map((post) => (
            <>
              <Card key={post._id} cat={categoryid} {...post} />
            </>
          ))
        }
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { categoryid } = context.query
  const query = `
  *[_type == "post" &&  '${categoryid}' in categories[]->title]| order(_createdAt desc){
    author->{
      name,
      slug,
      image
    },
    ...,
    }`;
  const data = await client.fetch(query)

  const catquery = `
  *[_type == "category" && title == '${categoryid}' ][0]`;
  const catdata = await client.fetch(catquery)

  const catListquery = `
  *[_type == "category"]`;
  const catListData = await client.fetch(catListquery)

  return {
    props: {
      data,
      catdata,
      catListData
    }
  }
}

export default Page