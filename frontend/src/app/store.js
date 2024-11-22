import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import movieReducer from '../features/movieSlice';
import searchReducer from '../features/searchSlice';

export const store = configureStore({
    reducer: {
        app: userReducer,
        movie: movieReducer,
        searchMovie : searchReducer
    },
})