import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/Home'
import MovieDetailPage from '../components/MovieDetailPage'

// TODO: DONT FORGET TO USE THIS APP AS THE NEW VIZIER THIS ONE HAS NEW NOTES

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
                            to="/discover/Popular"
                        />
                    )} 
                />
                <Route path="/discover/:name" exact component={HomePage} />
                <Route exact path="/movie/:id" component={MovieDetailPage} />
            </Switch>
        </Router>       
    )    
}

export default AppRouter


// <Redirect exact from="/" to="/discover/Popular"/>