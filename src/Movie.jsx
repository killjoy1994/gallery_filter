import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Movie({movie}) {
  return (
    <div className='flex flex-col h-[300px]'>
        <h1 className={twMerge("font-medium pb-2", movie.title.length > 25 ? "text-md " : "text-xl")}>{movie.title}</h1>
        <img className='rounded-md object-fill h-full hover:opacity-75 shadow-md' src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
    </div>
  )
}
