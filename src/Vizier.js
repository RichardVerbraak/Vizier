import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage'
import MovieDetailPage from './components/MovieDetailPage'
import WatchlistPage from './components/WatchlistPage'
import LoginPage from './components/LoginPage'


export default class Vizier extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={DashboardPage}/>
                    <Route path="/movie/:id" component={MovieDetailPage}/>
                    <Route path="/watchlist" component={WatchlistPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>               
            </Router>
        )
    }
}