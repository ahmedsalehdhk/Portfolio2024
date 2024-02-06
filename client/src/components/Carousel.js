import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import projects from '../projects/projects'

export default function Carousel() {
  return (
    <motion.div className='carousel'>
      <motion.div className='inner-carousel '>
       {
        projects.map(project => {
            return (
                <motion.div className='item h-64 w-72'>
                    <img src={project.imageURL} className='w-full h-full' alt="" />
                </motion.div>
            )
        }) 
       }
      </motion.div>
    </motion.div>
  )
}
