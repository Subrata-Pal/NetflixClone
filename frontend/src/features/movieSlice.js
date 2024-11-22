import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        toggle: false,
        movieTrailer: [],
        popup: {
            popUpValue: false,
            popUpId : "",
            popUpName: "",
            done: false
        },
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
        setToggle : (state, action)=>{
            state.toggle = action.payload;
        },
        setMovieTrailer: (state, action)=>{
            state.movieTrailer = action.payload;
        },
        setPopUp: (state, action)=>{
            state.popup.popUpValue = action.payload.popUpValue;
            state.popup.popUpId = action.payload.popUpId;
            state.popup.popUpName = action.payload.popUpName;
            state.popup.done = action.payload.done;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, setToggle, setMovieTrailer, setPopUp} = movieSlice.actions;
export default movieSlice.reducer;