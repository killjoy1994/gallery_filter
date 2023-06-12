import { useEffect, useState } from 'react';
import './App.css'
import Movie from './Movie';
import Filter from './components/Filter';
import useFetch from './hooks/useFetch';

function App() {
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTIyYzg3ZDYyZDI4ODUxN2E0NTZiNTNkYzg1OGU3YSIsInN1YiI6IjY0ODYzMTJhOTkyNTljMDBmZjBmNDEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLa38gcYrg_U1IHxnS32SBtBCyx4IMKkVC7bLtor9xU'
    }
    }
  const {data, loading, error} = useFetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", config)
  const movieData = data?.results

  useEffect(() => {
    if(movieData) {
      setFiltered(movieData)
    }
  }, [movieData])

  console.log(movieData)

  return (
   <div className='container mx-auto min-w-screen pt-20 px-9'>
    <Filter />
    <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-4 py-6 gap-3 mt-12 md:gap-y-12 '>
      {movieData?.map(movie => {
        return <Movie key={movie.id} movie={movie} />
      })}
    </div>
   </div>
  )
}

export default App
