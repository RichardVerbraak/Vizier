import React from 'react'
import Navigation from './Navigation'
import Category from './Category'
import { Link } from 'react-router-dom'
import image from '../ph-mrrobot.jpg'
import Footer from './Footer'


export default class Watchlist extends React.Component {
    render() {
        return (
            <>
                <Navigation></Navigation>   
                <div className="container">
                    <Category></Category>
                    <div className="movies">

                        <Link to="/movie" className="movies__item">
                            <img src={image} className="movies__item-img"></img>
                        </Link>
                        <a className="movies__item">
                            <img src={image} className="movies__item-img"></img>
                        </a>
                        <a className="movies__item">
                            <img src={image} className="movies__item-img"></img>
                        </a>
                        <a className="movies__item">
                            <img src={image} className="movies__item-img"></img>
                        </a>
                        <a className="movies__empty">
                            
                        </a>

                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>

                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                        <a className="movies__empty">
                            
                        </a>
                    </div>
                    <Footer></Footer>
                </div>
            </>
        )
    }
}