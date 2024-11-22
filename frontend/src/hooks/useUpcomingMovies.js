import axios, { Axios } from "axios";
import { options } from "../utils/constants";
import { API_ENDPOINT_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../features/movieSlice";

const useUpcomingMovies = async ()=>{
    const dispatch = useDispatch();
    try{
        const res = await axios.get(`${API_ENDPOINT_MOVIE}/upcoming`,  options)
        dispatch(addUpcomingMovies(res.data.results));
    }
    catch(error)
    {
        console.log(error);
    }
}

export default useUpcomingMovies;