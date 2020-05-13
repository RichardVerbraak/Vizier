import React from 'react'
import Movies from './Movies'

class MovieList extends React.Component {
    render() {
        return (                                  
            <Movies 
                addWatchList={this.props.addWatchList}
                removeWatchList={this.props.removeWatchList} 
                resetPage={this.props.resetPage} 
                movies={this.props.movies}
                watchlist={this.props.watchlist}
            />                      
        )                
    }    
}

export default MovieList