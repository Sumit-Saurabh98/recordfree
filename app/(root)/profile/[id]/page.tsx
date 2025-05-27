import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const page = async ({params}:ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div className='wrapper page'>
      <Header title='Sumit' subHeader='sumitsaurabh112@gmail.com' userImg='/assets/images/dummy.jpg'/>
      <section className='video-grid'>
      {
        dummyCards.map((card)=> (
          <VideoCard key={card.id} {...card}/>
        ))
      }
      </section>
    </div>
  )
}

export default page
