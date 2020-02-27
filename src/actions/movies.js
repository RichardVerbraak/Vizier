const key = process.env.REACT_APP_API_KEY

const getMovies = (movies) => {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

// Get movies is a function that has access to dispatch thanks to thunk
// It first fetches the data and converts it to json, the dispatches the useable data to the reducer who will change the state
export const startGetMovies = () => {
    return (dispatch) => {         
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovies(data.results))
            dispatch(isLoading())            
        })
    }
}

export const isLoading = () => {
    return {
        type: 'LOADING_FINISHED',
        isLoading: false
    }
}

export const getMovieDetails = (details) => {
    return {
        type: 'GET_DETAILS',
        details
    }
}



export const startGetMovieDetails = (id) => {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieDetails(data))
            // dispatch(isLoading())
        })
    }
}

export const getMovieCast = (cast) => {
    return {
        type: 'GET_MOVIE_CAST',
        cast
    }
}

export const startGetMovieCast = (id) => {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieCast(data.cast))
            // dispatch(isLoading())
        })
    }
}

export const getRecommended = (recommended) => {
    return {
        type: 'GET_RECOMMENDED',
        recommended
    }
}

export const startGetRecommended = (id) => {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getRecommended(data.results))
        })
    }
}

// Show Movies
// const ShowMovies = () => {
//     return {
//         type: SHOW_MOVIES,        
//     }
// }

// // Filter by TV Shows
// const ShowTV = () => {
//     return {
//         type: SHOW_TV,
//     }
// }

// Filter by genre regardless if its movies or TV Shows

// Add a seperate state for your watchlist
// Add movie or show to list
// Remove movie or show from list

// Load next page of movies or shows

// Search through shows or movies

// Get all details when clicked on movie (need to pass id from the movie that was clicked)
// Get all details from tv show 