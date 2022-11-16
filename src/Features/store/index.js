
import { configureStore } from "@reduxjs/toolkit";
import { movies } from "../Movies/MoviesSlice";

export const store = configureStore({
    reducer : {      
        movies : movies
    }
})