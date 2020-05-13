import database from '../firebase/firebase'

const key = process.env.REACT_APP_API_KEY

// URL-ize all the actions based on the route


const getMovies = (movies) => {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

// Get movies is a function that has access to dispatch thanks to thunk
// It first fetches the data and converts it to json, the dispatches the useable data to the reducer who will change the state
export const startGetMovies = (filter, pageNum = 1) => {
    return (dispatch) => {             
        dispatch(loading()) 
        fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=${key}&language=en-US&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getMovies(data.results))          
        }).then(() => {
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
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`)
        .then((response) => {
            dispatch(loading())
            return response.json()
        })
        .then((data) => {
            dispatch(getMovieDetails(data))
        }).then(() => {
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
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
        .then((response) => {
            dispatch(loading())
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
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=880bbec69207f7697602ce098c1da63e&language=en-US&page=${pageNum}`)
        .then((response) => {
            dispatch(loading())
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getRecommended(data.results))
        }).then(() => {
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
        }).then(() => {
            dispatch(isLoading())
        })
    }
}

export const setWatchList = (watchlist) => {
    return {
        type: 'SET_WATCH_LIST',
        watchlist
    }
}

// Only add movies to firebase and then only populate the watchlist when the page loads?
export const addToWatchList = (movie) => {
    return () => {
        database.ref(`users/watchlist/`).push(movie)
    }
}

export const removeFromWatchList = (movie) => {
    return () => {
        database.ref(`users/watchlist/`).remove()
    }
}

// TODO: Structure the watchlist differently so it has its own key/id as to avoid pushing on the same movies to the watchlist
export const startSetWatchList = () => {
    return (dispatch) => {
        return database.ref(`users/watchlist`).once('value')
        .then((snapshot) => {
            const watchlist = []
            snapshot.forEach((childSnapshot) => {
                watchlist.push(childSnapshot.val())
            }) 
            dispatch(setWatchList(watchlist))
        }).then(() => {
            dispatch(isLoading())
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