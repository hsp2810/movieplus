import React from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Link from "next/link";

const MovieCard = () => {
  return (
    <div className='h-fit min-w-[25rem]'>
      <img
        src='/moviethumbnail.png'
        alt='Image Not found'
        className='h-[15rem] w-[25rem] rounded-lg'
      />
      <div className='flex justify-between items-center mt-3'>
        <div className='flex flex-col'>
          <span className='text-xs'>16 episodes</span>
          <h1 className='text-2xl font-semibold'>Money Heist</h1>
          <div className='flex gap-3 my-2 items-center'>
            <ThumbUpRoundedIcon className='text-1xl cursor-pointer' />
            <ThumbDownAltRoundedIcon className='text-2xl cursor-pointer' />
            <div className='flex items-center'>
              <StarRoundedIcon className='text-2xl' />
              <span className='text-lg'>4</span>
            </div>
          </div>
        </div>
        <Link href={"/movies/moneyheist"}>
          <PlayArrowRoundedIcon className='text-6xl cursor-pointer border rounded-full' />
        </Link>
      </div>
      <div className='mt-1 text-justify text-sm'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        aperiam repellat nemo iure, beatae libero fugit dolorem? Molestias
        consequatur, animi, iusto suscipit est assumenda ad eligendi voluptatum
        unde dolorum laboriosam eum fuga. Explicabo, nostrum id!
      </div>
    </div>
  );
};

export default MovieCard;
