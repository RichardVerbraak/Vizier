import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { startGetMovies, isLoading } from '../actions/movies'


class Movies extends React.Component {

    componentDidMount() {        
        this.props.getMovies(this.props.page)
    }    

    render() {

        return (
            <div className="movies">
                {   
                    this.props.movies.map((movie) => {
                        return (
                            <Link key={movie.id} to={`/movie/${movie.id}`} className="movies__item">
                                <img
                                    key={movie.id}
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                                    className="movies__item-img"
                                    alt={`A poster of ${movie.title}`}
                                >
                                </img>
                            </Link>
                        )                      
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        page: state.page,
        isLoading: state.isLoading
    }
}

// 'Connect' the action to the component so it can be dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (pageNum) => dispatch(startGetMovies(pageNum)),
        isLoading: () => dispatch(isLoading())
    }
}

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies)

export default ConnectedMovies