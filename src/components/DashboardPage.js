import React from 'react'
import Category from './Category'
import Movies from './Movies'
import Footer from './Footer'

class DashboardPage extends React.Component {
    render() {
        return (       
            <div className="container">
                <Category></Category>
                <Movies></Movies>
                <Footer></Footer>
            </div>
        )
    }
}

export default DashboardPage