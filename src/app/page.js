import Cta from '@/Copmonents/Cta'
import Featured from '@/Copmonents/Featured'
import Footer from '@/Copmonents/Footer'
import Hero from '@/Copmonents/Hero'
import Navbar from '@/Copmonents/Navbar'
import Product from '@/Copmonents/Product'
import Support from '@/Copmonents/Support'
import { Copyright } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Featured />
      <Cta />
      <Support />
      <Footer />
    </div>
  )
}

export default page