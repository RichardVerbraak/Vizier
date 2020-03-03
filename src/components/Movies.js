import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetMovies, isLoading } from '../actions/movies'

// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Change later so it also listens for either popular movies or tv shows

class Movies extends React.Component {    
    
    componentDidMount() {
        const queryString = require('query-string')
        const parsed = queryString.parse(this.props.location.search)   
        this.props.getMovies(parsed.page)
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