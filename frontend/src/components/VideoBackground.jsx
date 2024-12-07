import React, { useEffect } from "react";
import { useVideoTrailer } from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

function VideoBackground({id}) {
  const {popUpValue} = useSelector((store)=>store.movie.popup);
  useVideoTrailer(id);
  const trailerVideo = useSelector((store) => store.movie.movieTrailer);
  const key = trailerVideo.key;

  return (
    <div
   className = "w-screen h-screen relative video-background">
      {
        key &&  <iframe
        className= "w-full inset-0 aspect-video "
        src={`https://www.youtube.com/embed/${key}?si=E9Lwuyi3a7bFMAwv&autoplay=1&mute=1`}
        allow='autoplay'
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
      }
     
    </div>
  );
}

export default VideoBackground;
