import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import sprite from '../sprite.svg'


class Filter extends React.Component {
    state = {
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
            <div className="category__dropdown">
                <p className="category__dropdown-current selected">{this.props.match.params.name.replace(/_/g, " ")}</p>
                <svg className="category__dropdown-arrow" onClick={this.selectFilter}>
                    <use href={sprite + "#icon-triangle-down"}></use>
                </svg>
                {this.state.selected && 
                    <ul className="category__dropdown-list">
                        <NavLink to={`/discover/popular/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Popular</NavLink>
                        <NavLink to={`/discover/top_rated/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Top Rated</NavLink>
                        {this.props.media !== 'tv' && 
                            <NavLink to={`/discover/upcoming/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Upcoming</NavLink>
                        }                        
                    </ul>
                }                     
            </div>
        )
    }
}

const ConnectedFilter = withRouter(Filter)

export default ConnectedFilter