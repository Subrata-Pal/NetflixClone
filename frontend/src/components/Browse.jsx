import React, {useEffect} from 'react'
import Header from './Header'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import {useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from '../utils/movieAPI'
import Search from './Search';
import { useVideoTrailer } from '../hooks/useVideoTrailer';

function Browse() {
  const user = useSelector((store)=> store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useVideoTrailer();


  useEffect(()=>{

  },[])
  useEffect(()=>{
    if(!user) navigate('/')
  },[user, navigate])

  return (
    <div>
      <Header/>
      {
        toggle ? <Search/>:(<><MainContainer/>
        <MovieContainer/></>)
      }
      
    </div>
  )
}
export default Browse