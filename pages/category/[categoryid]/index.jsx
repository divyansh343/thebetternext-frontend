import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Page = () => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <div>Category - {categoryid}
    <Link href="/category/[categoryid]/[postid]" as={`/category/${categoryid}/dfgfdf`}>
          <a>
               jhatu
          </a>
        </Link>
    </div>
  )
}

export default Page