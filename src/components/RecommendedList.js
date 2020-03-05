import React from 'react'
import Recommended from './Recommended'
import { connect } from 'react-redux'
import { startGetRecommended, isLoading } from '../actions/movies'

// TODO: Fetch the amount of pages first to determine if there are no more then X results (??idk)

class RecommendedList extends React.Component {
    
    // Parses the query string (?page=2) to only the number 2 --> Fetch movies by page number    
    componentDidMount() {
        const queryString = require('query-string')
        const parsed = queryString.parse(this.props.location.search)       
        
        this.props.getRecommended(this.props.match.params.id, parsed.page)  
    }

    render() {
        return (                                  
            <Recommended recommended={this.props.recommended} />                      
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        recommended: state.recommended,
        isLoading: state.isLoading
    }
}

// 'Connect' the action to the component so it can be dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommended: (id, pageNum) => dispatch(startGetRecommended(id, pageNum)),
        isLoading: () => dispatch(isLoading())
    }
}

const ConnectedRecommendedList = connect(mapStateToProps, mapDispatchToProps)(RecommendedList)

export default ConnectedRecommendedList