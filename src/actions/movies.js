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
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=880bbec69207f7697602ce098c1da63e&language=en-US&page=1')
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
    console.log('???')
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
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=880bbec69207f7697602ce098c1da63e&language=en-US`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieDetails(data))
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