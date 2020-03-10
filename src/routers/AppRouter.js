import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/Home'
import TelevisionPage from '../components/TelevisionPage'
import MovieDetailPage from '../components/MovieDetailPage'
import ShowDetailPage from '../components/ShowDetailPage'

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
                            to="/discover/Popular/Movies"
                        />
                    )} 
                />
                <Route path="/discover/:name/Movies" exact component={HomePage} />
                <Route path="/discover/:name/TV" exact component={TelevisionPage} />
                <Route exact path="/movie/:id" component={MovieDetailPage} />
                <Route exact path="/tv/:id" component={ShowDetailPage} />
            </Switch>
        </Router>       
    )    
}

export default AppRouter


// <Redirect exact from="/" to="/discover/Popular"/>