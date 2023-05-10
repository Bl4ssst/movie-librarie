import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Paginacao from "../components/Paginacao";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&page=${page}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, [page]);


  return (
    <div className="container">
      <h2 className="title">Filmes mais bem avaliados da história</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Paginacao page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
