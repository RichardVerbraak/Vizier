import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { addToWatchList, removeFromWatchList } from '../actions/movies'

// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Change later so it also listens for either popular movies or tv shows
// TODO: Fix spinning loader inside if img isnt there

// Look at a cleaner faster solution for the add / remove watchlist button

const Movies = ({
	movies,
	watchlist,
	resetPage,
	loading,
	addWatchList,
	removeWatchList,
}) => {
	// console.log(watchlist)
	const watchlistIDs = []
	watchlist.forEach((movie) => {
		watchlistIDs.push(movie.id)
	})

	return (
		<div className='movies'>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className='movies__item'>
						<Link to={`/movie/${movie.id}`} onClick={resetPage}>
							{loading ? (
								<ClipLoader size={60} color={'#D72525'} loading={loading} />
							) : (
								<img
									key={movie.id}
									src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
									className='movies__item-img'
									alt={`A poster of ${movie.title}`}
								></img>
							)}
						</Link>
						{watchlistIDs.includes(movie.id) ? (
							<button
								onClick={() => removeWatchList(movie)}
								className='movies__item--button'
							>
								Remove
							</button>
						) : (
							<button
								onClick={() => addWatchList(movie)}
								className='movies__item--button'
							>
								Add To Watchlist
							</button>
						)}
					</div>
				)
			})}
			{Array(20 - movies.length).fill(<div className='movies__empty'></div>)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
		watchlist: state.watchlist,
		loading: state.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addWatchList: (movie) => dispatch(addToWatchList(movie)),
		removeWatchList: (movie) => dispatch(removeFromWatchList(movie)),
	}
}

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies)

export default ConnectedMovies
