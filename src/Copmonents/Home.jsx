import React from 'react'
import Cta from '@/Copmonents/Cta'
import Featured from '@/Copmonents/Featured'
import Hero from '@/Copmonents/Hero'
import Product from '@/Copmonents/Product'
import Support from '@/Copmonents/Support'

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Featured />
      <Cta />
      <Support />
      
    </div>
  )
}

export default Home