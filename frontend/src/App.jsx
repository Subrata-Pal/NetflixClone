import { useState } from 'react'
import Body from './components/Body'
import { Toaster } from 'react-hot-toast';
import MoviePopup from './components/MoviePopup';

function App() {

  return (
    <div>
      <Body/>
      <Toaster/>
     <MoviePopup/>
    </div>
  )
}

export default App
