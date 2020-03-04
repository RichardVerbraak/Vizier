import React from 'react'
import Movies from './Movies'
import { connect } from 'react-redux'
import { startGetMovies, isLoading } from '../actions/movies'

class MovieList extends React.Component {
    
    // Parses the query string (?page=2) to only the number 2
    // TODO: Move this back in the movies part and let this one only render?
    componentDidMount() {
        const queryString = require('query-string')
        const parsed = queryString.parse(this.props.location.search)   
        this.props.getMovies(parsed.page)
    }

    render() {
        return (                                  
            <Movies movies={this.props.movies} />                      
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