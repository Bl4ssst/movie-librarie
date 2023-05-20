import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Paginacao from "../components/Paginacao";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const [sMovies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&page=${page}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query, page]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {sMovies.length > 0  &&
          sMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Paginacao page={page} setPage={setPage} />
    </div>
  );
};

export default Search;
