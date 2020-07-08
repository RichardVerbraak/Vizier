import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ClipLoader from 'react-spinners/ClipLoader'

import Navigation from './Navigation'
import Filter from './Filter'
import MovieList from './MovieList'
import Footer from './Footer'

import {
	getMovies,
	getPage,
	addToWatchList,
	removeFromWatchList,
	startSetWatchList,
} from '../actions/movies'
import Category from './Category'

// Helpful https://stackoverflow.com/questions/40352310/how-do-you-mix-componentdidmount-with-react-redux-connect
// https://codereview.stackexchange.com/questions/206902/react-container-component-to-fetch-paginated-data-for-a-stateless-table-componen

class HomePage extends React.Component {
	// If there is a search query --> parse the page number --> Fetch data based on the page number
	componentDidMount() {
		const filter = this.props.match.params.name

		if (this.props.location.search) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page

			this.props.getMovies(filter, parsed)
			this.props.getPage(parsed)
			this.props.setWatchList()
		} else {
			this.props.getMovies(filter)
			this.props.setWatchList()
		}
	}

	// If the search query changed OR the filter --> Fetch data
	componentDidUpdate(prevProps) {
		const filter = this.props.match.params.name

		if (
			this.props.location.search !== prevProps.location.search ||
			this.props.match.params.name !== prevProps.match.params.name
		) {
			const queryString = require('query-string')
			const parsed = queryString.parse(this.props.location.search).page

			this.props.getMovies(filter, parsed)
			this.props.getPage(parsed)
		}
	}

	// Passed down MovieList and then to Movies
	resetPage = () => {
		this.props.getPage()
	}

	render() {
		return (
			<Fragment>
				<Navigation />
				{this.props.loading ? (
					<div className='loader'>
						<ClipLoader
							size={150}
							color={'#D72525'}
							loading={this.props.loading}
						/>
					</div>
				) : (
					<div className='container'>
						<Category
							filter={<Filter />}
							title={this.props.match.params.name}
							media={'movies'}
						/>
						<MovieList
							addWatchList={this.props.addWatchList}
							removeWatchList={this.props.removeWatchList}
							resetPage={this.resetPage}
							movies={this.props.movies}
							watchlist={this.props.watchlist}
						/>
						<Footer />
					</div>
				)}
			</Fragment>
		)
	}
}

// Don't pass props down in all of the components just use redux??

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
		watchlist: state.watchlist,
		loading: state.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMovies: (filter, page) => dispatch(getMovies(filter, page)),
		getPage: (query) => dispatch(getPage(query)),
		addWatchList: (movie) => dispatch(addToWatchList(movie)),
		removeWatchList: (movie) => dispatch(removeFromWatchList(movie)),
		setWatchList: () => dispatch(startSetWatchList()),
	}
}

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default ConnectedHomePage
