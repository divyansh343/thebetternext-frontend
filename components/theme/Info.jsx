import React from 'react'

const Info = () => {
  return (
    <>
    <div className=" mx-auto my-4 pb-12 space-y-2">
        <div className="mx-2 md:w-3/4 lg:mx-auto ">
          <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 p-4 bg-gradient-to-br from-primary to-green-900 rounded-xl">
            <p className="w-full text-2xl font-semibold text-white">Dark variant</p>
            <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</p>
            <div className="rounded mr-auto">
              <div className="opacity-95 border rounded-lg border-white px-4">
                <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">Buy Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info