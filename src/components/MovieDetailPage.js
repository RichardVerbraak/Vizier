import React from 'react'
import { connect } from 'react-redux'
import { startGetMovieDetails, startGetMovieCast, startGetRecommended, getPage, addToWatchList } from '../actions/movies'

import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

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
    state = {
        loading: true
    }

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
                {this.props.isLoading ? 
                    <div className="loader">
                        <ClipLoader                    
                            size={150}
                            color={"#D72525"}
                            loading={!!this.props.isLoading}
                        />
                    </div>
                    :
                    <div className="container">                        
                        <Movie 
                            details={this.props.details}
                            addToWatchList={this.props.addToWatchList}
                        />
                        <Category title={'Recommended'}/>
                        <Recommended recommended={this.props.recommended}/>                                       
                        <Footer/>
                    </div>
                }                
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
        getPage: (query) => dispatch(getPage(query)),
        addToWatchList: (movie) => dispatch(addToWatchList(movie))
    }
}

const ConnectedMovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)

export default ConnectedMovieDetailPage