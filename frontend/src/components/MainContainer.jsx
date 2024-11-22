import React from 'react'
import VideoBackground from './VideoBackground'
import { TitleBackground } from './TitleBackground'
import { useSelector } from 'react-redux'
import { VIDEO_PATH } from '../utils/constants'


function MainContainer() {
  const nowPlayingMovie = useSelector((store)=> store.movie.nowPlayingMovies);

  if(nowPlayingMovie.length == 0) return;

  const {id, original_title, overview} = nowPlayingMovie[0];
  
  return (
    <div className=''>
        <VideoBackground id = {id}/>
        <TitleBackground  title = {original_title} overview = {overview}/>
    </div>
  )
}

export default MainContainer