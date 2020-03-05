import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {pageChange} from '../actions/movies'

class Recommended extends React.Component {
    
    // Reset page when clicking recommended movie
    onClick = () => {
        this.props.pageChange(1)
    }
    
    render() {    
        return (
            <div className="movies"> 
                {
                    this.props.recommended.map((movie) => {
                        return (
                            <Link
                                key={movie.id}
                                to={`/movie/${movie.id}`}
                                className="movies__item"
                                onClick={this.onClick}
                            >
                                <img
                                    key={movie.id}
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    className="movies__item-img"
                                    alt={`A poster of ${movie.title}`}
                                ></img>
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
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageChange: (pageNum) => dispatch(pageChange(pageNum))
    }
}

const ConnectedRecommended = connect(mapStateToProps, mapDispatchToProps)(Recommended)

export default ConnectedRecommended