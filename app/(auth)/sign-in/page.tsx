"use client"
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const handleSignIn = async () => {
    return await authClient.signIn.social({provider:'google'})
  }

  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/' className='logo'>
          <Image src='/assets/icons/logo.svg' alt='logo' width={32} height={32} />
          <h1>RecordFree</h1>
        </Link>
        <div className='description'>
          <section>
            <figure>
              {
                Array.from({length: 5}).map((_, index)=>(
                  <Image src='/assets/icons/star.svg' alt='star' width={20} height={20} key={index} />
                ))
              }
            </figure>
            <p>RecordFree makes screen recording easy and fun. From quick tutorials to detailed guides, we've got you covered.</p>
            <article>
              <Image src='/assets/images/jason.png' alt='json' width={64} height={64} className='rounded-full' />
              <div>
                <h2>Jason Rivera</h2>
                <p>Product Manager, Google</p>
              </div>
            </article>
          </section>
        </div>
        <p>© {new Date().getFullYear()} RecordFree. All rights reserved.</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
          <Link href='/' className='logo'>
            <Image src='/assets/icons/logo.svg' alt='logo' width={40} height={40} />
            <h1>RecordFree</h1>
          </Link>
          <p>Create and share your very first <span>RecordFree video</span> in no time!</p>
          <button onClick={handleSignIn}>
            <Image src='/assets/icons/google.svg' alt='google' width={22} height={22} />
            <span>Continue with Google</span>
          </button>
        </section>

      </aside>
      <div className='overlay'/>
    </main>
  )
}

export default page
