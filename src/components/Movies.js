import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'


// Used a route for Movies that is being rendered inside the Dashboard component
// Now Movies has access to the current URL

// Change later so it also listens for either popular movies or tv shows
// TODO: Fix spinning loader inside if img isnt there

const Movies = ({movies, watchlist, resetPage, isLoading, addToWatchList}) => {
    return (
        <div className="movies"> 
            {
            	movies.map((movie) => {
                    return (
                        <div key={movie.id} className="movies__item">
                            <Link
                                // key={movie.id}
                                to={`/movie/${movie.id}`}
                                // className="movies__item"
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
                            </Link>
                            
                            <button onClick={() => addToWatchList(movie)} className="movies__item--button">Add To WatchList</button> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Movies

