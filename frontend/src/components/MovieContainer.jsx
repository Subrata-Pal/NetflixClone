import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { store } from "../app/store";

function MovieContainer() {
  const movie = useSelector((store) => store.movie);

  return (
    <div className=" mt-10 bg-black text-white p-4 w-screen">
      <div className="relative -mt-10 w-screen backdrop-blur-sm">
        <h1 className="text-3xl mb-5">Popular Movies</h1>
        <div className="flex items-center mb-10">
          <MovieList movies={movie.popularMovies} />
        </div>
      </div>
      <div className=" w-screen">
        <h1 className="text-3xl mb-5 relative">Now Playing Movies</h1>
        <div className="mb-10">
          <MovieList movies={movie.nowPlayingMovies} />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl mb-5">Top Rated Movies Movies</h1>
        <div className="mb-10">
          <MovieList movies={movie.topRatedMovies} />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl mb-5">Upcoming Movies</h1>
        <div className="mb-10">
          <MovieList movies={movie.upcomingMovies} />
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
