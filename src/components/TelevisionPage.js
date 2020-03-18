import React from 'react'
import {connect} from 'react-redux'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

import Navigation from './Navigation'
import Category from './Category'
import ShowList from './ShowList'
import Footer from './Footer'
import { startGetShows } from '../actions/tv'
import { getPage } from '../actions/movies'

// Somehow, fetch data from the Redux store and pass that down to the components
// Pass handlers down to the Child components 

// Maybe make a button that gets passed down in footer

// Helpful https://stackoverflow.com/questions/40352310/how-do-you-mix-componentdidmount-with-react-redux-connect
// https://codereview.stackexchange.com/questions/206902/react-container-component-to-fetch-paginated-data-for-a-stateless-table-componen



class TelevisionPage extends React.Component {
    
    // If there is a search query --> parse the page number --> Fetch data based on the page number 
    componentDidMount() {           
        const filter = this.props.match.params.name      
        if (this.props.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page

            this.props.getShows(filter, parsed)
            this.props.getPage(parsed)
        } else {
            this.props.getShows(filter)
            this.props.getPage()
        }        
    }

    // If the search query changed --> Fetch data
    componentDidUpdate(prevProps) {
        const filter = this.props.match.params.name             
        if (this.props.location.search !== prevProps.location.search) {
            const queryString = require('query-string')
            const parsed = queryString.parse(this.props.location.search).page
            

            this.props.getShows(filter, parsed)
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
                {this.props.isLoading ? 
                    <div className="loader">
                        <ClipLoader                    
                            size={150}
                            color={"#D72525"}
                            loading={!!this.props.isLoading}
                        />
                    </div> 
                    :
                    <div className="container">
                        <Category title={this.props.match.params.name} sub={'Tv Shows'} />
                        <ShowList isLoading={this.props.isLoading} resetPage={this.resetPage} shows={this.props.shows}/>  
                        <Footer />
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shows: state.shows,
        isLoading: state.isLoading,
        currentPage: state.currentPage
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShows: (filter, page) => dispatch(startGetShows(filter, page)),
        getPage: (query) => dispatch(getPage(query))
    }
}

const ConnectedTelevisionPage = connect(mapStateToProps, mapDispatchToProps)(TelevisionPage)

export default ConnectedTelevisionPage

