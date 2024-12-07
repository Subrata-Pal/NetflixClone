import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPopUp } from '../features/movieSlice';
import { usePopUpTrailer } from '../hooks/usePopUpTrailer';

function MovieCard({id, srcPath}) {
  const dispatch = useDispatch();
  const popUpValue = useSelector((store)=>store.movie.popup.popUpValue);
    const popUpId = useSelector((store)=>store.movie.popup.popUpId);
    const popUpTrailer = useSelector((store)=>store.movie.popup.popUpTrailer);
  

  function onClickHandler(e)
  {
    const imageId = e.currentTarget.dataset.id;
    dispatch(setPopUp({ popUpValue: true, popUpId: imageId}));
    console.log("Working now", imageId);
    console.log("Working now", popUpValue, popUpId, popUpTrailer.key);
  }
  return (
    <div className='rounded-md'>
        <div className='mr-3 bg-red-600 w-48 poster'>
          {
            srcPath &&  <img 
            onClick={onClickHandler}
            data-id={id}
            key={id}
            class=''
            src={srcPath} alt="no" />
          }
          </div>
    </div>
  )
}

export default MovieCard