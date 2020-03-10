import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

// TODO: The search filter should be a component of its own
// Maybe the sign in button as well

// Link to /discover/Popular (interpolate the popular part)


class Navigation extends React.Component {

    render() {
        return (
            <div className="navigation">
                <Link to="/discover/Popular/Movies" className="logo__box">
                    <div className="logo">Vizier</div>
                </Link>                
                <form action="#" className="navigation__search">
                    <input className="navigation__search--bar" type="text" placeholder="Search Tv Shows..."></input>
                </form>

                <div className="navigation__items">
                    <NavLink  to="/discover/Popular/Movies" className="navigation__items-box" activeClassName="selected">
                        <p className="navigation__items--item navigation__items--item-1">Movies</p>
                    </NavLink>

                    <Link to="/discover/Popular/TV" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Tv Shows</p>
                    </Link>

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

const ConnectedNavigation = connect(mapStateToProps, undefined)(Navigation)

export default ConnectedNavigation