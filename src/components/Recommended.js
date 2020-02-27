import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { startGetRecommended } from '../actions/movies'
import Category from './Category'


class Recommended extends React.Component {

    // componentDidMount() {
    //     this.props.getRecommended(this.props.id)
    // }

    render() {
        return (
            <>
            <Category title={'Recommended'}></Category>
            <div className="movies">            
                {   
                    this.props.recommended.map((movie) => {
                        return (
                            <Link key={movie.id} to={`${movie.id}`}  className="movies__item">
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
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommended: state.recommended
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getRecommended: (id) => dispatch(startGetRecommended(id))
//     }
// }

const ConnectedRecommended = connect(mapStateToProps)(Recommended)

export default ConnectedRecommended