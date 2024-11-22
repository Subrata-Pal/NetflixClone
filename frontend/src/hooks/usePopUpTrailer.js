import axios from "axios";
import { useDispatch } from "react-redux";
import { setPopUp } from "../features/movieSlice";
import { useEffect } from "react";
import { VIDEO_PATH, options } from "../utils/constants";

export const usePopUpTrailer = (id) => {
  const dispatch = useDispatch();
    
  console.log(id);
  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await axios.get(`${VIDEO_PATH}${id}/videos?language=en-US`, options);
        console.log(res);
        const allVideos = res?.data?.results;
        const trailerVideos = allVideos.filter((ele) => ele.type === "Trailer");
        console.log("Inside hook", trailerVideos[0].key);
        dispatch(
          trailerVideos.length > 0
            ? setPopUp({ popUpTrailer: trailerVideos[0], done: true, popUpValue: true })
            : setPopUp({ popUpTrailer: trailerVideos[1], done: true, popUpValue: true })
        );
        console.log("Hook DOne")
      } catch (error) {
        console.log(error);
      }
    };

    if (id) fetchTrailer();
  }, [id, dispatch]);
};
