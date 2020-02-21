const initialState = {
    movies: []
}

// Change the state to everthing we add + grab the movies data from the action and add it to our state
const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MOVIES':
            console.log('reducer')
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state
    }
}

export default movieReducer