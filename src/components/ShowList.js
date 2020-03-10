import React from 'react'
import Shows from './Shows'

class ShowList extends React.Component {
    render() {
        if (this.props.shows) {
            return (                                  
                <Shows resetPage={this.props.resetPage} shows={this.props.shows} />                      
            )
        } else {
            return (
                <div>Nothing</div>
            )
        }
        
    }    
}

export default ShowList