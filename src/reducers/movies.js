const initialState = {
    movies: [],
    shows: [],
    watchlist: [],
    currentPage: 1,
    details: [],
    cast: [],
    recommended: [],
    isLoading: true,
    totalPages: 0
}

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            }
        case 'GET_SHOWS':
            return {
                ...state,
                shows: action.shows
            }
        case 'GET_DETAILS':
            return {
                ...state,
                details: action.details
            }
        case 'GET_SHOW_DETAILS':
            return {
                ...state,
                details: action.details
            }
        case 'GET_MOVIE_CAST':
            return {
                ...state,
                cast: action.cast
            }
        case 'GET_SHOW_CAST':
            return {
                ...state,
                cast: action.cast
            }
        case 'GET_RECOMMENDED':
            return {
                ...state,
                recommended: action.recommended
            }
        case 'GET_RECOMMENDED_SHOWS':
            return {
                ...state,
                recommended: action.recommended
            }
        case 'GET_SEARCH_RESULTS':
            return {
                ...state,
                movies: action.movies
            }
        case 'SET_WATCH_LIST':
            return {
                ...state,
                watchlist: action.watchlist
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'LOADING_FINISHED':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'GET_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'GET_TOTAL_PAGES':
            return {
                ...state,
                totalPages: action.totalPages
            }
        default:
            return state
    }
}

export default movieReducer