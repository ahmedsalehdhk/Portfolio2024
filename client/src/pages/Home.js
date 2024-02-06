import React from 'react'

// Components
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className='home flex justify-center items-center'>
      <div className="home-inner px-5 w-full lg:w-3/4">
        <Navbar />
        <div className="home-text bg-rd-500 flex flex-col justify-center items-center my-28">
          <h1 className='text-4xl sm:text-5xl lg:text-6xl px-6 py-3 rounded-md mb-3 sm:mb-5 font-medium text-center whitespace-nowrap bg-[#ffef5c]'>Hey, I'm Saleh</h1>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl mb-10 sm:mb-14 font-medium text-center'>a software engineer</h1>
          <p className='text-center text-xl sm:text-2xl w-full sm:w-3/4 custom-line-height'>I'm a new software engineer, excited to learn new technology to stay ahead of the curve. With a passion for learning, I'm building the digital future, one code line at a time.</p>
        </div>
        <div className="home-banner flex justify-evenly gap-3 items-center py-12 border rounded-md bg-white my-28 text-2xl">
          <p>MongoDB</p>
          <p>ExpressJS</p>
          <p>ReactJS</p>
          <p>NodeJS</p>
        </div>
        <div className="projects my-28">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-10'>It aint much work, but its honest work</h1>
          <Carousel />
        </div>
        {/* CAROUSEL GOES HERE */}
      </div>
    </div>
  )
}
