import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../client'
import Card from '../../../components/elements/Card'
import Image from 'next/image'

const Page = ({ data, catdata, catListData }) => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <>
    <div className='my-3'></div>
        {/* extra shit */}
        <article itemID="#" itemScope itemType="http://schema.org/BlogPosting">
          <div className="bg-blue-500 grid items-center grid-cols-1 md:grid-cols-2">
            <div className="order-2 h-64 md:order-1 md:h-full">
              <Image
                width={500}
                height={500}
                src={"https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxwZW9wbGUlMjBncm91cHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60"}

                className="object-cover w-full h-full bg-center"
                alt={categoryid} />
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

        <div className="mx-10 heading text-4xl mt-10 m-5 text-headtwo">
          {categoryid.charAt(0).toUpperCase() + categoryid.slice(1)} Posts
        </div>
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
  *[_type == "post" &&  '${categoryid}' in categories[]->title]{
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