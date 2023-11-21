import React from 'react'
import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import Service from './service/service'
import ShopNow from './shop now/shopnow'
import New from './new arrivals/new'
import Quality from './quality/quality'
import Story from './our story/story'
import Discount from './discount/discount'
import Post from './posts/post'
import Footer from './footer/footer'

export default function Home() {
  return (
    <div id='/home'>
        
        <Hero/>
        <Service/>
        <ShopNow/>
       
        
       
        
        <New/>
        <Quality/>
        <Story />
        <Discount />
        <Post />
        
    </div>
  )
}
