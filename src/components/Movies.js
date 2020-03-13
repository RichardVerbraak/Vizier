import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'


// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Moved Movies container here so it would have the 5 way grid everywhere this component is used
// Is now reused for Recommended as well

// Change later so it also listens for either popular movies or tv shows

const Movies = ({movies, resetPage, isLoading, addToWatchList}) => {
    return (
        <div className="movies"> 
            {
            	movies.map((movie, index) => {
                    return (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            className="movies__item"
                            onClick={resetPage}
                        >                        
                        {isLoading ? 
                        <ClipLoader                    
                            size={60}
                            color={"#D72525"}
                            loading={!!isLoading}
                        /> 
                        : 
                            <img
                                key={movie.id}
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                className="movies__item-img"
                                alt={`A poster of ${movie.title}`}
                            ></img>}
                            <button onClick={addToWatchList(movie, index)} className="movies__item--button">Add To WatchList</button>                            
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Movies