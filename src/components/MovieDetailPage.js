import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetMovieDetails, startGetMovieCast, startGetRecommended } from '../actions/movies'
import Category from './Category'
import Navigation from './Navigation'
import Movie from './Movie'
import RecommendedList from './RecommendedList'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

class MovieDetailPage extends React.Component {

    render() {
        return (
            <>
                <Navigation/>                
                <div className="container">              
                    <Route component={Movie}/>
                    <Category title={'Recommended'}/>
                    <Route key={this.props.location.search} component={RecommendedList}/>
                    <Route key={this.props.page} component={Footer}/>
                </div>
            </>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommended: state.recommended,
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => dispatch(startGetMovieDetails(id)),
        getMovieCast: (id) => dispatch(startGetMovieCast(id)),
        getRecommended: (id, pageNum) => dispatch(startGetRecommended(id, pageNum))
    }
}

const ConnectedMovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)

export default ConnectedMovieDetailPage