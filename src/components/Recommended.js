import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Convert to functional component
// Also change it so recommended tab doesnt show when there arent any

const Recommended = ({ recommended }) => {
	if (recommended.length > 0) {
		return (
			<div className='movies'>
				{recommended.map((movie) => {
					return (
						<Link
							key={movie.id}
							to={`/movie/${movie.id}`}
							className='movies__item'
						>
							<img
								key={movie.id}
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								className='movies__item-img'
								alt={`A poster of ${movie.title}`}
							></img>
						</Link>
					)
				})}
			</div>
		)
	}
	return (
		<div>
			<h1>Nothing here!</h1>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		recommended: state.recommended,
	}
}

const ConnectedRecommended = connect(mapStateToProps, undefined)(Recommended)

export default ConnectedRecommended
