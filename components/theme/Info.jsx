import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <>
      <div className=" overflow-y-hidden">
        <div className="mx-auto container py-12 px-4 lg:px-[7px] ">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 rounded-lg bg-gradient-to-br from-headtwo to-green-900 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Become a member and start building the next big thing</h1>
                    </div>
                    <Link href="/careers" >
                    <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">Write for us</button>
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <Image height={1000} width={1000} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mx-auto my-4 pb-12 space-y-2">
        <div className="mx-2 md:w-3/4 lg:mx-auto ">
          <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 p-4 bg-gradient-to-br from-[#00b300] to-headtwo rounded-xl">
            <p className="w-full text-2xl font-semibold text-white">Write for us</p>
            <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">Do you have anything intresting to share. share it with the world.We supports various causes, helps unsung heroes and small initiatives to scale-up, and positively impacts everything around us.</p>
            <div className="rounded mr-auto">
              <div className="opacity-95 hover:bg-headtwo cursor-pointer border rounded-lg border-white hover:border-[#00b300] px-4">
                <Link href="/careers">
                  <p className="m-auto inset-0 text-sm font-medium leading-normal  text-center text-white py-2">Write for us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Info

