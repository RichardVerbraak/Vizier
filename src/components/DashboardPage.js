import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'
import Category from './Category'
import MovieList from './MovieList'
import Footer from './Footer'

// Probably not the best way to pass props down like this, refactor if possible
// <Category title={'Popular'} sub={'Movies'}></Category>

class DashboardPage extends React.Component {
    render() {
        return (            
            <>   
                <Navigation/>   
                <div className="container">
                    <Category title={'Popular'}></Category>
                    <Route key={this.props.location.search} component={MovieList}/>
                    <Route key={this.props} component={Footer}></Route>
                </div>
            </>
        )
    }   
}

export default DashboardPage