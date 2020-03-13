import React from 'react'
import Movies from './Movies'

class MovieList extends React.Component {
    render() {
        if (this.props.movies) {
            return (                                  
                <Movies addToWatchList={this.props.addToWatchList} resetPage={this.props.resetPage} movies={this.props.movies} />                      
            )
        } else {
            return (
                <div>Nothing</div>
            )
        }
        
    }    
}

export default MovieList