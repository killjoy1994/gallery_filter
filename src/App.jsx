import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import Movie from './Movie';

function App() {

  const [popular, setPopular] = useState([])

  const fetchPopular = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTIyYzg3ZDYyZDI4ODUxN2E0NTZiNTNkYzg1OGU3YSIsInN1YiI6IjY0ODYzMTJhOTkyNTljMDBmZjBmNDEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLa38gcYrg_U1IHxnS32SBtBCyx4IMKkVC7bLtor9xU'
      }
    };
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
    const movies = await data.json()
    console.log("DATA: ", movies)
    setPopular(movies.results)
  }

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className='flex justify-center items-center flex-col'>
      {popular.map(data => {
        return <Movie key={data.id} movie={data} />
      })}
    </div>
  )
}

export default App
