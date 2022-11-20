import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieApiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";
/* Async Action Creator */
export const asyncFetchMovies = createAsyncThunk('movies/asyncFetchMovies',
    async () => {
        const response = await movieApi.get(`?api_key=${MovieApiKey}&query=harry`)
        return (response.data.results)

    })

const initialState = {
    movies: {}

}
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, payload) => {
            state.movies = payload

        }

    },
    extraReducers:{
        [asyncFetchMovies.pending]: ()=>{
            console.log('Pending');
        },
        [asyncFetchMovies.fulfilled]: (state , {payload})=>{
            return 
            console.log( payload)
            
        },
        [asyncFetchMovies.rejected]: ()=>{
            console.log('PeFailed');
        },

    }
})
export const getAllMovies = state => state.movies.movies
export const movies = moviesSlice.reducer
export const moviesActions = moviesSlice.actions