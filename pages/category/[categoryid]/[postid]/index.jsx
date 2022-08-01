import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Post = () => {
  const router = useRouter()
  const { postid } = router.query
  return (
    <div>Post - {postid}
    <Link href="/category/[categoryid]" as="/category/abc">
          <a>
            jhatu
          </a>
        </Link>
    </div>
  )
}

export default Post