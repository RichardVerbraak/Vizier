import React from 'react'
import { connect } from 'react-redux'

import {startGetMovieDetails, startGetMovieCast, isLoading} from '../actions/movies'
import test from '../ph-rami.jpg'

import Navigation from './Navigation'
import Recommended from './Recommended'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

// FORMAT THIS

class MovieDetailPage extends React.Component {
    
    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCast(this.props.match.params.id)
    }

    render() {
        
        return (
            <>
                <Navigation></Navigation>                
                <div className="container">
                
                    <div className="movie">

                        <img className="movie__img" src={`https://image.tmdb.org/t/p/w500${this.props.details.poster_path}`}></img>
                        <div className="movie__content">

                            <div className="movie__heading">
                                <h1 className="movie__heading-main">{this.props.details.title}</h1>
                                <h2 className="movie__heading-sub">{this.props.details.tagline}</h2>
                            </div>
                                    
                            <div className="movie__details">
                                <p className="movie__details--genre">Drama | Crime</p>
                                <p className="movie__details--score">{this.props.details.vote_average} / 10</p>
                                <p className="movie__details--runtime">{this.props.details.runtime}min</p>
                            </div>
                                        
                            <div className="movie__overview">
                                <p className="movie__overview--text">
                                    {this.props.details.overview}
                                </p>
                            </div>

                            <div className="movie__cast">
                                <a>
                                    <img className="movie__cast--img" src={this.props.cast.length === 0 ? test : `https://image.tmdb.org/t/p/w185/${this.props.cast[0].profile_path}`}></img>
                                </a>
                                <a>
                                    <img className="movie__cast--img" src={test}></img>
                                </a>
                                <a>
                                    <img className="movie__cast--img" src={test}></img>
                                </a>
                                <a>
                                    <img className="movie__cast--img" src={test}></img>
                                </a>
                            </div>
                            
                            <div className="movie__links">
                                <a className="movie__links--watchlist btn btn__watchlist">Add to watchlist</a>
                                <a className="movie__links--watchlist btn btn__imdb" href={`https://www.imdb.com/title/${this.props.details.imdb_id}/`}>IMDB</a>
                                <a className="movie__links--watchlist btn btn__trailer">Trailer</a>
                            </div>

                        </div>
                    </div>
                }                 
                              
                    <Recommended id={this.props.match.params.id}></Recommended>
                    <Footer></Footer>
                </div>
            </>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.details,
        cast: state.cast
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => dispatch(startGetMovieDetails(id)),
        getMovieCast: (id) => dispatch(startGetMovieCast(id))
    }
}

const ConnectedMovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)

export default ConnectedMovieDetailPage