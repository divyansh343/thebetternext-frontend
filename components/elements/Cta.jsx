import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Cta = () => {
    return (
        <>
<div className="bg-headtwo">
        <div className="lg:grid lg:grid-cols-2">
            <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Awesome story&apos;s from Glu.</span>
                </h2>
                <p className="text-gray-300 mt-5">
                We tell stories of change, inspiration, courage, resilience, hope, kindness, compassion, innovation, initiative, sustainability, progress, social good, small businesses, renewable energy, green technologies, and much more.
                    
                </p>
                <div className="inline-block shadow mt-5">
                    {/* <Link href="/category"> */}
                    <a  className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md">Read free story&apos;s</a>
                    {/* </Link> */}
                </div>
            </div>
            <div className="lg:relative lg:mt-16">
                <Image
                height={900}
                width={1200}
                alt="Illustration"
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
            </div>
        </div>
    </div>
        </>
    )
}

export default Cta