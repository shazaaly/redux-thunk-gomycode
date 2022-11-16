

import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3/search/movie'
})

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false