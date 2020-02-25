const initialState = {
    movies: [],
    details: [],
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
        case 'LOADING_FINISHED':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default movieReducer