import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { startSetWatchList } from '../actions/movies'

import ClipLoader from 'react-spinners/ClipLoader'

import Navigation from './Navigation'
import MovieList from './MovieList'
import Category from './Category'
import Footer from './Footer'

class WatchListPage extends React.Component {
	componentDidMount() {
		console.log(this.props.watchlist)
		this.props.setWatchList()
	}

	render() {
		return (
			<Fragment>
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
						<Category title={'Your List'}></Category>
						<MovieList movies={this.props.watchlist} />
						<Footer></Footer>
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		watchlist: state.watchlist,
		isLoading: state.isLoading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setWatchList: () => dispatch(startSetWatchList()),
	}
}

const ConnectedWatchListPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(WatchListPage)

export default ConnectedWatchListPage
