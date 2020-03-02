import React from 'react'
import {withRouter, Route} from 'react-router-dom'

import Navigation from './Navigation'
import Category from './Category'
import Movies from './Movies'
import Footer from './Footer'

// Probably not the best way to pass props down like this, refactor if possible
// <Category title={'Popular'} sub={'Movies'}></Category>

class DashboardPage extends React.Component {
    render() {
        return (            
            <>   
            <Navigation></Navigation>   
            <div className="container">
                <Category></Category>
                <Route key={this.props.location.search} component={Movies}/>
                <Footer></Footer>
            </div>
            </>
        )
    }   
}

export default DashboardPage