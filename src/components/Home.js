import React from 'react'
import {connect} from 'react-redux'

import Navigation from './Navigation'
import MovieList from './MovieList'
import Footer from './Footer'
import { startGetMovies, getPage } from '../actions/movies'

// Somehow, fetch data from the Redux store and pass that down to the components
// Pass handlers down to the Child components 

// Maybe make a button that gets passed down in footer

// Helpful https://stackoverflow.com/questions/40352310/how-do-you-mix-componentdidmount-with-react-redux-connect
// https://codereview.stackexchange.com/questions/206902/react-container-component-to-fetch-paginated-data-for-a-stateless-table-componen

class HomePage extends React.Component {
    
    // If there is a search query --> parse the page number --> Fetch data based on the page number 
    componentDidMount() {               
        if (this.props.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page

            this.props.getMovies(parsed)
            this.props.getPage(parsed)
        } else {
            this.props.getMovies()
            this.props.getPage()
        }        
    }

    // If the search query changed --> Fetch data
    componentDidUpdate(prevProps) {           
        if (this.props.location.search !== prevProps.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page
            

            this.props.getMovies(parsed)
            this.props.getPage(parsed)
            
            console.log(parsed)
        }        
    }

    // Passed down MovieList and then to Movies
    resetPage = () => {
        this.props.getPage()
    }
    
    render() {
        return (        
            <>
            <Navigation/>
            <div className="container">
                {this.props.isLoading ? <div>Loading...</div> : <MovieList resetPage={this.resetPage} movies={this.props.movies}/>}  
                <Footer />
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        isLoading: state.isLoading,
        currentPage: state.currentPage
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (page) => dispatch(startGetMovies(page)),
        getPage: (query) => dispatch(getPage(query))
    }
}

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default ConnectedHomePage