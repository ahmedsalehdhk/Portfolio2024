import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar flex justify-between items-center gap-3 min-w-fit rounded-full shadow-md px-4 py-3 font-medium my-10 bg-white'>
      <div className="navbar-left flex items-center gap-2 md:gap-4 lg:gap-8">
        <div className="logo">
          <img src="/" className='h-10 w-10 rounded-full bg-[#ffef5c]' alt="" />
        </div>
        <div className="nav-links hidden md:flex items-center gap-2 md:gap-4 lg:gap-8">
          <a href="/">About</a>
          <a href="/">Projects</a>
          <hr className='h-5 w-0.5 bg-neutral-400' />
          <a href="/">GitHub</a>
          <a href="/">LinkedIn</a>
          <a href="/">Behance</a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-cta">
          <button className='px-6 py-3 rounded-full border-2 border-transparent hover:border-black bg-[#ffef5c]'>Contact</button>
        </div>
      </div>
    </div>
  )
}
