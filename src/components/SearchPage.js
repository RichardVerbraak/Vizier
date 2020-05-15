import React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import Navigation from './Navigation'
import MovieList from './MovieList'
import Footer from './Footer'
import { startGetSearchResults, getPage } from '../actions/movies'

// Somehow, fetch data from the Redux store and pass that down to the components
// Pass handlers down to the Child components

// Maybe make a button that gets passed down in footer

// Helpful https://stackoverflow.com/questions/40352310/how-do-you-mix-componentdidmount-with-react-redux-connect
// https://codereview.stackexchange.com/questions/206902/react-container-component-to-fetch-paginated-data-for-a-stateless-table-componen

class SearchPage extends React.Component {
	// If there is a search query --> parse the page number --> Fetch data based on the page number
	componentDidMount() {
		if (this.props.location.search) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page

			this.props.getSearchResults(this.props.match.params.query, parsed)
			this.props.getPage(parsed)
		} else {
			this.props.getSearchResults(this.props.match.params.query)
			this.props.getPage()
		}
	}

	// If the search query changed --> Fetch data
	componentDidUpdate(prevProps) {
		if (this.props.match.params !== prevProps.match.params) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page

			this.props.getSearchResults(this.props.match.params.query, parsed)
			this.props.getPage(parsed)
		}
	}

	// Passed down MovieList and then to Movies
	resetPage = () => {
		this.props.getPage()
	}

	render() {
		return (
			<>
				<Navigation />
				{this.props.isLoading ? (
					<div className='loader'>
						<ClipLoader
							size={150}
							color={'#D72525'}
							loading={!!this.props.isLoading}
						/>
					</div>
				) : (
					<div className='container'>
						<MovieList
							isLoading={this.props.isLoading}
							resetPage={this.resetPage}
							movies={this.props.movies}
						/>
						<Footer />
					</div>
				)}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
		isLoading: state.isLoading,
		currentPage: state.currentPage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSearchResults: (query, page) =>
			dispatch(startGetSearchResults(query, page)),
		getPage: (query) => dispatch(getPage(query)),
	}
}

const ConnectedSearchPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPage)

export default ConnectedSearchPage
