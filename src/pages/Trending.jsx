import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Paginacao from "../components/Paginacao";

import "./MoviesGrid.css";

const linkTrendingURL = import.meta.env.VITE_TRENDING;
const apiKey = import.meta.env.VITE_API_KEY;

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const getTrending = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTrending(data.results);
  };

  useEffect(() => {
    const trendingUrl = `${linkTrendingURL}${apiKey}&page=${page}&language=pt-BR`;
    console.log(trendingUrl);
    getTrending(trendingUrl);
  }, [page]);


  return (
    <div className="container">
      <h2 className="title">Filmes mais assistidos hoje</h2>
      <div className="movies-container">
        {trending.length > 0 &&
          trending.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Paginacao page={page} setPage={setPage} />
    </div>
  );
};

export default Trending;