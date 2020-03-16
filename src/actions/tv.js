import {getTotalPages} from './movies'
import {isLoading, loading} from './movies'

const key = process.env.REACT_APP_API_KEY

// URL-ize all the actions based on the route

const getShows = (shows) => {
    return {
        type: 'GET_SHOWS',
        shows
    }
}

// Add dynamic value for sorting by popularity etc. and for page
// Get movies is a function that has access to dispatch thanks to thunk
// It first fetches the data and converts it to json, the dispatches the useable data to the reducer who will change the state
export const startGetShows = (filter, pageNum = 1) => {    
    return (dispatch) => {
        dispatch(loading())         
        fetch(`https://api.themoviedb.org/3/tv/${filter}?api_key=${key}&language=en-US&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getShows(data.results))
            dispatch(isLoading())            
        })
    }
}

export const getShowDetails = (details) => {
    return {
        type: 'GET_SHOW_DETAILS',
        details
    }
}

export const startGetShowDetails = (id) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getShowDetails(data))
            dispatch(isLoading())
        })
    }
}

export const getShowCast = (cast) => {
    return {
        type: 'GET_SHOW_CAST',
        cast
    }
}

export const startGetShowCast = (id) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getShowCast(data.cast))
            dispatch(isLoading())
        })
    }
}

export const getRecommendedShows = (recommended) => {
    return {
        type: 'GET_RECOMMENDED_SHOWS',
        recommended
    }
}

export const startGetRecommendedShows = (id, pageNum = 1) => {
    return (dispatch) => {
        dispatch(loading())
        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=880bbec69207f7697602ce098c1da63e&language=en-US&page=${pageNum}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(getTotalPages(data.total_pages))
            dispatch(getRecommendedShows(data.results))
            dispatch(isLoading())
        })
    }
}