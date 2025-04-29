import React from 'react'
import SlideShow from '../components/SlideShow'
import Navbar from '../Layout/Navbar'

const Home : React.FC= ()  => {
  return (
    <div>
        <Navbar/>
        <SlideShow/>
    </div>
  )
}

export default Home