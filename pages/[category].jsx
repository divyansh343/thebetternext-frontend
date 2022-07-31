import React from 'react'
import { useRouter } from 'next/router'
import {Link} from 'next/link'
const CategoryPage = () => {
    const router = useRouter()
    const { category } = router.query
    return (
        <>
            <div className='pt-14'>CategoryPage<p>{category}</p></div>
            {/* <Link href="/category/:categoty">
                <a >
                    welcome to zumanzi
                </a>
            </Link> */}
        </>
    )
}

export default CategoryPage