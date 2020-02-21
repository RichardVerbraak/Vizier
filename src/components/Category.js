import React from 'react'
import ReactDOM from 'react-dom'

// Create dropdown menu or filter?
// If sorted by tv shows or movies, show that below
export default class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <div className="category__heading">
                    <h2 className="category__heading--main">Popular</h2>
                    <h3 className="category__heading--sub">Movies</h3>                    
                </div>
            </div>
        )
    }
}