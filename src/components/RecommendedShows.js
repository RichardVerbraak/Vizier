import React from 'react'
import { Link } from 'react-router-dom'

// Convert to functional component

class RecommendedShows extends React.Component {
	render() {
		if (this.props.recommended.length > 0) {
			return (
				<div className='movies'>
					{this.props.recommended.map((show) => {
						return (
							<Link
								key={show.id}
								to={`/tv/${show.id}`}
								className='movies__item'
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
		return (
			<div>
				<h1>Nothing here!</h1>
			</div>
		)
	}
}

export default RecommendedShows
