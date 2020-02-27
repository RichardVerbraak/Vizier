import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardPage from './components/DashboardPage'
import MovieDetailPage from './components/MovieDetailPage'
import Recommended from './components/Recommended'
import WatchlistPage from './components/WatchlistPage'
import LoginPage from './components/LoginPage'

// Need to uninstall from node modules as well
// export const history = createHistory()

// Needed to spread out the props, these props are given by the Route (match, history, location) and are used inside of the component
// The detail page now rerenders because of the React key triggering another mount of the component
// The key changes depending on the id in the current URL


export default class Vizier extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={DashboardPage}/>
                    <Route 
                        path="/movie/:id" 
                        render={(props) => (
                            <MovieDetailPage key={props.match.params.id} {...props} />
                        )}
                    />
                    <Route path="/watchlist" component={WatchlistPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>               
            </Router>
        )
    }
}