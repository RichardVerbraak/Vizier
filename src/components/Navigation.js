import React from 'react'
import { Link } from 'react-router-dom'

// TODO: The search filter should be a component of its own
// Maybe the sign in button as well


export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/" className="logo__box">
                    <div className="logo">Vizier</div>
                </Link>                
                <form action="#" className="navigation__search">
                    <input className="navigation__search--bar" type="text" placeholder="Search Tv Shows..."></input>
                </form>

                <div className="navigation__items">
                    <a href="#" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Movies</p>
                    </a>

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