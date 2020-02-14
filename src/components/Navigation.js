import React from 'react'

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation__logo-box">
                    <div className="navigation__logo">Vizier</div>
                </div>                
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