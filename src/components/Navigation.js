import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetSearchResults } from '../actions/movies'

// TODO: The search filter should be a component of its own
// Maybe the sign in button as well

// Link to /discover/Popular (interpolate the popular part)


class Navigation extends React.Component {
    state = {
        search: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        this.props.history.push(`/search/${this.state.search}`)
    }
    
    // e.persist() lets you access e.target.value in the callback for setState
    // If you dont use persist or store the target.value in a variable, you'll get an error because you're using it in the setState callback, which doesn't run right away
    updateInput = (e) => {
        e.persist()
        this.setState(() => {
            return {
                search: e.target.value
            }
        })
        console.log(this.state.search)
    }
    

    render() {
        console.log(this.props)
        return (
            <div className="navigation">
                
                <Link to="/discover/Popular/Movies" className="logo__box">
                    <div className="logo">Vizier</div>
                </Link>                
                
                <form onSubmit={this.onSubmit} className="navigation__search">
                    <input className="navigation__search--bar" onChange={this.updateInput} type="text" placeholder="Search Tv Shows..."></input>
                </form>

                <div className="navigation__items">
                    <NavLink  to="/discover/Popular/Movies" className="navigation__items-box" activeClassName="selected">
                        <p className="navigation__items--item navigation__items--item-1">Movies</p>
                    </NavLink>

                    <Link to="/discover/Popular/TV" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Tv Shows</p>
                    </Link>

                    <Link to="/watchlist" className="navigation__items-box">
                        <p className="navigation__items--item navigation__items--item-1">Your List</p>
                    </Link>           
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
        getSearchResults: () => dispatch(startGetSearchResults())
    }
}

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))

export default ConnectedNavigation