import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function ({movies, setFilteredMovies, activeGenre, setActiveGenre}) {

  useEffect(() => {
    if(activeGenre == 0) {
      setFilteredMovies(movies)
      return
    } 

    const filtered = movies.filter(movie => {
      if(movie.genre_ids.find(id => {
        return id === activeGenre
      })) {
        return movie
      }
    })

    setFilteredMovies(filtered)

    console.log("Filtered: " , filtered)
    
  }, [
    activeGenre
  ])
  
  return (
    <div className="flex gap-x-8 mx-auto justify-center text-slate-900">
      <button onClick={() => setActiveGenre(0)} className={twMerge("inline-block text-3xl font-semibold hover:text-slate-600", activeGenre === 0 ? "text-blue-600" : "")}>All</button>
      <button onClick={() => setActiveGenre(35)} className={twMerge("inline-block text-3xl font-semibold hover:text-slate-600", activeGenre === 35 ? "text-blue-600": "" )}>Comedy</button>
      <button onClick={() => setActiveGenre(28)} className={twMerge("inline-block text-3xl font-semibold hover:text-slate-600", activeGenre === 28 ? "text-blue-600": "" )}>Action</button>
    </div>
  );
}
