import React, {useState} from 'react'
import { options, SEARCH_MOVIE_PATH } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieList, setSearchName } from '../features/searchSlice';
import MovieList from './MovieList';

function Search() {
  const dispatch = useDispatch();
  const searchMovieList = useSelector((store) => store.searchMovie.movieList);
  const name = useSelector((store) => store.searchMovie.searchName);
  console.log(searchMovieList);

  const [searchMovie, setSearchMovie] = useState("");
  async function submitHandler(e)
  {
    e.preventDefault();
    try{
        const res = await axios.get(`${SEARCH_MOVIE_PATH}${searchMovie}&language=en-US&page=1`, options);
        console.log(res);
        dispatch(setMovieList(res.data.results));
        dispatch(setSearchName(searchMovie));
      }
      catch(error)
      {
        console.log(error);
      }

      setSearchMovie("");
  }

  return (
    <div className=' w-full h-screen bg-black'>
        <div className='w-[50vw] mx-auto pt-[10%] search-box'>
          <form action="" className='flex' onSubmit={submitHandler}>
            <input value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} className='w-full block p-2 rounded-md border border-black' type="text" placeholder='Search Movies'/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-md'>Search</button>
          </form>
        </div>
      <div className=' h-[50%] p-6 bg-black pt-16'>
        <h1 className='text-3xl text-white mb-4 search-heading'>{name.toUpperCase()}</h1>
        <MovieList movies={searchMovieList}/>
      </div>
    </div>

   
  )
}

export default Search