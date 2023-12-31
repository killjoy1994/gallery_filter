import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import Test from "./components/Test"

const tokenEnv = import.meta.env.TOKEN

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };

  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, config);
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        const data = jsonData.results;
        setMovies(data);
        setFilteredMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(movies);

  return (
    <motion.div  className="container mx-auto min-w-screen pt-8 pb-20 px-9">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Filter 
            movies={movies} 
            setFilteredMovies={setFilteredMovies} 
            activeGenre={activeGenre} 
            setActiveGenre={setActiveGenre} 
          />
          <motion.div
            layout
            className="
            grid 
            justify-center 
            items-center 
            sm:grid-cols-2 
            lg:grid-cols-4 
            py-6 
            gap-6 
            mt-4
          "
          >
            <AnimatePresence>
              {filteredMovies?.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default App;
