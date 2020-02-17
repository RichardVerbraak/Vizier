import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage'
import MovieDetailPage from './components/MovieDetailPage'
import Navigation from './components/Navigation';
import WatchlistPage from './components/WatchlistPage'
import LoginPage from './components/LoginPage'

export default class Vizier extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <DashboardPage></DashboardPage>
                    </Route>
                    <Route path="/movie">
                        <MovieDetailPage></MovieDetailPage>
                    </Route>
                    <Route path="/watchlist">
                        <WatchlistPage></WatchlistPage>
                    </Route>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                </Switch>               
            </Router>
        )
    }
}