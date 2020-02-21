import movieReducer from '../reducers/movies'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// If we are using redux dev tools its going to get setup, if not then it won't
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
// Combine reducers later on
const store = createStore(
    movieReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store