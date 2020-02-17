import React from 'react'
import image from '../ph-mrrobot.jpg'
import { Link } from 'react-router-dom'


// Make stateless functional component that gets props from a class component that holds state and pass that in here to render the movie
// Use map or forEach to loop through data and make an item for each one
export default class Movies extends React.Component {
    render() {
        return (
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
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>

                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>

                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>

                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
            </div>
        )
    }
}