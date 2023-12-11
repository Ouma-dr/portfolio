import React from 'react'
import Top from '../components/Top'
import Work from './Work'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Hero from '../components/Hero'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <Top/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/> 
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default Home