import axios, { Axios } from "axios";
import { options } from "../utils/constants";
import { API_ENDPOINT_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../features/MovieSlice";

const usePopularMovies = async ()=>{
    const dispatch = useDispatch();
    try{
        const res = await axios.get(`${API_ENDPOINT_MOVIE}/popular`,  options)
        dispatch(addPopularMovies(res.data.results));
    }
    catch(error)
    {
        console.log(error);
    }
}

export default usePopularMovies;