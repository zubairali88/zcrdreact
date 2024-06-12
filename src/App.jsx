import React from 'react'
import Navbar from './Coponents/Navbar/Navbar'
import Hero from './Coponents/Hero/Hero'
import Programs from './Coponents/Programs/Programs'
import Title from './Coponents/Title/Title'
import Template from './Coponents/Template/Template'
import Blog from './Coponents/Blog/Blog'
import Services from './Coponents/Services/Services'
import AboutUs from './Coponents/AboutUs/AboutUs'
import Footer from './Coponents/Footer/Footer'



const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='container1'>
      <Title subTitle='PRICING' title='OUR PLANS'/>
     <Programs/>
     </div>
     <Template/>
     <Blog/>
     <Services/>
     <AboutUs/>
     <Footer/>
     </div>
  )
}

export default App
