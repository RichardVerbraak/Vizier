import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { startSetWatchList } from '../actions/movies'

import ClipLoader from 'react-spinners/ClipLoader'

import Navigation from './Navigation'
import Movies from './Movies'
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
						<Category title={'Your List'}></Category>
						<Movies movies={this.props.watchlist} />
						<Footer />
					</div>
				)}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		watchlist: state.watchlist,
		loading: state.loading,
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
