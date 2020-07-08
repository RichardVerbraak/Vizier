import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import ClipLoader from 'react-spinners/ClipLoader'
import Navigation from './Navigation'
import Movies from './Movies'
import Footer from './Footer'
import { getSearchResults, getPage } from '../actions/movies'

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
						<Movies />
						<Footer />
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSearchResults: (query, page) => dispatch(getSearchResults(query, page)),
		getPage: (query) => dispatch(getPage(query)),
	}
}

const ConnectedSearchPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPage)

export default ConnectedSearchPage
