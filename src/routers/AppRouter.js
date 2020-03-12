import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/Home'
import SearchPage from '../components/SearchPage'
import TelevisionPage from '../components/TelevisionPage'
import MovieDetailPage from '../components/MovieDetailPage'
import ShowDetailPage from '../components/ShowDetailPage'
import WatchListPage from '../components/WatchlistPage'

// Uninstall
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const AppRouter = () => {    
    return (
        <Router history={history}>
            <Switch>                
                <Route 
                    path='/' 
                    exact
                    render={() => (
                        <Redirect
                            from="/"
                            to="/discover/Popular/Movies"
                        />
                    )} 
                />
                <Route exact path="/discover/:name/Movies" component={HomePage} />
                <Route exact path="/search/:query" component={SearchPage} />
                <Route exact path="/discover/:name/TV" component={TelevisionPage} />
                <Route exact path="/movie/:id" component={MovieDetailPage} />
                <Route exact path="/tv/:id" component={ShowDetailPage} />
                <Route exact path="/watchlist" component={WatchListPage} />
            </Switch>
        </Router>       
    )    
}

export default AppRouter


// <Redirect exact from="/" to="/discover/Popular"/>