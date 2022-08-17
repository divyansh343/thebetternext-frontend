import React from 'react'

const Info = () => {
  return (
    <>
    <div className=" mx-auto my-4 pb-12 space-y-2">
        <div className="mx-2 md:w-3/4 lg:mx-auto ">
          <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 p-4 bg-gradient-to-br from-primary to-green-900 rounded-xl">
            <p className="w-full text-2xl font-semibold text-white">Write for us</p>
            <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">Do you have anything intresting to share. share it with the world.We supports various causes, helps unsung heroes and small initiatives to scale-up, and positively impacts everything around us.</p>
            <div className="rounded mr-auto">
              <div className="opacity-95 border rounded-lg border-white px-4">
                <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">submit article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info