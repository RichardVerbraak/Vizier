import React from 'react'

import Navigation from './Navigation'
import Category from './Category'
import Movies from './Movies'
import Footer from './Footer'

class DashboardPage extends React.Component {
    
    render() {
        return (            
            <>
            {console.log(this.props)}    
            <Navigation></Navigation>   
            <div className="container">
                <Category title={'Popular'} sub={'Movies'}></Category>
                <Movies></Movies>
                <Footer></Footer>
            </div>
            </>
        )
    }
}

export default DashboardPage