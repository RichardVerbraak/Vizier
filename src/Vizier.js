import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage'
import MovieDetailPage from './components/MovieDetailPage'
import Navigation from './components/Navigation';

export default class Vizier extends React.Component {
    render() {
        return (
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route exact={true} path="/">
                        <DashboardPage></DashboardPage>
                    </Route>
                    <Route path="/movie">
                        <MovieDetailPage></MovieDetailPage>
                    </Route>
                </Switch>               
            </Router>
        )
    }
}