import React from 'react'
import Movies from './Movies'
import { connect } from 'react-redux'
import { startGetMovies, isLoading } from '../actions/movies'

class MovieList extends React.Component {
    
    componentDidMount() {
        const queryString = require('query-string')
        const parsed = queryString.parse(this.props.location.search)   
        this.props.getMovies(parsed.page)
    }

    render() {
        console.log(this.props.movies)
        return (
            <div className="movies">                       
                <Movies movies={this.props.movies} />
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

const ConnectedMoviesList = connect(mapStateToProps, mapDispatchToProps)(MovieList)

export default ConnectedMoviesList