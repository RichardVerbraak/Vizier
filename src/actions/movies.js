import database from '../firebase/firebase'

const key = process.env.REACT_APP_API_KEY

// URL-ize all the actions based on the route

// Get movies is a function that has access to dispatch thanks to thunk
// It first fetches the data and converts it to json, the dispatches the useable data to the reducer who will change the state
export const getMovies = (filter, pageNum = 1) => {
	return async (dispatch) => {
		try {
			setLoading()

			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${filter}?api_key=${key}&language=en-US&page=${pageNum}`
			)

			const data = await res.json()

			dispatch({
				type: 'GET_TOTAL_PAGES',
				payload: data.total_pages,
			})
			dispatch({
				type: 'GET_MOVIES',
				payload: data.results,
			})
		} catch (error) {
			dispatch({
				type: 'MOVIES_ERROR',
				payload: error.message,
			})
		}
	}
}

// Loading action is to set the state of isLoading to true when starting to fetch data (a bit messy, might refactor)
export const loading = () => {
	return {
		type: 'LOADING',
		isLoading: true,
	}
}

// Stops the loading spinner
export const isLoading = () => {
	return {
		type: 'LOADING_FINISHED',
		isLoading: false,
	}
}

// Fetches movie details --> dispatch the action when the data arrives
export const getMovieDetails = (id) => {
	return async (dispatch) => {
		try {
			setLoading()

			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`
			)

			const data = await res.json()

			dispatch({
				type: 'GET_DETAILS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'MOVIES_ERROR',
				payload: error.message,
			})
		}
	}
}

// Fetches cast --> dispatch the action when the data arrives
export const getMovieCast = (id) => {
	return async (dispatch) => {
		try {
			setLoading()

			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
			)

			const data = await res.json()

			dispatch({
				type: 'GET_MOVIE_CAST',
				payload: data.cast,
			})
		} catch (error) {
			dispatch({
				type: 'MOVIES_ERROR',
				payload: error.message,
			})
		}
	}
}

// Fetches recommended movies --> dispatch the action when the data arrives
export const getRecommended = (id, pageNum = 1) => {
	return async (dispatch) => {
		try {
			setLoading()

			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=880bbec69207f7697602ce098c1da63e&language=en-US&page=${pageNum}`
			)

			const data = await res.json()

			dispatch({
				type: 'GET_TOTAL_PAGES',
				payload: data.total_pages,
			})

			dispatch({
				type: 'GET_RECOMMENDED',
				payload: data.results,
			})
		} catch (error) {
			dispatch({
				type: 'MOVIES_ERROR',
				payload: error.message,
			})
		}
	}
}

// Fetches search results --> dispatch the action when data arrives
export const getSearchResults = (query, pageNum = 1) => {
	return async (dispatch) => {
		try {
			setLoading()
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=${pageNum}`
			)
			const data = await res.json()

			dispatch({
				type: 'GET_TOTAL_PAGES',
				payload: data.total_pages,
			})

			dispatch({
				type: 'GET_SEARCH_RESULTS',
				payload: data.results,
			})
		} catch (error) {
			dispatch({
				type: 'MOVIES_ERROR',
				payload: error.message,
			})
		}
	}
}

export const setWatchList = (watchlist) => {
	return {
		type: 'SET_WATCH_LIST',
		watchlist,
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
		return database
			.ref(`users/watchlist`)
			.once('value')
			.then((snapshot) => {
				const watchlist = []
				snapshot.forEach((childSnapshot) => {
					watchlist.push(childSnapshot.val())
				})
				dispatch(setWatchList(watchlist))
			})
			.then(() => {
				dispatch(isLoading())
			})
	}
}

// Gets the current URL page -- default is page 1
export const getPage = (page = 1) => {
	return {
		type: 'GET_PAGE',
		payload: page,
	}
}

export const setLoading = () => {
	return {
		type: 'SET_LOADING',
	}
}
