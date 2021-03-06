import React from 'react'
import { Link } from 'react-router-dom'

// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Moved Movies container here so it would have the 5 way grid everywhere this component is used
// Is now reused for Recommended as well

// Change later so it also listens for either popular movies or tv shows

const Shows = ({ shows, resetPage }) => {
	return (
		<div className='movies'>
			{shows.map((show) => {
				return (
					<Link
						key={show.id}
						to={`/tv/${show.id}`}
						className='movies__item'
						onClick={resetPage}
					>
						<img
							key={show.id}
							src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
							className='movies__item-img'
							alt={`A poster of ${show.title}`}
						></img>
					</Link>
				)
			})}
		</div>
	)
}

export default Shows
