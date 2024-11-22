import axios, { Axios } from "axios";
import { options } from "../utils/constants";
import { API_ENDPOINT_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../features/MovieSlice";

const useTopRatedMovies = async ()=>{
    const dispatch = useDispatch();
    try{
        const res = await axios.get(`${API_ENDPOINT_MOVIE}/top_rated`,  options)
        dispatch(addTopRatedMovies(res.data.results));
    }
    catch(error)
    {
        console.log(error);
    }
}

export default useTopRatedMovies