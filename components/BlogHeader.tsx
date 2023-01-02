import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function BlogHeader({}: Props) {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href="/">
        <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/86032768?v=4"
              width={50}
              height={50}
              alt="Picture of Sam"
            />
        </Link>
        <h1>Sam Wynne</h1>
      </div>
      <div>
        <Link href="/blog" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#ffbbbb] flex items-center rounded-full text-center'>Mailing List Coming Soon</Link>
      </div>

    </header>
  )
}

export default BlogHeader