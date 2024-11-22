import React from 'react'
import MovieCard from './MovieCard'
import { IMAGE_PATH } from '../utils/constants'

function MovieList({movies}) {

  if(!movies) return;

  return (
    <div className='flex overflow-x-auto whitespace-nowrap cursor-pointer no-scrollbar space-x-4'>
        {
          movies.map((elem)=>
            {
                if(elem.poster_path != null) {
                const imgPath = `${IMAGE_PATH}${elem.poster_path}`;
                return (
                    <MovieCard id= {elem.id} srcPath= {imgPath}/>
                )
              }
            })
        }
    </div>
  )
}

export default MovieList