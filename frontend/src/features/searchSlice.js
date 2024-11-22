import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "SearchMovies",
    initialState: {
        movieList: [],
        searchName: "",
    },
    reducers: {
        setMovieList: (state, action)=>{
            state.movieList = action.payload;
        },
        setSearchName: (state, action)=>{
            state.searchName = action.payload;
        },
    }
})

export const {setMovieList, setSearchName} = searchSlice.actions;
export default searchSlice.reducer