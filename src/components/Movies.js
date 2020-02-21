import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { startGetMovies } from '../actions/movies'

// Make stateless functional component that gets props from a class component that holds state and pass that in here to render the movie
// Use map or forEach to loop through data and make an item for each one
// Presentational component (reads the data from the props) 
class Movies extends React.Component {
    componentDidMount() {
        console.log('mounted')
        this.props.startGetMovies()
    }

    render() {
        return (
            <div className="movies">
                {   
                    this.props.movies.map((movie) => {
                        return (
                            <Link to="/movie" className="movies__item">
                                <img
                                    key={movie}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    className="movies__item-img"
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
        movies: state.movies
    }
}

export default connect(mapStateToProps, {startGetMovies})(Movies)