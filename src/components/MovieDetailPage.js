import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetMovieDetails, startGetMovieCast, startGetRecommended } from '../actions/movies'
import Category from './Category'
import Navigation from './Navigation'
import Movie from './Movie'
import MovieList from './MovieList'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

class MovieDetailPage extends React.Component {
    
    // Fetch movies and cast based on the ID in the url
    // Considerably faster when fetching recommended data in here?
    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCast(this.props.match.params.id)
        this.props.getRecommended(this.props.match.params.id)        
    }

    render() {
        return (
            <>
                <Navigation/>                
                <div className="container">              
                    <Movie details={this.props.details} />                                                   
                    
                    <Category title={'Recommended'}/>
                    <Route key={this.props.location.search} component={MovieList} movies={this.props.details}/>
                    <Route key={this.props} component={Footer}></Route>
                </div>
            </>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.details,
        cast: state.cast,
        page: state.page,
        recommended: state.recommended
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => dispatch(startGetMovieDetails(id)),
        getMovieCast: (id) => dispatch(startGetMovieCast(id)),
        getRecommended: (id) => dispatch(startGetRecommended(id))
    }
}

const ConnectedMovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)

export default ConnectedMovieDetailPage