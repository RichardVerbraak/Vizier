import React from 'react'
import ReactDOM from 'react-dom'

// Create dropdown menu or filter?
export default class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <div className="category__heading">
                    <h2 className="category__heading--main">TV Shows</h2>
                    <h3 className="category__heading--sub">Action</h3>                    
                </div>
            </div>
        )
    }
}