import React from 'react'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Category from './Category'
import { Link } from 'react-router-dom'
import image from '../ph-mrrobot.jpg'
import Footer from './Footer'


class WatchListPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Navigation/>   
                <div className="container">
                    <Category title={'your list'}></Category>
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

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist
    }
}

const ConnectedWatchListPage = connect(mapStateToProps, undefined)(WatchListPage)

export default ConnectedWatchListPage