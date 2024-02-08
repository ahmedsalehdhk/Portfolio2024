import React from 'react'

export default function ProjectCard() {
  return (
    <div className='bg-pink-400 h-80 w-64 rounded-3xl overflow-hidden shadow-xl' id='test'>
        <div className="card-upper w-full h-3/5 bg-red p-5">DRISHTI</div>
        <div className="card-lower w-full h-2/5 rounded-3xl p-5 bg-black opacity-40 backdrop-blur-3xl">
            <div className="left">L</div>
            <div className="right">R</div>
        </div>
    </div>
  )
}
