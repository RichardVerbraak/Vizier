const initialState = {
    movies: [],
    page: 1,
    details: [],
    cast: [],
    recommended: [],
    isLoading: true
}

// Change the state to everthing we add + grab the movies data from the action and add it to our state
const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            }
        case 'GET_DETAILS':
            return {
                ...state,
                details: action.details
            }
        case 'GET_MOVIE_CAST':
            return {
                ...state,
                cast: action.cast
            }
        case 'GET_RECOMMENDED':
            return {
                ...state,
                recommended: action.recommended
            }
        case 'LOADING_FINISHED':
            return {
                ...state,
                isLoading: action.isLoading
            }
        // case 'PAGE_CHANGE':
        //     return {
        //         ...state,
        //         page: action.pageNum
        //     }
        default:
            return state
    }
}

export default movieReducer