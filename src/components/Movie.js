import React from 'react'
import CastSlider from './CastSlider'
import {connect} from 'react-redux'
import { startGetMovieDetails, startGetMovieCast } from '../actions/movies'

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCast(this.props.match.params.id)
    }        

    render() {   
        return (
            <div className="movie">
                <img className="movie__img" src={`https://image.tmdb.org/t/p/w500${this.props.details.poster_path}`} alt={`A poster of ${this.props.details.title}`}></img>
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
                        <CastSlider></CastSlider>
                    </div>                            
                    
                    <div className="movie__links">
                        <a className="movie__links--watchlist btn btn__watchlist">Add to watchlist</a>
                        <a className="movie__links--watchlist btn btn__imdb" href={`https://www.imdb.com/title/${this.props.details.imdb_id}/`}>IMDB</a>
                        <a className="movie__links--watchlist btn btn__trailer">Trailer</a>
                    </div>
                </div>
            </div>
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

const ConnectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie)

export default ConnectedMovie