import React from "react";
import MovieCard from "./MovieCard";

const ContinueWatching = () => {
  return (
    <div className='ml-[5rem] cursor-pointer z-50'>
      <h1 className='text-xl underline mb-2'>Continue Watching</h1>
      <div className='flex flex-col md:flex-row w-full gap-7 overflow-x-scroll remove-scroll'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default ContinueWatching;
