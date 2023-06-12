import { useEffect, useState } from 'react';
import './App.css'
import Movie from './Movie';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredMovies, setFilteredMovies] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTIyYzg3ZDYyZDI4ODUxN2E0NTZiNTNkYzg1OGU3YSIsInN1YiI6IjY0ODYzMTJhOTkyNTljMDBmZjBmNDEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLa38gcYrg_U1IHxnS32SBtBCyx4IMKkVC7bLtor9xU'
    }
  }

  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, config)
                if(!response.ok) {
                throw new Error("Request failed")
                }
                const jsonData = await response.json()
                const data = jsonData.results
                setMovies(data)
                setFilteredMovie(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    console.log(movies)

  return (
   <div className='container mx-auto min-w-screen pt-20 px-9'>
    {loading ? <h1>Loading....</h1> : (
      <>
        <Filter movies={movies} setFilteredMovies={setFilteredMovies} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <div className='grid justify-center items-center sm:grid-cols-2 lg:grid-cols-4 py-6 gap-5 mt-12 md:gap-y-6 '>
          {filteredMovies?.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </div>
      </>
    )}
   </div>
  )
}

export default App
