import React from 'react'

export default function Movie({movie}) {
  let fontSize
  return (
    <div className='flex flex-col h-full justify-end'>
        <h1 className='text-xl font-medium pb-2'>{movie.title}</h1>
        <img className='rounded-md md:h-[350px] object-fill' src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
    </div>
  )
}
