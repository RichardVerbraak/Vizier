import React from 'react'
import ReactDOM from 'react-dom'
import image from '../ph-mrrobot.jpg'


// Use map or forEach to loop through data and make an item for each one
export default class Movies extends React.Component {
    render() {
        return (
            <div className="movies">

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
                <a className="movies__item">
                    <img src={image} className="movies__item-img"></img>
                </a>
            </div>
        )
    }
}