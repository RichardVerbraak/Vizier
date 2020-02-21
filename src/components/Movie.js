import React from 'react'
import { connect } from 'react-redux'
import { startGetMovies } from '../actions/movies'


// Updating state in the lifecycle method will trigger another render but it happens before the browser updates the screen
// The user wont see the 'intermediate' state in between,

// Dont forget to return the fetch data next time!

// When we have the data, dispatch the action and set the state
class Movie extends React.Component {    
    
    // Call the function to start loading movies
    componentDidMount() {
        console.log('mounted')
        this.props.startGetMovies()
    }

    render() {
        return (
            <div>
                {this.props.movies.map((movie) => {
                    return <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie}></img>
                })}
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {startGetMovies})(Movie)