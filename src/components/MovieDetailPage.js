import React from 'react'
import { connect } from 'react-redux'
import { startGetMovieDetails, startGetMovieCast, startGetRecommended } from '../actions/movies'
import Navigation from './Navigation'
import Movie from './Movie'
import Recommended from './Recommended'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

// FORMAT THIS
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
                    
                    <div className="movie">
                        <Movie details={this.props.details} />                   
                    </div>                                
                              
                    <Recommended id={this.props.match.params.id} path={this.props.match.path}/>
                    <Footer id={this.props.match.params.id} page={this.props.page}/>
                </div>
            </>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.details,
        cast: state.cast,
        page: state.page
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