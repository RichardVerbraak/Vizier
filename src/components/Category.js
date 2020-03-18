import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import sprite from '../sprite.svg'

// Link on using sprite svgs in React: 

// Create dropdown menu or filter?
// If sorted by tv shows or movies, show that below
class Category extends React.Component {
    state = {
        title: this.props.title,
        media: this.props.media,
        selected: false
    }

    selectFilter = () => {
        this.setState(() => {
            return {
                selected: !this.state.selected
            }
        })
    }

    render() {
        return (
            <div className="category">
                <div className="category__heading">
                    <h2 className="category__heading--main">{this.state.title}</h2>
                    <div className="category__dropdown">
                        <p className="category__dropdown-current selected">{this.props.match.params.name}</p>
                        <svg className="category__dropdown-arrow" onClick={this.selectFilter}>
                            <use href={sprite + "#icon-triangle-down"}></use>
                        </svg>
                        {this.state.selected && 
                            <ul className="category__dropdown-list">
                                <NavLink to={`/discover/popular/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Popular</NavLink>
                                <NavLink to={`/discover/top_rated/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Top Rated</NavLink>
                                <NavLink to={`/discover/upcoming/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Upcoming</NavLink>
                            </ul>
                        }                     
                    </div>
                    <h3 className="category__heading--sub">{this.state.media}</h3>                    
                </div>
            </div>
        )
    }
}

const ConnectedCategory = withRouter(Category)

export default ConnectedCategory