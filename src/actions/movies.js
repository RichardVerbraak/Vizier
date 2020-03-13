import database from '../firebase/firebase'

const key = process.env.REACT_APP_API_KEY

// URL-ize all the actions based on the route


const getMovies = (movies) => {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

// Add dynamic value for sorting by popularity etc. and for page
// Get movies is a function that has access to dispatch thanks to thunk
// It first fetches the data and converts it to json, the dispatches the useable data to the reducer who will change the state
export const startGetMovies = (pageNum = 1) => {
    return (dispatch) => {        
        dispatch(loading()) 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getMovies(data.results))
            dispatch(isLoading())            
        })
    }
}

// Loading action is to set the state of isLoading to true when starting to fetch data (a bit messy, might refactor)
export const loading = () => {
    return {
        type: 'LOADING',
        isLoading: true
    }
}

// Stops the loading spinner
export const isLoading = () => {
    return {
        type: 'LOADING_FINISHED',
        isLoading: false
    }
}

// Passes details to reducer
export const getMovieDetails = (details) => {
    return {
        type: 'GET_DETAILS',
        details
    }
}

// Fetches movie details --> dispatch the action when the data arrives
export const startGetMovieDetails = (id) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieDetails(data))
            dispatch(isLoading())
        })
    }
}

// Passes cast to reducer
export const getMovieCast = (cast) => {
    return {
        type: 'GET_MOVIE_CAST',
        cast
    }
}

// Fetches cast --> dispatch the action when the data arrives
export const startGetMovieCast = (id) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieCast(data.cast))
            dispatch(isLoading())
        })
    }
}

// Passes recommended movies to reducer
export const getRecommended = (recommended) => {
    return {
        type: 'GET_RECOMMENDED',
        recommended
    }
}

// Fetches recommended movies --> dispatch the action when the data arrives
export const startGetRecommended = (id, pageNum = 1) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=880bbec69207f7697602ce098c1da63e&language=en-US&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getRecommended(data.results))
            dispatch(isLoading())
        })
    }
}

// Passes search results to reducer
export const getSearchResults = (movies) => {
    return {
        type: 'GET_SEARCH_RESULTS',
        movies
    }
}

// Fetches search results --> dispatch the action when data arrives
export const startGetSearchResults = (query, pageNum = 1) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getSearchResults(data.results))
            dispatch(isLoading())
        })
    }
}

export const saveToRedux = (id ,movie) => {
    return {
        type: 'SAVE_TO_REDUX',
        movie
    }
}

export const addToWatchList = (movie) => {
    return (dispatch) => {
        database.ref(`users/movies/movie`).push(movie)
        .then(() => {
            dispatch(saveToRedux(movie))
        })    
    }
}

// Gets the current URL page -- default is page 1
export const getPage = (page = 1) => {
    return {
        type: 'GET_PAGE',
        currentPage: page
    }
}

// Gets the total pages received from the API
// This is done so there won't be more pagination buttons than needed
export const getTotalPages = (totalPages) => {
    return {
        type: 'GET_TOTAL_PAGES',
        totalPages
    }
}