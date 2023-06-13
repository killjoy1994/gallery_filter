import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

export default function Movie({movie}) {
  const imgSrc = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
  return (
    <motion.div 
      layout 
      animate={{opacity: 1}} 
      initial={{opacity:0}} 
      exit={{opacity: 0}} 
      transition={{layout: {duration: 0.3}, type: "tween"}} 
      className='flex flex-col'>
        <h1 
          className={twMerge("font-medium pb-2", movie.title.length > 15 ? "text-md" : "text:2xl")}>
          {movie.title}
        </h1>
        <div 
          className='
            min-w-[300px]  
            h-[300px] 
            sm:min-w-full 
            rounded-md 
            object-fill 
            hover:opacity-75 
            shadow-md 
            relative 
            overflow-hidden 
            transition
          '
        >
          <img className='h-full w-full hover:scale-110 duration-500' src={imgSrc} alt="" />
        </div>
    </motion.div>
  )
}
