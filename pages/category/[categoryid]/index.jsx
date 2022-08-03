import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from '../../../client'

const Page = () => {
  const router = useRouter()
  const { categoryid } = router.query
  return (
    <div>single Category - {categoryid}
    <Link href="/category/[categoryid]/[postid]" as={`/category/${categoryid}/dfgfdf`}>
          <a>
               jhatu
          </a>
        </Link>
    </div>
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
  console.log({"single category posts":data});

  return {
    props: {
    }
  }
}       

export default Page