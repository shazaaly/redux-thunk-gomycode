import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieApiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";
/* Async Action Creator */
export const asyncFetchMovies = createAsyncThunk('movies/asyncFetchMovies',
    async () => {
        const response = await movieApi.get(`search/movie?api_key=${MovieApiKey}&query=harry`)
        return (response.data.results)

    })

export const asyncFectchSeries = createAsyncThunk('series/asyncFectchSeries',
    async () => {
        const response = await movieApi.get
            (`search/tv?api_key=${MovieApiKey}&language=en-US&page=1&include_adult=false&query=friends`)
        return (response.data.results)

    })

export const asyncFetchMovieDetails =
    createAsyncThunk('details/asyncFetchMovieDetails', async (id) => {
        const response = await movieApi.get(`movie/${id}?api_key=${MovieApiKey}&language=en-US`)
        //  console.log(response) => {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}data: {adult: false, backdrop_path: '/t3LicFpYHeYpwqm7L5wDpd22hL5.jpg', belongs_to_collection: {…}, budget: 125000000, genres: Array(2), …}headers: AxiosHeaders {access-control-allow-origin: '*', access-control-expose-headers: '*', alt-svc: 'h3=":443"; ma=86400', cache-control: 'public, max-age=28800', content-encoding: 'br', …}request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}status: 200statusText: ""[[Prototype]]: Object
        return response.data;

    })

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrShow:{}

}
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // addMovies: (state, payload) => {
        //     state.movies = payload

        // }

    },
    extraReducers: (builder) => {
        builder.addCase(asyncFetchMovies.fulfilled, (state, { payload }) => {
            // console.log(payload);
            return { ...state, movies: { payload } }

        }) // <------- HERE

        builder.addCase(asyncFectchSeries.fulfilled, (state, { payload }) => {
            // console.log(payload);
            return { ...state, series: { payload } }

        }) // <------- HERE

        builder.addCase(asyncFetchMovieDetails.fulfilled, (state, { payload }) => {
          
            return  {...state , selectedMovieOrShow:{payload}}


        })
    }

})

export const getAllMovies = state => state.movies.movies
export const getAllSeries = state => state.movies.series
export const getSelected = state => state.movies.selectedMovieOrShow
export const movies = moviesSlice.reducer
export const moviesActions = moviesSlice.actions