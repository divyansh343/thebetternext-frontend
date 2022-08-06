import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../client'
import Card from '../../../components/elements/Card'

const Page = ({ data }) => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <>
      {/* extra shit */}
      <div>
        {/* <div className="mt-40 bannerFondo bg-left-top bg-auto bg-repeat-x" >
        </div> */}
        <div className="bg-primary mt-2 ">
          <div className="w-full text-center">
            {/* <p className="text-sm tracking-widest text-white">Subtitle</p> */}
            <h1 className="pt-4 font-bold text-5xl text-white">
              {categoryid.toUpperCase()}
            </h1>
          </div>

          <div className="pt-30 grid grid-cols-1 gap-4 sm:grid-cols-3 ">

            <div className="p-2 sm:p-10 text-center cursor-pointer">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                <div className="space-y-10">
                  <i className="fa fa-spa" style={{ fontSize: "48px" }}></i>

                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">Spa</div>
                      <p className="text-gray-700 text-base">
                        Todo tipo de masajes y técnicas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center cursor-pointer text-white">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                <div className="space-y-10">
                  <i className="fa fa-head-side-mask" style={{ fontSize: "48px" }}></i>
                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">Bioseguridad</div>
                      <p className="text-base">
                        Altos estandares de bioseguridad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div className="space-y-10">
                  <i className="fa fa-swimmer" style={{ fontSize: "48px" }}></i>

                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">Piscina</div>
                      <p className="text-gray-700 text-base">
                        Piscina temperada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* extra shit */}
      <div className="mx-10 heading font-bold text-4xl m-5 text-primary">
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
  console.log({ "single category posts": data });

  return {
    props: {
      data
    }
  }
}

export default Page