import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Movie({movie}) {
  const imgSrc = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
  return (
    <div className='flex flex-col h-[300px]'>
        <h1 className={twMerge("font-medium pb-2", movie.title.length > 25 ? "text-md " : "text-xl")}>{movie.title}</h1>
        <div className='rounded-md object-fill h-full hover:opacity-75 shadow-md relative overflow-hidden transition-transform'>
          <img className='h-full w-full hover:scale-125' src={imgSrc} alt="" />
        </div>
    </div>
  )
}
