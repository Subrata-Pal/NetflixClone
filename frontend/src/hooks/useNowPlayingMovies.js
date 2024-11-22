import {useDispatch} from 'react-redux';
import {addNowPlayingMovies} from '../features/movieSlice';
import {API_ENDPOINT_MOVIE, options} from '../utils/constants';
import axios from 'axios';

const useNowPlayingMovies = async ()=>{
    const dispatch =  useDispatch();
    try {
      const response = await axios.get(`${API_ENDPOINT_MOVIE}/now_playing`, options);
      dispatch(addNowPlayingMovies(response.data.results));
    } catch (error) {
      console.error(error);
    }
  }

  export default useNowPlayingMovies;