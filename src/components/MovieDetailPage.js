import React from 'react'
import { connect } from 'react-redux'
import { startGetMovieDetails, startGetMovieCast, startGetRecommended, getPage } from '../actions/movies'
import Navigation from './Navigation'
import Category from './Category'
import Movie from './Movie'
import Recommended from './Recommended'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

class MovieDetailPage extends React.Component {

    // If there is a search query --> parse the page number --> Fetch data based on the page number
    componentDidMount() {
        if (this.props.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page

            this.props.getRecommended(this.props.match.params.id ,parsed)
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
        
        if(this.props.match.params.id !== prevProps.match.params.id || this.props.location.search !== prevProps.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page

            this.props.getMovieDetails(this.props.match.params.id)
            this.props.getMovieCast(this.props.match.params.id)
            this.props.getRecommended(this.props.match.params.id ,parsed)
            this.props.getPage(parsed)
        }
    }

    render() {
        return (            
            <>
                <Navigation/>             
                <div className="container">              
                    {this.props.isLoading ? 
                        <div>Loading...</div> :
                        <>
                            <Movie details={this.props.details}/>
                            <Category title={'Recommended'}/>
                            <Recommended recommended={this.props.recommended}/>                            
                        </>
                    }
                    <Footer/>
                </div>
            </>      
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommended: state.recommended,
        page: state.page,
        details: state.details,
        cast: state.cast,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => dispatch(startGetMovieDetails(id)),
        getMovieCast: (id) => dispatch(startGetMovieCast(id)),
        getRecommended: (id, pageNum) => dispatch(startGetRecommended(id, pageNum)),
        getPage: (query) => dispatch(getPage(query))
    }
}

const ConnectedMovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)

export default ConnectedMovieDetailPage