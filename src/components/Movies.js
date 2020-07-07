import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Change later so it also listens for either popular movies or tv shows
// TODO: Fix spinning loader inside if img isnt there

// Look at a cleaner faster solution for the add / remove watchlist button

const Movies = ({
	movies,
	watchlist,
	resetPage,
	isLoading,
	addWatchList,
	removeWatchList,
}) => {
	// console.log(watchlist)
	const watchlistIDs = []
	watchlist.forEach((movie) => {
		watchlistIDs.push(movie.id)
	})
	console.log(watchlistIDs)

	return (
		<div className='movies'>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className='movies__item'>
						<Link to={`/movie/${movie.id}`} onClick={resetPage}>
							{isLoading ? (
								<ClipLoader size={60} color={'#D72525'} loading={!!isLoading} />
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

export default Movies
