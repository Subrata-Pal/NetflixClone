import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopUp } from '../features/movieSlice';
import PopUpBackground from './PopUpBackground';

function MoviePopup() {
    const dispatch = useDispatch();
    const {popUpValue, popUpId, popUpName} = useSelector((store)=>store.movie.popup);
    function handler(){
        console.log("Closing")
        dispatch(setPopUp({ popUpValue: false, popUpId: "", popUpTrailer: []}));
    }

    return (
    
      <div class=''>
      <div id="default-modal" tabindex="-1" aria-hidden="true" class={`${popUpValue ? "": "hidden"} overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-0 z-50 justify-center items-center w-[70vw] md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div class="relative p-4 w-full max-w-8xl max-h-full">
             
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                 
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <button type="button" onClick={handler} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
               
                  <div class="p-4 md:p-5 space-y-4">
                   { popUpValue && <PopUpBackground id = {popUpId}/>}
                  </div>
              </div>
          </div>
      </div>
      </div>
        )
}

export default MoviePopup