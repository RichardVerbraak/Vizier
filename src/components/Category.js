import React from 'react'
import ReactDOM from 'react-dom'
import sprite from '../sprite.svg'

// Link on using sprite svgs in React: https://medium.com/@gineetmehta/how-to-use-svg-sprites-regular-html-vs-react-9f98948c03f0

// Create dropdown menu or filter?
// If sorted by tv shows or movies, show that below
export default class Category extends React.Component {
    state = {
        title: this.props.title,
        sub: this.props.sub
    }

    render() {
        return (
            <div className="category">
                <div className="category__heading">
                    <h2 className="category__heading--main">{this.state.title}</h2>
                    <div className="category__dropdown">
                        <p className="category__dropdown-current">Popular</p>
                        <svg className="category__dropdown-arrow">
                            <use href={sprite + "#icon-triangle-down"}></use>
                        </svg>                       
                        <ul className="category__dropdown-list">
                            <li className="category__dropdown-item">Popular</li>
                            <li className="category__dropdown-item">Top Rated</li>
                            <li className="category__dropdown-item">Upcoming</li>
                        </ul>
                    </div>
                    <h3 className="category__heading--sub">{this.state.sub}</h3>                    
                </div>
            </div>
        )
    }
}