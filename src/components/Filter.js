import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import sprite from '../sprite.svg'

// If on the TV page (media = tv), then don't show the upcoming button because the API doesn't provide that for tv shows

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
            <>
                <input type="checkbox" className="category__checkbox" id="category__dropdown-toggle"/>
                <label className="category__dropdown" htmlFor="category__dropdown-toggle">
                    <p className="category__dropdown-current selected">{this.props.match.params.name.replace(/_/g, " ")}</p>
                    
                    <svg className="category__dropdown-arrow" onClick={this.selectFilter}>
                        <use href={sprite + "#icon-triangle-down"}></use>
                    </svg>
                            
                    <ul className="category__dropdown-list">
                        <NavLink to={`/discover/popular/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Popular</NavLink>
                        <NavLink to={`/discover/top_rated/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Top Rated</NavLink>
                        {this.props.media !== 'tv' && 
                            <NavLink to={`/discover/upcoming/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Upcoming</NavLink>
                        }                        
                    </ul>                                     
                </label>
            </>
        )
    }
}

// Why did I use withRouter again?
const ConnectedFilter = withRouter(Filter)

export default ConnectedFilter

// {this.state.selected && 
//     <ul className="category__dropdown-list">
//         <NavLink to={`/discover/popular/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Popular</NavLink>
//         <NavLink to={`/discover/top_rated/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Top Rated</NavLink>
//         {this.props.media !== 'tv' && 
//             <NavLink to={`/discover/upcoming/${this.props.media}`} className="category__dropdown-list--item" activeClassName="selected">Upcoming</NavLink>
//         }                        
//     </ul>
// }