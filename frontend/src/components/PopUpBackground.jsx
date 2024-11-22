import React, { useEffect, useState } from "react";
import { useVideoTrailer } from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";
import { usePopUpTrailer } from "../hooks/usePopUpTrailer";
import { options, VIDEO_PATH } from "../utils/constants";
import axios from "axios";

function PopUpBackground({id}) {

  const [movieKey, setMovieKey] = useState("");
  const {popUpValue, popUpName} = useSelector((store) => store.movie.popup);
  useEffect(()=>{

    const fetchData = async ()=>{
    try{
      const res = await axios.get(`${VIDEO_PATH}${id}/videos?language=en-US`, options);
      const allVideos = res.data.results;
      const trailerVideos = allVideos.filter((ele) => ele.type === "Trailer");

      console.log(allVideos, " ", id);
      
      setMovieKey(trailerVideos.length > 0 ? trailerVideos[0].key : allVideos[0].key)

  }
  catch(error)
  {
      console.log(error);
  }
    }
  if(popUpValue){
    fetchData();
  }
  else{
    setMovieKey("");
  }
  },[id, popUpValue])
  const trailerVideo = useSelector((store) => store.movie.movieTrailer);

  return (
    movieKey ?
    <div
   className = "w-full h-full relative flex justify-center items-center " >
      {
       <iframe
        className=  "w-[55vw] top-0 left-0 overflow-hidden inset-0 aspect-video "
        src={`https://www.youtube.com/embed/${movieKey}?si=E9Lwuyi3a7bFMAwv&autoplay=1`}
        allow='autoplay'
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
      }
     
    </div> : <>Loading...</>
  );
}

export default PopUpBackground;
