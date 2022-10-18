import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../client'
import Card from '../../../components/elements/Card'

const Page = ({ data, catdata, catListData }) => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <>
      {/* extra shit */}
      <section>
        <div className="bg-gray-100 sm:grid grid-cols-5 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

          <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-headtwo rounded-md flex items-center">
            <div className="ml-20 w-80">
              <h2 className="text-white text-6xl">{categoryid.toUpperCase()}</h2>
              <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">{catdata.description}</p>

              {/* <a href="#" className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</a> */}
            </div>

          </div>
          <div className="h-96 col-span-1 ">

            <div className="bg-white  rounded-md">

              <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">other categories</h1>
              <div className="bg-white rounded-md list-none  text-center ">
                {catListData.map(cate => (<>
                  <li key={cate._id} className="py-3 border-b-2">
                    <Link href={`/category/${cate.title}`}>
                      <a  className="list-none text-base hover:underline text-headtwo hover:text-gray-700">{cate.title.toLowerCase()}</a>
                    </Link>
                  </li>

                </>))}
                <li  className="py-3 border-b-2">
                    <Link href={`/category`}>
                      <a  className="list-none text-base underline text-grey hover:text-lg">Explore...</a>
                    </Link>
                  </li>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* extra shit */}
      <div className="mx-10 heading text-4xl m-5 text-headtwo">
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