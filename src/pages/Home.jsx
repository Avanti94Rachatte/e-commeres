import React from 'react'
import Carousel from '../components/Carousel'
import { MidBanner } from '../components/MidBanner'
import { Features } from '../components/Features'




 const Home = () => {
  return (
    <div>
      
        <div className=''>
      <Carousel/>
       <MidBanner/>
       <Features/>
       
        </div>
    </div>
  )
}   
export default Home
