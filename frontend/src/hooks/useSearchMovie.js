import { options, SEARCH_MOVIE_PATH } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovieList } from '../features/searchSlice';

export const useSearchMovie = async(searchMovie) =>{
    const dispatch = useDispatch();
    try{
        const res = await axios.get(`${SEARCH_MOVIE_PATH}${searchMovie}&language=en-US&page=1`, options);
        console.log(res);
        dispatch(setMovieList(res.data.results));
      }
      catch(error)
      {
        console.log(error);
      }
}
