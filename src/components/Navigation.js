import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {pageChange} from '../actions/movies' 

// TODO: The search filter should be a component of its own
// Maybe the sign in button as well


class Navigation extends React.Component {

    // Reset back to page 1 when logo is clicked
    onClick = () => {
        this.props.pageChange(1)
    }
    
    render() {
        return (
            <div className="navigation">
                <Link onClick={this.onClick} to="/discover/popular/movies" className="logo__box">
                    <div className="logo">Vizier</div>
                </Link>                
                <form action="#" className="navigation__search">
                    <input className="navigation__search--bar" type="text" placeholder="Search Tv Shows..."></input>
                </form>

                <div className="navigation__items">
                    <Link onClick={this.onClick} to="/discover/popular/movies" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Movies</p>
                    </Link>

                    <a href="#" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Tv Shows</p>
                    </a>

                    <a href="#" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Your List</p>
                    </a>           
                </div>
                <button className="btn btn__sign-in">Sign In</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageChange: (pageNum) => dispatch(pageChange(pageNum))
    }
}

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default ConnectedNavigation