import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/Home'
import SearchPage from '../components/SearchPage'
import TelevisionPage from '../components/TelevisionPage'
import MovieDetailPage from '../components/MovieDetailPage'
import ShowDetailPage from '../components/ShowDetailPage'
import WatchListPage from '../components/WatchListPage'
import LoginPage from '../components/LoginPage'

// Uninstall or use Router instead of browserrouter because history gets ignored now

const AppRouter = () => {    
    return (
        <Router>
            <Switch>                
                <Route 
                    path='/' 
                    exact
                    render={() => (
                        <Redirect
                            from="/"
                            to="/discover/popular/movies"
                        />
                    )} 
                />
                <Route exact path="/discover/:name/movies" component={HomePage} />
                <Route exact path="/search/:media/:query" component={SearchPage} />
                <Route exact path="/discover/:name/TV" component={TelevisionPage} />
                <Route exact path="/movie/:id" component={MovieDetailPage} />
                <Route exact path="/tv/:id" component={ShowDetailPage} />
                <Route exact path="/watchlist" component={WatchListPage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Router>       
    )    
}

export default AppRouter


// <Redirect exact from="/" to="/discover/Popular"/>