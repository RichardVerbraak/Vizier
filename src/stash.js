// import React from 'react'
// import { connect } from 'react-redux'
// import { startGetMovies } from '../actions/movies'


// // Updating state in the lifecycle method will trigger another render but it happens before the browser updates the screen
// // The user wont see the 'intermediate' state in between,

// // Dont forget to return the fetch data next time!

// // When we have the data, dispatch the action and set the state
// class Movie extends React.Component {    
    
//     // Call the function to start loading movies
//     componentDidMount() {
//         console.log('mounted')
//         this.props.startGetMovies()
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.movies.map((movie) => {
//                     return <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie.id} alt={`A poster of ${movie.title}`}></img>
//                 })}
//             </div>
//         )        
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         movies: state.movies
//     }
// }

// export default connect(mapStateToProps, {startGetMovies})(Movie)


///!!!!!!!!!! OLD RECOMMENDED COMPONENT

// import React from 'react'
// import { Link } from 'react-router-dom'

// import { connect } from 'react-redux'
// import Category from './Category'


// class Recommended extends React.Component {

//      render() {
//         return (
//             <>
//             <Category title={'Recommended'}></Category>
//             <div className="movies">            
//                 {   
//                     this.props.recommended.map((movie) => {
//                         return (
//                             <Link key={movie.id} to={`${movie.id}`}  className="movies__item">
//                                 <img
//                                     key={movie.id}
//                                     src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
//                                     className="movies__item-img"
//                                     alt={`A poster of ${movie.title}`}
//                                 >
//                                 </img>
//                             </Link>
//                         )                      
//                     })
//                 }
//             </div>
//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         recommended: state.recommended
//     }
// }

// const ConnectedRecommended = connect(mapStateToProps)(Recommended)

// export default ConnectedRecommended



/////!!!!!!!!!!!!!!!! MovieDetailPage

// Fetch movies and cast based on the ID in the url
    // Considerably faster when fetching recommended data in here?
    // componentDidMount() {        
    //     const queryString = require('query-string')
    //     const parsed = queryString.parse(this.props.location.search)        
        
    //     this.props.getMovieDetails(this.props.match.params.id)
    //     this.props.getMovieCast(this.props.match.params.id)
    //     this.props.getRecommended(this.props.match.params.id, parsed.page)  
    // }