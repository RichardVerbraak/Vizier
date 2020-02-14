import React from 'react'
import image from '../ph-mrrobot.jpg'
import cast from '../ph-rami.jpg'

import Movies from './Movies'
import Footer from './Footer'

// Rename to movie page for different containers (grid?)
// Make a seperate component for the movie image so it can be reused?
// Maybe make <a> tags of the genre tags, to give a page based on genre clicked?
// Reaname later to just detail page since I have both movies and tv shows

// Add genre in with jsx and a | after every genre
// Add svg icons in the buttons 

export default class MovieDetailPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="movie">
                    <img className="movie__img" src={image}></img>
                    <div className="movie__content">
                        <div className="movie__heading">
                            <h1 className="movie__heading-main">Mr. Robot</h1>
                            <h2 className="movie__heading-sub">The fight against evil</h2>
                        </div>
                        
                        <div className="movie__details">
                            <p className="movie__details--genre">Drama | Crime</p>
                            <p className="movie__details--score">9.5 / 10</p>
                            <p className="movie__details--runtime">44 min | 45 episodes</p>
                        </div>
                        
                        <div className="movie__overview">
                            <p className="movie__overview--text">
                                A contemporary and culturally resonant drama about a young programmer, Elliot, 
                                who suffers from a debilitating anti-social disorder and decides that he can only connect to people by hacking them.
                                He wields his skills as a weapon to protect the people that he cares about. 
                                Elliot will find himself in the intersection between a cybersecurity firm he works for and the underworld organizations 
                                that are recruiting him to bring down corporate America.
                            </p>
                        </div>

                        <div className="movie__cast">
                            <a>
                                <img className="movie__cast--img" src={cast}></img>
                            </a>
                            <a>
                                <img className="movie__cast--img" src={cast}></img>
                            </a>
                            <a>
                                <img className="movie__cast--img" src={cast}></img>
                            </a>
                            <a>
                                <img className="movie__cast--img" src={cast}></img>
                            </a>
                        </div>
            
                        <div className="movie__links">
                            <a className="movie__links--watchlist btn btn__watchlist">Add to watchlist</a>
                            <a className="movie__links--watchlist btn btn__imdb">IMDB</a>
                            <a className="movie__links--watchlist btn btn__trailer">Trailer</a>
                        </div>
                    </div>
                </div>
                <Movies></Movies>
                <Footer></Footer>
            </div>           
        )
    }
}