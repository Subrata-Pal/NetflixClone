import axios from "axios";
import { options, VIDEO_PATH } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovieTrailer, setPopUp } from "../features/movieSlice";


export const useVideoTrailer = async (id)=>{
    const dispatch = useDispatch();
    const {done} = useSelector((store)=>store.movie.popup);
        try{
            const res = await axios.get(`${VIDEO_PATH}${id}/videos?language=en-US`, options);
            const allVideos = res.data.results;
            const trailerVideos = allVideos.filter((ele) => ele.type === "Trailer");

            
                dispatch(trailerVideos.length > 0 ? setMovieTrailer(trailerVideos[0]) : setMovieTrailer(allVideos[0]))
            
        }
        catch(error)
        {
            console.log(error);
        }
}