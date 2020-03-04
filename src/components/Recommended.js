import React from 'react'
import { Link } from 'react-router-dom'

const Recommended = (props) => {    

    return (
        <div className="movies"> 
            {
            	props.recommended.map((movie) => {
                    return (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            className="movies__item"
                            onClick={props.onClick}
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

export default Recommended