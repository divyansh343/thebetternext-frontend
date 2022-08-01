import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <p className='pt-14 text-4xl'>
        Fuckin all categories
        <Link href='category/sports'>
          <a>
            sports
          </a>
        </Link>
      </p>
    </div>
  )
}

export default index