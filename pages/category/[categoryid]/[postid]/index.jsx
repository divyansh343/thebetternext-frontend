import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../../client'



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

export async function getServerSideProps(context) {
  const { postid } = context.query
  console.log(postid);
  const query = `*[_type == "post" && slug.current == '${postid}'][0]`
  const data = await client.fetch(query)
  console.log({ "cat": data });

  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default Post