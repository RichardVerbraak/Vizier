import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
	getMovieDetails,
	getMovieCast,
	getRecommended,
	getPage,
} from '../actions/movies'

import ClipLoader from 'react-spinners/ClipLoader'

import Navigation from './Navigation'
import Category from './Category'
import Movie from './Movie'
import Recommended from './Recommended'
import Footer from './Footer'

// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons

//! Fetch data inside of the components and not all in this component?

class MovieDetailPage extends React.Component {
	// If there is a search query --> parse the page number --> Fetch data based on the page number
	componentDidMount() {
		if (this.props.location.search) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page

			this.props.getRecommended(this.props.match.params.id, parsed)
			this.props.getPage(parsed)
		} else {
			this.props.getMovieDetails(this.props.match.params.id)
			this.props.getMovieCast(this.props.match.params.id)
			this.props.getRecommended(this.props.match.params.id)
		}
	}

	// If statement to prevent infinite loop
	// If the new URL does not match the old one --> Fetch data again
	componentDidUpdate(prevProps) {
		if (
			this.props.match.params.id !== prevProps.match.params.id ||
			this.props.location.search !== prevProps.location.search
		) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page
			this.props.getMovieDetails(this.props.match.params.id)
			this.props.getMovieCast(this.props.match.params.id)
			this.props.getRecommended(this.props.match.params.id, parsed)
			this.props.getPage(parsed)
		}
	}

	render() {
		return (
			<Fragment>
				<Navigation />
				{this.props.loading && !this.props.details.length > 0 ? (
					<div className='loader'>
						<ClipLoader
							size={150}
							color={'#D72525'}
							loading={this.props.loading}
						/>
					</div>
				) : (
					<div className='container'>
						<Movie />
						<Category title={'Recommended'} />
						<Recommended />
						<Footer />
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
		loading: state.loading,
		details: state.details,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMovieDetails: (id) => dispatch(getMovieDetails(id)),
		getMovieCast: (id) => dispatch(getMovieCast(id)),
		getRecommended: (id, pageNum) => dispatch(getRecommended(id, pageNum)),
		getPage: (query) => dispatch(getPage(query)),
	}
}

const ConnectedMovieDetailPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieDetailPage)

export default ConnectedMovieDetailPage
