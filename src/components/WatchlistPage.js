import React from 'react'
import {connect} from 'react-redux'

import Navigation from './Navigation'
import MovieList from './MovieList'
import Category from './Category'
import Footer from './Footer'


class WatchListPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Navigation/>   
                <div className="container">
                    <Category title={'Your List'}></Category>
                    <MovieList movies={this.props.watchlist}/>
                    <Footer></Footer>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist
    }
}

const ConnectedWatchListPage = connect(mapStateToProps, undefined)(WatchListPage)

export default ConnectedWatchListPage

